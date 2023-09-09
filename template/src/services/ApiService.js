import axios from 'axios';
import { actions, dispatch } from 'store/redux';

import { env } from '../configs/EnvironmentConfig.js';
import AuthHelper from '../helpers/AuthHelper.js';

const { IsLogin, LogoutAuth, GetAuthInfoByKey } = AuthHelper;

const {
  system: { ShowLoaderAction, HideLoaderAction },
} = actions;

class ApiService {
  private service;

  private apiCallQueue = [];

  constructor() {
    this.service = axios.create({
      baseURL: env.baseURL,
      timeout: 125000,
    });
    this.service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.setToken();
  }

  addApiQueue = (url) => {
    if (this.apiCallQueue.length === 0) {
      dispatch(ShowLoaderAction());
    }
    this.apiCallQueue.push(url);
  };

  checkApiQueueEnd = (url) => {
    this.apiCallQueue = this.apiCallQueue.filter((item) => item !== url);
    if (this.apiCallQueue.length === 0) {
      dispatch(HideLoaderAction());
    }
  };

  handleSuccess = (response) => {
    this.checkApiQueueEnd(response.config.url ?? '');
    return response.data;
  };

  handleError = (error) => {
    this.checkApiQueueEnd(error.config.url ? error.config.url : '');
    console.log(error);
    return Promise.reject({
      ...error,
      ...error.response,
      status: error.status,
    });
  };

  private apiGateway = (apiCall) => {
    return new Promise((resolve, reject) => {
      apiCall()
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  };

  setToken = () => {
    this.service.interceptors.request.use((config) => {
      const token = GetAuthInfoByKey('token');
      if (IsLogin() && token) {
        config.headers.Authorization = `Bearer ${ token}`;
      } else {
        LogoutAuth();
      }
      return config;
    });
  };

  get = (url) => {
    this.addApiQueue(url);
    return this.apiGateway(() => {
      return this.service.get(url);
    });
  };

  post = (url, body) => {
    this.addApiQueue(url);
    return this.apiGateway(() => {
      return this.service.post(url, body);
    });
  };

  put = (url, body) => {
    this.addApiQueue(url);
    return this.apiGateway(() => {
      return this.service.put(url, body);
    });
  };

  delete = (url, body = {}) => {
    this.addApiQueue(url);
    return this.apiGateway(() => {
      return this.service.delete(url, body);
    });
  };
}

export default new ApiService();

const apis = {
  development: {
    baseURL: 'http://localhost:8080/api/v1/',
  },
  production: {
    baseURL: 'http://localhost:8080/api/v1/',
  },
};
export const env = apis[process.env.NODE_ENV];

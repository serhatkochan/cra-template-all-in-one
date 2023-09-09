import { AppConfig } from '../configs/AppConfig.js';
import LocalStorageHelper from './LocalStorageHelper.js';

const {
  LocalStorageKeys, GetLocalStorageItem,
  SetLocalStorageItem, UpdateLocalStorageItem,
} = LocalStorageHelper;

const defaultSystemConfig = {
  language: 'tr',
};

const GetLocalSystemConfig = () => {
  const localData = GetLocalStorageItem(LocalStorageKeys.SYSTEM);
  let result = { ...defaultSystemConfig };

  if (localData) {
    result = { ...localData };

    if (localData.version !== AppConfig.version) {
      // merged version
    }
  } else {
    SetLocalStorageItem(LocalStorageKeys.SYSTEM, result);
  }

  return result;
};

const UpdateSystemConfig = (key, value) => {
  const oldLocalData = GetLocalStorageItem(LocalStorageKeys.SYSTEM);
  let newLocalData;
  if (oldLocalData) {
    newLocalData = {
      ...oldLocalData,
      [key]: value,
    };
  } else {
    newLocalData = {
      ...defaultSystemConfig,
      [key]: value,
    };
  }

  UpdateLocalStorageItem(LocalStorageKeys.SYSTEM, newLocalData);
};

const GetLanguage = () => {
  const localData = GetLocalStorageItem(LocalStorageKeys.SYSTEM);
  const result = localData || defaultSystemConfig;
  return result.language;
};

const SystemHelper = {
  defaultSystemConfig,
  GetLocalSystemConfig,
  UpdateSystemConfig,
  GetLanguage,
};
export default SystemHelper;

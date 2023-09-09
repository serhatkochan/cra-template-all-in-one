const LocalStorageKeys = {
  SYSTEM: 'SYSTEM',
  AUTH: 'AUTH',
};

const SetLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const UpdateLocalStorageItem = (key, value) => {
  const oldData = localStorage.getItem(key);
  if (oldData && value !== null) {
    const newData = {
      ...JSON.parse(oldData),
      ...value,
    };
    SetLocalStorageItem(key, newData);
  }
};

const GetLocalStorageItem = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const DeleteLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};
const LocalStorageHelper = {
  LocalStorageKeys,
  SetLocalStorageItem,
  UpdateLocalStorageItem,
  GetLocalStorageItem,
  DeleteLocalStorageItem,
};

export default LocalStorageHelper;

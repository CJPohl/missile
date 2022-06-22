import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

// Use noop storage on node
// Use local storage on browser
const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

export default storage;

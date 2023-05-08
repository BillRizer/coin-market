type StorageKeyType = string;

export const get = (key: StorageKeyType): any | null => {
  try {
    const item = window.localStorage.getItem(key);
    if (!item) return null;
    return JSON.parse(item);
  } catch (error) {
    console.error(`Error getting item from localStorage: ${error}`);
    return null;
  }
};
export const set = (key: StorageKeyType, value: any): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting item to localStorage: ${error}`);
  }
};
export const remove = (key: StorageKeyType): void => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item from localStorage: ${error}`);
  }
};

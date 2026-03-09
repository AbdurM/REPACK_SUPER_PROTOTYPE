import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataAsyncStorage = async (key:string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    return null;
  }
};

export const setDataAsyncStorage = async (key: string, data: string) => {
  try {
    return await AsyncStorage.setItem(key, data);
  } catch (e) {
    // error reading value
    return null;
  }
};

export const removeDataAsyncStorage = async (key:string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    // error reading value
    return null;
  }
};

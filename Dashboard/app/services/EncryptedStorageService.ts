import EncryptedStorage from "react-native-encrypted-storage";
import { GetEncryptDataProps, RemoveEncryptDataProps, SetEncryptDataProps } from "./ServicesModels";


export const getData = async ({
  key,
}: GetEncryptDataProps) => {
    
  try {
    const session = await EncryptedStorage.getItem(key);
    if (session !== null && session !== undefined) {
      return JSON.parse(session);
    }
  } catch (e) {
    return null
  }
};
export const setData = async ({
    key,
    data,
  }: SetEncryptDataProps): Promise<void> => {
    try {
      await EncryptedStorage.setItem(key, JSON.stringify(data));
    } catch (e: unknown) {
      console.error('Error setting data:', e);
    }
  };
  

export const removeData = async ({key}: RemoveEncryptDataProps)=> {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (e) {
    // error reading value
    return null;
  }
};

export const clearStorage = async (): Promise<void> => {
  try {
    await EncryptedStorage.clear();
  } catch (error) {}
};

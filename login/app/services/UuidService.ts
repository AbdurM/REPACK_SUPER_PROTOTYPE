import uuid from 'react-native-uuid';

export const generateUUIDV4 = (): string => {
  try {
    return uuid.v4();
  } catch ( error: any ) {
    return '';
  }
};

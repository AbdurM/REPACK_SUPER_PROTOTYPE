import BootSplash from 'react-native-bootsplash';

export const hideNativeSplash = async (): Promise<void> => {
  try {
    await BootSplash.hide({ fade: true });
  } catch (error) {}
};

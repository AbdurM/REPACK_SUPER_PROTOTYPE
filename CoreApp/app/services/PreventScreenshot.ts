// react-native-screenguard package was removed due to dependency conflicts
// This function is now a no-op but maintains the same interface
import { Platform } from 'react-native';
import ScreenGuardModule from 'react-native-screenguard';

export const preventScreenshot = (value: boolean): void => {
  // For iOS Only  (Android handled in native code)
  if (Platform.OS !== 'ios') {
    return;
  }
  const config: Record<string, any> = {
    radius: 30,
  };
  try {
    if (value) {
      ScreenGuardModule.registerWithBlurView(config);
    } else {
      ScreenGuardModule.unregister();
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

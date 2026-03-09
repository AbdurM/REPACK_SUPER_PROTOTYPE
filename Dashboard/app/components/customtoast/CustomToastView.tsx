
import { ToastAndroid, Platform, Alert } from 'react-native';
import { CustomToastViewProps } from './CustomToastModel';

// Track currently displaying toasts to prevent duplicates
const activeToasts = new Set<string>();

export const CustomToastView = ({ msg }: CustomToastViewProps): void => {
  try {
    // Prevent showing duplicate toasts with the same message
    if (activeToasts.has(msg)) {
      return;
    }

    // Mark this specific toast message as active
    activeToasts.add(msg);

    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
      
      // Clear the message from active toasts after toast duration (SHORT = ~2 seconds)
      setTimeout(() => {
        activeToasts.delete(msg);
      }, 2000);
    } else {
      Alert.alert(msg);
      
      // Clear the message from active toasts after a reasonable duration for iOS alert
      setTimeout(() => {
        activeToasts.delete(msg);
      }, 2000);
    }
  } catch {
    // Reset flag on error
    activeToasts.delete(msg);
  }
}
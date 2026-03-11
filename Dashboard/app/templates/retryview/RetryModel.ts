// Generated from Fingent Boilerplate

import { StyleProp, ViewStyle, TextStyle } from 'react-native';

interface RetryViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleRetry: () => void;
}

interface RetryProps {
  keyValue?: string;
  style?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onRetry: () => void;
  message?: string;
  buttonText?: string;
  [key: string]: any;
}

// Default props
const defaultProps: Partial<RetryProps> = {
  keyValue: 'retryView',
  message: 'Something went wrong',
  buttonText: 'Retry',
};

export type {
  RetryViewModel,
  RetryProps,
};

export { defaultProps };


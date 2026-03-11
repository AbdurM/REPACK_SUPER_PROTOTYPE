// Generated from Fingent Boilerplate

import { StyleProp, ViewStyle } from 'react-native';
import { Theme } from 'utilities/TenantIndex';

interface HeaderViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleProfilePress: () => void;
  handleBackPress: () => void;
  onProfilePress: () => void;
  onBackPress: () => void;
  onQuestionIconPress: () => void;
  tintColor: string;
}

interface HeaderProps {
  keyValue?: string;
  style?: StyleProp<ViewStyle>;
  showBackButton?: boolean;
  showRightIcon?: boolean;
  showQuestionIcon?: boolean;
  handleProfilePress?: () => void;
  handleBackPress?: () => void;
  onQuestionIconPress?: () => void;
  rightIconTintColor?: string;
  leftIconTintColor?: string;
  onProfilePress?: () => void;
  onBackPress?: () => void;
  backgroundColor?: string;
  tintColor?: string;
  [key: string]: any;
}

// Default props
const defaultProps: HeaderProps = {
  keyValue: 'header',
  showBackButton: true,
  showRightIcon: true,
  showQuestionIcon: false,
  rightIconTintColor: Theme.Colors.neutral10,
  leftIconTintColor: Theme.Colors.neutral10,
  tintColor: Theme.Colors.neutral10,
};

export type {
  HeaderViewModel,
  HeaderProps,
};

export { defaultProps };
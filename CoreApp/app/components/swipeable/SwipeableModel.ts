// Generated from Fingent Boilerplate | 2025-09-10 | Jerrin Thomas

import { TextStyle, ViewStyle } from "react-native";
import { Theme } from "utilities/TenantIndex";

interface SwipeableViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RightActionProps {
  rightActionContainerStyle?: ViewStyle;
  rightActionContentContainerStyle?: ViewStyle;
  rightActionText?: string;
  rightActionTextStyle?: TextStyle;
  backgroundcolor?: string;
  onPressRight?: () => void;
}

interface SwipeableProps {
  keyValue?: string;
  children?: any;
  isSwipeEnabled: boolean;
  swipeableStyle?: ViewStyle;
  rightActionContainerStyle?: ViewStyle;
  rightActionContentContainerStyle?: ViewStyle;
  rightActionText?: string;
  rightActionTextStyle?: TextStyle;
  backgroundcolor?: string;
  onPressRight?: () => void;
  testID?: string;
}

// Default props
const defaultProps: SwipeableProps = {
  keyValue: '',
  isSwipeEnabled: true,
  swipeableStyle: {},
  rightActionContainerStyle: {},
  rightActionContentContainerStyle: {},
  rightActionText: '',
  rightActionTextStyle: {},
  backgroundcolor: Theme.Colors.neutral1,
  onPressRight: () => {},
  testID: '',
};

export type { SwipeableProps, SwipeableViewModel, RightActionProps };
export { defaultProps };

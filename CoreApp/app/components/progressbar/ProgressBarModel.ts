// Generated from Fingent Boilerplate

import { StyleProp, ViewStyle } from "react-native";

interface ProgressBarViewModel {
  // No state management needed for this component
}

interface ProgressBarProps {
  keyValue?: string;
  currentStep: number;
  totalSteps: number;
  activeColor: string;
  inactiveColor: string;
  style?: StyleProp<ViewStyle>;
  [key: string]: any;
}

// Default props
const defaultProps: ProgressBarProps = {
  keyValue: "ProgressBar",
  currentStep: 1,
  totalSteps: 4,
  activeColor: "",
  inactiveColor: "",
  style: {},
};

export type { ProgressBarProps, ProgressBarViewModel };
export { defaultProps };
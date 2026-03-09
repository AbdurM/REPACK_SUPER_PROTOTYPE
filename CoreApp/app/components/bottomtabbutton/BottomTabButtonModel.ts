// Generated from Fingent Boilerplate

import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { IconKey } from "../../utilities/Images";

interface BottomTabButtonViewModel {
  tabName: ()=> string;
  getIconDetails: () => { iconName?: IconKey; width: number; height: number } | null;
}

interface BottomTabButtonProps {
  route: any;
  title?: string;
  accessibilityState?: any;
  style?: ViewStyle | TextStyle | ImageStyle;
  keyValue?: string;
  'aria-selected'?: boolean;
  [key: string]: any; // Allow additional props
}

// Default props
const defaultProps: BottomTabButtonProps = {
  route: null,
  title: "",
  accessibilityState: null,
  style: {},
  keyValue: "",
  'aria-selected': false,
};

export type { BottomTabButtonProps, BottomTabButtonViewModel };
export { defaultProps };
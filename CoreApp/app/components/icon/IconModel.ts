// generated from template

import { ImageStyle, ImageResizeMode, ViewStyle } from "react-native";
import { UI } from "utilities/Helpers";
import { IconKey } from 'utilities/Images';

interface IconViewModel extends IconProps {
  handlePress: () => void;
  handleLongPress: () => void;
}

interface IconProps {
  testID?: string;
  keyValue?: string;
  source: IconKey;
  style?: ImageStyle | ImageStyle[];
  resizeMode?: ImageResizeMode;
  width?: number;
  height?: number;
  tintColor?: string;
  // Touchable props
  touchable?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  activeOpacity?: number;
  touchableStyle?: ViewStyle | ViewStyle[];
  hitSlop?: { top?: number; bottom?: number; left?: number; right?: number };
  touchableBackgroundColor?: string; // Background color for TouchableOpacity
}

// Default props
const defaultProps: IconProps = {
  keyValue: "icon_view",
  source: "PLACEHOLDER" as IconKey,
  resizeMode: "contain",
  width: UI.responsiveWidth(5), // Default width
  height: UI.responsiveWidth(5), // Default height
  tintColor: "",
  touchable: false,
  disabled: false,
  activeOpacity: 0.7,
  touchableBackgroundColor: "transparent",
};

export type { IconProps, IconViewModel };
export { defaultProps };
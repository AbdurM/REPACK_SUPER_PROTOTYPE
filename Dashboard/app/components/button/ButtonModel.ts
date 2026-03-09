// generated from template

import { ImageSourcePropType, StyleProp, ViewStyle, ImageStyle } from "react-native";
import { variantTypes } from "../customtext/CustomTextModel";

interface ButtonViewModel {
}

interface ButtonViewProps {
  keyValue?: string;
  onPress: ()=>void;
  testID: string;
  buttonText?: string;
  buttonTextVariant?: variantTypes;
  icon?: ImageSourcePropType;
  iconPosition?: 'left' | 'right';
  iconStyle?: StyleProp<ImageStyle>;
  disabled?: boolean;
  filled?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

// Default props
const defaultProps: ButtonViewProps = {
  keyValue: "",
  onPress: () => {},
  testID: "",
  buttonText: "",
  buttonTextVariant: 'largeBtn',
  iconPosition: 'right',
  disabled: false,
  filled: true,
  color: "",
};

export type {ButtonViewProps, ButtonViewModel};
export { defaultProps };
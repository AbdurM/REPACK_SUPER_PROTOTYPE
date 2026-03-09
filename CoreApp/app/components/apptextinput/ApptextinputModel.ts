// Generated from Fingent Boilerplate

import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { IconKey } from "utilities/Images";
import { variantTypes } from "components/customtext/CustomTextModel";
import { Theme } from "utilities/TenantIndex";
interface ApptextinputViewModel extends ApptextinputProps {
  onChangeText: (event: any) => void;
}

interface ApptextinputProps {
  keyValue?: string;
  title?: string;
  titleVariant?: variantTypes;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  icon?: IconKey;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onIconTouch?: () => void;
  editable?: boolean;
  maxLength?: number;
  textInputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  iconTouchable?: boolean;
  error?: boolean;
  errorMessage?: string;
  actionText?: string;
  onActionPress?: () => void;
  prefixText?: string;
}

// Default props
const defaultProps: ApptextinputProps = {
  keyValue: "",
  iconTouchable: false,
  title: "",
  titleVariant: "h7",
  placeholder: "",
  secureTextEntry: false,
  icon: undefined,
  keyboardType: 'default',
  autoCapitalize: 'none',
  autoCorrect: false,
  value: "",
  editable: true,
  maxLength: 100,
  textInputStyle: {},
  containerStyle: {},
  error: false,
  errorMessage: "",
  actionText: "",
  onActionPress: () => {},
  prefixText: "",
  placeholderTextColor: Theme.Colors.neutral6,
};

export type { ApptextinputProps, ApptextinputViewModel };
export { defaultProps };
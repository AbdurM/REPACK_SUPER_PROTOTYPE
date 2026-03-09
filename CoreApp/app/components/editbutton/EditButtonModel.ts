// Generated from Fingent Boilerplate

import { ViewStyle, TouchableOpacityProps } from "react-native";

interface EditButtonViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface EditButtonProps extends Omit<TouchableOpacityProps, 'onPress'> {
  keyValue?: string;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  buttonText?: string;
  testID?: string;
}

// Default props
const defaultProps: EditButtonProps = {
  keyValue: "edit-button",
  disabled: false,
  buttonText: "Edit",
  activeOpacity: 0.7,
};

export type { EditButtonProps, EditButtonViewModel };
export { defaultProps };

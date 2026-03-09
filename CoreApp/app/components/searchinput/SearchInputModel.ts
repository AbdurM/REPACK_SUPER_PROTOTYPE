// Generated from Fingent Boilerplate | 2025-09-09 | Jerrin Thomas

import { TextStyle, ViewStyle } from "react-native";
import { Theme } from "utilities/TenantIndex";

interface SearchInputViewModel extends SearchInputProps {
  onChangeText: (event: any) => void;
}

interface SearchInputProps {
  keyValue?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  iconSource?: string;
  placeholderTextColor?: string;
  editable?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}
// Default props
const defaultProps: SearchInputProps = {
  keyValue: "search_input",
  placeholder: "",
  value: "",
  containerStyle: {},
  textInputStyle: {},
  iconSource: "SEARCH",
  placeholderTextColor: Theme.Colors.neutral1,
  editable: true,
};

export type { SearchInputProps, SearchInputViewModel };
export { defaultProps };

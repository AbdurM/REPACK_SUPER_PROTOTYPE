// generated from template

import { BottomSheetRef } from "components/bottomsheet/BottomSheetModel";
import { CustomTextViewProps } from "components/customtext/CustomTextModel";
import { ViewStyle, TouchableOpacityProps } from "react-native";
import { Theme } from "utilities/TenantIndex";

// Removed RootState - component is now generic and doesn't depend on Redux

interface SelectOptionViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  tempSelectedItem: string | null;
  handlePress: () => void;
  handleItemSelect: (item: ListItem) => void;
  handleDonePress: () => void;
  getDynamicStyles: () => any;
  getStatusStyle: (status?: string) => any;
  getStatusTextStyle: (status?: string) => any;
  getItemId: (item: ListItem) => string | null;
  selectedOption: SelectOptionItem | undefined;
  selectedListItem: ListItem | undefined;
  isPlaceholder: boolean;
  showStatusBadge?: boolean;
}

type SelectOptionItem = {
  label: string;
  value: string | number;
};

type ListItem = {
  id: string;
  selected?: boolean;
  currency?: string;
  value?: string;
  title?: string;
  status?: string;
  description?: string;
};

interface SelectOptionProps extends Omit<TouchableOpacityProps, 'onPress'> {
  keyValue?: string;
  label?: string;
  value?: string | number;
  placeholder?: string;
  options?: SelectOptionItem[];
  onSelect?: (item: SelectOptionItem) => void;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  showChevron?: boolean;
  variant?: CustomTextViewProps['variant'];
  dynamicWidth?: boolean;
  minWidth?: number;
  maxWidth?: number;
  color?: string;
  backgroundColor?: string;
  textColor?: string;
  showOptionsList?: boolean;
  optionTitle?: string;
  optionDescription?: string;
  optionMainTitle?: string;
  bottomSheetRef?: React.RefObject<BottomSheetRef | null>;
  // Generic list selection props
  list?: ListItem[];
  selectedItem?: string | null;
  activeItemId?: string | null; // Active item ID (e.g., activePolicyId) passed as prop
  onItemSelect?: (item: ListItem) => void;
  onDone?: (itemId: string | null) => void;
  borderColor?: string;
  chevronIconColor?: string;
  containerStyle?: ViewStyle;
  textContainerStyle?: ViewStyle;
  showStatusBadge?: boolean;
  hideOptionSeparators?: boolean;
  showOptionIcons?: boolean;
  bottomSheetSize?: 'small' | 'medium' | 'large' | 'dynamic';
  showID?: boolean;
  scrollHeight?: number;
  buttonText?: string;
}

// Default props
const defaultProps: SelectOptionProps = {
  keyValue: "select_option",
  placeholder: "Select an option",
  showChevron: true,
  disabled: false,
  variant: 'body_m_n1',
  options: [],
  dynamicWidth: false,
  color: Theme.Colors.neutral10,
  backgroundColor: Theme.Colors.primary3,
  textColor: Theme.Colors.neutral10,
  borderColor: Theme.Colors.neutral4,
  showOptionsList: true,
  optionTitle: "SELECT OPTION",
  bottomSheetRef: undefined,
  list: [],
  showStatusBadge: true,
  hideOptionSeparators: false,
  showOptionIcons: false,
  showID: true,
  buttonText: undefined,
};

export type { SelectOptionProps, SelectOptionViewModel, SelectOptionItem, ListItem };
export { defaultProps };

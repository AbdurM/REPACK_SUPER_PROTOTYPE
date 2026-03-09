// generated from template

import { BottomSheetRef } from "components/bottomsheet/BottomSheetModel";
import { CustomTextViewProps } from "components/customtext/CustomTextModel";
import { ViewStyle, TouchableOpacityProps } from "react-native";
import { Theme } from "utilities/TenantIndex";

interface DatePickerViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  tempSelectedDate: Date | null;
  showAndroidPicker: boolean;
  handlePress: () => void;
  handleDateChange: (event: any, selectedDate?: Date) => void;
  handleDonePress: () => void;
  getDynamicStyles: () => any;
  displayText: string;
  isPlaceholder: boolean;
  formatDate: (date: Date) => string;
}

interface DatePickerProps extends Omit<TouchableOpacityProps, 'onPress'> {
  keyValue?: string;
  label?: string;
  titleText?: string;
  value?: Date | null;
  placeholder?: string;
  onDateSelect?: (date: Date) => void;
  onPress?: () => void;
  onTextChange?: (text: string) => void;
  inputValue?: string;
  style?: ViewStyle;
  disabled?: boolean;
  showSelectButton?: boolean;
  variant?: CustomTextViewProps['variant'];
  dynamicWidth?: boolean;
  minWidth?: number;
  maxWidth?: number;
  color?: string;
  backgroundColor?: string;
  textColor?: string;
  showDatePicker?: boolean;
  pickerTitle?: string;
  bottomSheetRef?: React.RefObject<BottomSheetRef | null>;
  borderColor?: string;
  containerStyle?: ViewStyle;
  textContainerStyle?: ViewStyle;
  mode?: 'date' | 'time' | 'datetime';
  minimumDate?: Date;
  maximumDate?: Date;
  display?: 'default' | 'spinner' | 'calendar' | 'clock';
}

// Default props
const defaultProps: DatePickerProps = {
  keyValue: "date_picker",
  placeholder: "Select Date",
  showSelectButton: true,
  disabled: false,
  variant: 'body_m_n1',
  dynamicWidth: false,
  color: Theme.Colors.neutral10,
  backgroundColor: Theme.Colors.primary3,
  textColor: Theme.Colors.neutral10,
  borderColor: Theme.Colors.neutral4,
  showDatePicker: true,
  pickerTitle: "SELECT DATE",
  bottomSheetRef: undefined,
  mode: 'date',
  display: 'spinner',
  maximumDate: new Date(),
};

export type { DatePickerProps, DatePickerViewModel };
export { defaultProps };

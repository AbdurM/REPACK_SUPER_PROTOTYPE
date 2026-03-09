// generated from template

import { useState } from 'react';
import { Platform } from 'react-native';
import { DatePickerProps, DatePickerViewModel } from './DatePickerModel';

export default function useDatePickerViewModel(props: DatePickerProps): DatePickerViewModel {
  const [loading, setLoading] = useState<boolean>(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | null>(null);
  const [showAndroidPicker, setShowAndroidPicker] = useState<boolean>(false);

  // Format date for display
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  };

  // Business logic for determining display text
  const displayText = props.value 
    ? formatDate(props.value)
    : (props.placeholder || 'Select Date');
  const isPlaceholder = !props.value;

  const handlePress = () => {
    if (props.disabled) return;
    
    if (props.showDatePicker) {
      if (Platform.OS === 'ios' && props.bottomSheetRef?.current) {
        // Set temp selection to current selected date when opening
        setTempSelectedDate(props.value || new Date());
        props.bottomSheetRef.current.expand();
      } else if (Platform.OS === 'android') {
        // For Android, set temp selection to current selected date and show picker
        setTempSelectedDate(props.value || new Date());
        setShowAndroidPicker(true);
      }
    } else if (props.onPress) {
      props.onPress();
    }
  };

  // Handle date change from picker
  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      // Hide the picker first
      setShowAndroidPicker(false);
      
      // On Android, commit the selection when user picks a date (OK button)
      if (event.type === 'set' && selectedDate && props.onDateSelect) {
        props.onDateSelect(selectedDate);
      }
      // If user cancels (Cancel button), do nothing
    } else {
      // On iOS, just update temp selection (will be committed on done press)
      if (selectedDate) {
        setTempSelectedDate(selectedDate);
      }
    }
  };

  // Handle done button press - commit the selection
  const handleDonePress = () => {
    if (tempSelectedDate && props.onDateSelect) {
      props.onDateSelect(tempSelectedDate);
    }
    
    props.bottomSheetRef?.current?.collapse();
  };

  // Calculate dynamic width styles
  const getDynamicStyles = () => {
    if (!props.dynamicWidth) return {};
    
    const styles: any = {
      alignSelf: 'flex-start',
    };
    
    if (props.minWidth) {
      styles.minWidth = props.minWidth;
    }
    
    if (props.maxWidth) {
      styles.maxWidth = props.maxWidth;
    }
    
    return styles;
  };

  return {
    loading,
    setLoading,
    tempSelectedDate,
    showAndroidPicker,
    handlePress,
    handleDateChange,
    handleDonePress,
    getDynamicStyles,
    displayText,
    isPlaceholder,
    formatDate,
  };
}

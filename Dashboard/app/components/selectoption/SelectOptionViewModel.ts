// generated from template

import { useState, useEffect } from 'react';
import { SelectOptionProps, SelectOptionViewModel, ListItem, SelectOptionItem } from './SelectOptionModel';
import { SelectOptionStyles } from './SelectOptionStyle';
import { TypographyStyles } from 'utilities/Style';

// Helper function to get item ID from ListItem
const getItemId = (item: ListItem): string | null => {
  return item.id ?? null;
};

export default function useSelectOptionViewModel(props: SelectOptionProps): SelectOptionViewModel {
  const [loading, setLoading] = useState<boolean>(false);
  const [tempSelectedItem, setTempSelectedItem] = useState<string | null>(null);
  const [selectedListItem, setSelectedListItem] = useState<ListItem | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<SelectOptionItem | undefined>(undefined);
  const [isPlaceholder, setIsPlaceholder] = useState<boolean>(true);
  
  // Sync tempSelectedItem with activeItemId prop when it changes
  useEffect(() => {
    if (props.activeItemId !== undefined && props.activeItemId !== null) {
      setTempSelectedItem(props.activeItemId);
      const foundItem = props.list?.find(
        item => getItemId(item)?.toString() === props.activeItemId?.toString()
      );
      setSelectedListItem(foundItem);
    }
  }, [props.activeItemId, props.list]);

  // Update selectedListItem when selectedItem prop changes
  useEffect(() => {
    if (props.activeItemId !== undefined && props.activeItemId !== null) {
      return; // activeItemId takes precedence
    }
    if (props.selectedItem !== undefined && props.selectedItem !== null) {
      const foundItem = props.list?.find(
        item => getItemId(item)?.toString() === props.selectedItem?.toString()
      );
      if (foundItem) {
        setSelectedListItem(foundItem);
        setTempSelectedItem(getItemId(foundItem));
      }
    } else if (props.selectedItem === null && (props.activeItemId === undefined || props.activeItemId === null)) {
      // Clear selection if selectedItem is explicitly null and no activeItemId
      setSelectedListItem(undefined);
      setTempSelectedItem(null);
    }
  }, [props.selectedItem, props.activeItemId, props.list]);
  
  // Update selectedOption when options or value changes
  useEffect(() => {
    const foundOption = props.options?.find(
      option => option.value === props.value,
    );
    setSelectedOption(foundOption);
  }, [props.options, props.value]);
  
  // Update isPlaceholder when selectedListItem or selectedOption changes
  useEffect(() => {
    setIsPlaceholder(!selectedListItem && !selectedOption);
  }, [selectedListItem, selectedOption]);

  const handlePress = () => {
    if (props.disabled) return;
    
    if (props.showOptionsList && props.bottomSheetRef?.current) {
      // Set temp selection to current activeItemId or selectedItem when opening
      const currentItemId = props.activeItemId ?? props.selectedItem ?? null;
      setTempSelectedItem(currentItemId);
      props.bottomSheetRef.current.expand();
    } else if (props.onPress) {
      props.onPress();
    }
  };

  // Handle item selection (temporary - not committed until done)
  const handleItemSelect = (item: ListItem) => {
    setTempSelectedItem(getItemId(item));
  };

  // Handle done button press - commit the selection
  const handleDonePress = () => {
    // Find the selected item and commit it
    const selectedItem = props.list?.find(item => getItemId(item)?.toString() === tempSelectedItem?.toString());
    if (selectedItem && props.onItemSelect) {
      props.onItemSelect(selectedItem);
    }
    
    if (props.onDone) {
      props.onDone(getItemId(selectedItem ?? {} as ListItem));
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

  // Style helper functions
  const getStatusStyle = (status?: string) => {
    if (!status) {
      return [SelectOptionStyles.statusBadge, SelectOptionStyles.statusBadgeActive];
    }
    switch (status) {
      case 'Active':
        return [SelectOptionStyles.statusBadge, SelectOptionStyles.statusBadgeActive];
      case 'Pending':
        return [SelectOptionStyles.statusBadge, SelectOptionStyles.statusBadgePending];
      case 'Inactive':
        return [SelectOptionStyles.statusBadge, SelectOptionStyles.statusBadgeInactive];
      default:
        return [SelectOptionStyles.statusBadge, SelectOptionStyles.statusBadgeActive];
    }
  };

  const getStatusTextStyle = (status?: string) => {
    if (!status) {
      return [TypographyStyles.status, SelectOptionStyles.statusTextInactive];
    }
    switch (status) {
      case 'Active':
        return [TypographyStyles.status, SelectOptionStyles.statusTextActive];
      case 'Pending':
        return [TypographyStyles.status, SelectOptionStyles.statusTextPending];
      case 'Inactive':
        return [TypographyStyles.status, SelectOptionStyles.statusTextInactive];
      default:
        return [TypographyStyles.status, SelectOptionStyles.statusTextInactive];
    }
  };

  return {
    loading,
    setLoading,
    tempSelectedItem,
    handlePress,
    handleItemSelect,
    handleDonePress,
    getDynamicStyles,
    getStatusStyle,
    getStatusTextStyle,
    getItemId,
    selectedOption,
    selectedListItem,
    isPlaceholder,
  };
}

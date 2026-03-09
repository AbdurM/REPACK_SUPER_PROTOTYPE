// generated from template

import { useState, useEffect } from 'react';
import { SelectOptionProps, SelectOptionViewModel, ListItem, RootState, SelectOptionItem } from './SelectOptionModel';
import { SelectOptionStyles } from './SelectOptionStyle';
import { TypographyStyles } from 'utilities/Style';
import { useSelector } from 'react-redux';

export default function useSelectOptionViewModel(props: SelectOptionProps): SelectOptionViewModel {
  const [loading, setLoading] = useState<boolean>(false);
  const [tempSelectedItem, setTempSelectedItem] = useState<number | null>(null);
  const [selectedListItem, setSelectedListItem] = useState<ListItem | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<SelectOptionItem | undefined>(undefined);
  const [isPlaceholder, setIsPlaceholder] = useState<boolean>(true);
  const {activePolicyId} = useSelector((state: RootState) => state.app);
  
  // Sync tempSelectedItem with activePolicyId when it changes
  useEffect(() => {
    if (activePolicyId) {
      const policyIdNumber = typeof activePolicyId === 'string' ? Number(activePolicyId) : activePolicyId;
      setTempSelectedItem(policyIdNumber);
      const foundItem = props.list?.find(
        item => item.policyId?.toString() === activePolicyId?.toString()
      );
      setSelectedListItem(foundItem);
    }
  }, [activePolicyId, props.list]);

  // Update selectedListItem when selectedItem prop changes
  useEffect(() => {
    if(activePolicyId) {
      return;
    }
    if (props.selectedItem !== undefined && props.selectedItem !== null) {
      const foundItem = props.list?.find(
        item => item.policyId?.toString() === props.selectedItem?.toString()
      );
      if (foundItem) {
        setSelectedListItem(foundItem);
        setTempSelectedItem(foundItem.policyId);
      }
    } else if (props.selectedItem === null && !activePolicyId) {
      // Clear selection if selectedItem is explicitly null
      setSelectedListItem(undefined);
      setTempSelectedItem(null);
    }
  }, [props.selectedItem, props.list]);
  
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
      // Set temp selection to current activePolicyId when opening
      const policyIdNumber = typeof activePolicyId === 'string' ? parseInt(activePolicyId, 10) : activePolicyId;
      setTempSelectedItem(policyIdNumber || null);
      props.bottomSheetRef.current.expand();
    } else if (props.onPress) {
      props.onPress();
    }
  };

  // Handle item selection (temporary - not committed until done)
  const handleItemSelect = (item: ListItem) => {
    setTempSelectedItem(item.policyId || null);
  };

  // Handle done button press - commit the selection
  const handleDonePress = () => {
    // Find the selected item and commit it
    const selectedItem = props.list?.find(item => item.policyId?.toString() === tempSelectedItem?.toString());
    if (selectedItem && props.onItemSelect) {
      props.onItemSelect(selectedItem);
    }
    
    if (props.onDone) {
      props.onDone(selectedItem?.policyId ?? null);
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
  const getStatusStyle = (status: ListItem['policyStatus']) => {
    switch (status) {
      case 'Active':
        return [SelectOptionStyles.statusBadge, SelectOptionStyles.statusBadgeActive];
      case 'Pending':
        return [SelectOptionStyles.statusBadge, SelectOptionStyles.statusBadgePending];
      case 'Inactive':
        return [SelectOptionStyles.statusBadge, SelectOptionStyles.statusBadgeInactive];
      default:
        return [SelectOptionStyles.statusBadge, SelectOptionStyles.statusBadgeInactive];
    }
  };

  const getStatusTextStyle = (status: ListItem['policyStatus']) => {
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
    selectedOption,
    selectedListItem,
    isPlaceholder,
  };
}

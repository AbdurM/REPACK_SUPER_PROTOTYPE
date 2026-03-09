// Generated from Fingent Boilerplate

import React from 'react';
import { View } from 'react-native';
import { PolicySelectProps, defaultProps } from './PolicySelectModel';
import { PolicySelectStyles } from './PolicySelectStyle';
import usePolicySelectViewModel from './PolicySelectViewModel';
import { SelectOptionView } from 'components/selectoption/SelectOptionView';

export function PolicySelectView(
  props: Readonly<PolicySelectProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { 
    bottomSheetRef,
    selectedItem,
    activePolicyId,
    transformedList,
    handleItemSelect,
    handleDonePress,
  } = usePolicySelectViewModel(mergedProps);
  
  return (
    <View style={[PolicySelectStyles.container, mergedProps.style]}>
      <SelectOptionView
        keyValue={mergedProps.keyValue}
        placeholder={mergedProps.placeholder}
        dynamicWidth={true}
        showOptionsList={true}
        optionTitle={mergedProps.bottomSheetTitle}
        bottomSheetRef={bottomSheetRef}
        list={transformedList}
        onItemSelect={handleItemSelect}
        onDone={handleDonePress}
        selectedItem={selectedItem}
        activeItemId={activePolicyId}
        color={mergedProps.color}
        borderColor={mergedProps.borderColor}
      />
    </View>
  );
}

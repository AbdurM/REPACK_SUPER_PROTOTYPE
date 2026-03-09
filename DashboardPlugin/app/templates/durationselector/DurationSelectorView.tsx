// Generated from Fingent Boilerplate

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DurationSelectorProps, defaultProps, DurationType } from './DurationSelectorModel';
import { DurationSelectorStyles } from './DurationSelectorStyle';
import useDurationSelectorViewModel from './DurationSelectorViewModel';
import CustomTextView from '../../components/customtext/CustomTextView';
import { UI } from '../../utilities/Helpers';
import { Theme } from '../../utilities/TenantIndex';
import { ElementKey } from '../../utilities/ElementKey';

export function DurationSelectorView(
  props: Readonly<DurationSelectorProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { selectedDuration, handleDurationChange } = useDurationSelectorViewModel(mergedProps);

  const renderDurationButton = (item: DurationType, index: number) => {
    const isSelected = selectedDuration === item;
    return (
      <TouchableOpacity
        testID={`${ElementKey.duration_selector}_${index}`}
        onPress={() => handleDurationChange(item)}
        key={`duration-${index.toString()}`}
        style={[
          DurationSelectorStyles.durationButton,
          isSelected && {
            borderBottomWidth: UI.responsiveWidth(0.75),
            borderColor: mergedProps.textColor || Theme.Colors.neutral10,
          },
        ]}
      >
        <CustomTextView
          color={mergedProps.textColor || Theme.Colors.neutral10}
          variant="status"
        >
          {item}
        </CustomTextView>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        DurationSelectorStyles.container,
        mergedProps.containerStyle,
        { backgroundColor: mergedProps.backgroundColor || Theme.Colors.activeState },
      ]}
    >
      {mergedProps.durationList?.map(renderDurationButton)}
    </View>
  );
}


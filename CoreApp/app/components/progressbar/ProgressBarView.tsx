// Generated from Fingent Boilerplate

import React from 'react';
import { View } from 'react-native';
import { ProgressBarProps, defaultProps } from './ProgressBarModel';
import { ProgressBarStyles } from './ProgressBarStyle';
import useProgressBarViewModel from './ProgressBarViewModel';
import { Theme } from 'utilities/TenantIndex';

export function ProgressBarView(
  props: Readonly<ProgressBarProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const {} = useProgressBarViewModel(mergedProps);

  return (
    <View key={mergedProps.keyValue} style={[ProgressBarStyles.container, mergedProps.style]}>
      {Array.from({ length: mergedProps.totalSteps }, (_, index) => {
        return (
          <View
            key={index + 1}
            style={[
              ProgressBarStyles.progressSegment,
              {
                backgroundColor:
                  index + 1 <= mergedProps.currentStep
                    ? mergedProps.activeColor || Theme.Colors.primary1
                    : mergedProps.inactiveColor || Theme.Colors.neutral7,
              },
            ]}
          />
        );
      })}
    </View>
  );
}

// Generated from Fingent Boilerplate

import React, { memo, useMemo } from 'react';
import { View } from 'react-native';
import { ProgressindicatorProps, defaultProps } from './ProgressindicatorModel';
import { ProgressindicatorStyles } from './ProgressindicatorStyle';
import useProgressindicatorViewModel from './ProgressindicatorViewModel';

const ProgressindicatorView = memo(function ProgressindicatorView(
  props: Readonly<ProgressindicatorProps>,
): React.JSX.Element {
  const mergedProps = useMemo(() => ({ ...defaultProps, ...props }), [props]);
  const { progressPercentage } = useProgressindicatorViewModel(mergedProps);

  return (
    <View
      key={mergedProps.keyValue}
      style={ProgressindicatorStyles.container}
    >
      {/* Inactive track (background) */}
      <View
        style={[
          ProgressindicatorStyles.track,
          {
            height: mergedProps.trackHeight,
            backgroundColor: mergedProps.inactiveTrackColor,
          },
          mergedProps.trackStyle,
        ]}
      />

      {/* Active track (progress bar) */}
      <View
        style={[
          ProgressindicatorStyles.activeTrack,
          mergedProps.value === mergedProps.maximumValue &&
            ProgressindicatorStyles.borderTOproperRadius,

          {
            height: mergedProps.trackHeight,
            backgroundColor: mergedProps.activeTrackColor,
            width: `${progressPercentage}%`,
          },
          mergedProps.activeTrackStyle,
        ]}
      />

      {/* Start indicator */}
      {mergedProps.showStartIndicator && (
        <View>
          <View
            style={[
              ProgressindicatorStyles.indicator,
              ProgressindicatorStyles.startIndicator,
              {
                top: -(10 - mergedProps.trackHeight!) / 2,
              },
              mergedProps.startIndicatorStyle,
            ]}
          />
        </View>
      )}

      {/* Progress indicator */}
      {mergedProps.showProgressIndicator && (
        <View>
          <View
            style={[
              ProgressindicatorStyles.indicator,
              ProgressindicatorStyles.progressIndicator,
              {
                top: -(10 - mergedProps.trackHeight!) / 2,
              },
              mergedProps.endIndicatorStyle,
            ]}
          />
        </View>
      )}

      {/* Start Label Component */}
      {mergedProps.startLabelComponent && (
        <View
          style={[
            ProgressindicatorStyles.labelContainer,
            ProgressindicatorStyles.startLabelContainer,
            mergedProps.startLabelContainerStyle,
          ]}
        >
          {mergedProps.startLabelComponent}
        </View>
      )}

      {/* End Label Component */}
      {mergedProps.endLabelComponent && (
        <View
          style={[
            ProgressindicatorStyles.labelContainer,
            ProgressindicatorStyles.endLabelContainer,
            mergedProps.endLabelContainerStyle,
          ]}
        >
          {mergedProps.endLabelComponent}
        </View>
      )}
    </View>
  );
});

export { ProgressindicatorView };

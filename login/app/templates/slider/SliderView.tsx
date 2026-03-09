import React, { memo, useMemo } from 'react';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { SliderStyles } from './SliderStyle';
import useSliderViewModel from './SliderViewModel';
import { SliderProps, defaultProps } from './SliderModel';
import { UI } from '../../utilities/Helpers';
import CustomTextView from 'components/customtext/CustomTextView';
import { Strings, Theme } from '../../utilities/TenantIndex';

const SliderView = memo(function SliderView(
  props: Readonly<SliderProps>,
): React.JSX.Element {
  const mergedProps = useMemo(() => ({ ...defaultProps, ...props }), [props]);

  const {
    gesture,
    animatedTrackStyle,
    animatedThumbStyle,
    animatedPercentageTextStyle,
    onLayout,
    percentage,
    maxSlidingPositionPercentage,
  } = useSliderViewModel(props);

  return (
    <React.Fragment key={mergedProps.keyValue}>
      {/* Percentage display that moves with thumb */}
      {mergedProps.showPercentage && (
        <View style={SliderStyles.percentageDisplay}>
          <Animated.View
            style={[
              SliderStyles.percentageTextWrapper,
              animatedPercentageTextStyle,
              mergedProps.percentageStyle,
            ]}
          >
            <CustomTextView
              variant={mergedProps.percentageVariant || 'n2'}
              color={Theme.Colors.neutral2}
            >
              {Math.round(percentage)}%
            </CustomTextView>
          </Animated.View>
        </View>
      )}
      <GestureDetector gesture={gesture}>
        <View
          style={[
            SliderStyles.sliderContainer,
            mergedProps.maximumSlidingPosition! > 99 &&
              SliderStyles.marginTop,
          ]}
          onLayout={onLayout}
        >
          <View
          style={[
            SliderStyles.track,
            {
              height: mergedProps.trackHeight,
              backgroundColor: mergedProps.inactiveTrackColor,
            },
            mergedProps.disabled && SliderStyles.disabledTrack,
            mergedProps.trackStyle,
          ]}
        />

        {/* Active track (progress bar) */}
        <Animated.View
          style={[
            SliderStyles.activeTrack,
            {
              height: mergedProps.trackHeight,
              backgroundColor: mergedProps.activeTrackColor,
            },
            animatedTrackStyle,
            mergedProps.disabled && SliderStyles.disabledTrack,
            mergedProps.activeTrackStyle,
          ]}
        />

        {/* Circular thumb - show based on editable and showThumbWhenDisabled */}
        {((!mergedProps.disabled && mergedProps.editable) ||
          (mergedProps.disabled && mergedProps.showThumbWhenDisabled)) && (
          <Animated.View
            style={[
              SliderStyles.thumb,
              {
                width: mergedProps.thumbSize,
                height: mergedProps.thumbSize,
                borderRadius: mergedProps.thumbRadius!,
                backgroundColor: mergedProps.thumbColor!,
                borderWidth: mergedProps.thumbBorderWidth!,
                borderColor: mergedProps.thumbBorderColor!,
                marginLeft: -mergedProps.thumbSize! / 2,
              },
              animatedThumbStyle,
              mergedProps.disabled && SliderStyles.disabledThumb,
            ]}
          />
        )}

        {/* Maximum sliding position indicator */}
        {mergedProps.showMaxSlidingIndicator &&
          mergedProps.maximumSlidingPosition! < mergedProps.maximumValue! && (
            <View>
              {/* Dotted line */}
              <View
                style={[
                  SliderStyles.maxSlidingIndicator,
                  mergedProps.disabled &&
                    SliderStyles.disabledMaxSlidingIndicator,
                  {
                    // Position indicator based on maxSlidingLabelPosition prop
                    ...(mergedProps.maxSlidingLabelPosition === 'top'
                      ? { top: -10 }
                      : { top: mergedProps.trackHeight! }),
                    left: `${maxSlidingPositionPercentage}%`,
                  },
                  mergedProps.maxSlidingIndicatorStyle,
                ]}
              />

              {/* Text label with smart positioning */}
              <CustomTextView
                variant='body_s_n3'
                color={Theme.Colors.neutral1}
                style={[
                  SliderStyles.maxSlidingLabel,
                  mergedProps.disabled && SliderStyles.disabledMaxSlidingLabel,
                  {
                    // Position based on maxSlidingLabelPosition prop
                    ...(mergedProps.maxSlidingLabelPosition === 'top'
                      ? { top: -UI.responsiveWidth(8) }
                      : {
                          top: mergedProps.trackHeight! + UI.responsiveWidth(8),
                        }),
                    ...(maxSlidingPositionPercentage > 62
                      ? {
                          left: 'auto',
                          // textAlign: 'right',
                        }
                      : {
                          left: (() => {
                            // Calculate position based on percentage and container boundaries
                            const textWidthPercentage = 5; // Approximate text width as percentage of container
                            // Right side positioning - ensure it doesn't exceed container
                            const rightPosition =
                              maxSlidingPositionPercentage - 2;
                            const maxRightPosition = 100 - textWidthPercentage;
                            return `${Math.min(
                              rightPosition,
                              maxRightPosition,
                            )}%`;
                          })(),
                        }),
                    // Apply horizontal offset if provided
                    ...(mergedProps.maxSlidingLabelOffset !== 0 && {
                      marginLeft: mergedProps.maxSlidingLabelOffset,
                    }),
                  },
                  // Apply custom style last so it can override left/right positioning
                  mergedProps.maxSlidingLabelStyle,
                ]}
              >
                {Strings.profile.maximumAvailable}{' '}
                  <CustomTextView 
                    variant='body_m_n1'
                    color={Theme.Colors.neutral2}
                  >
                    {Math.round(maxSlidingPositionPercentage)}%
                  </CustomTextView>
              </CustomTextView>
            </View>
          )}
        </View>
      </GestureDetector>
    </React.Fragment>
  );
});

export { SliderView };

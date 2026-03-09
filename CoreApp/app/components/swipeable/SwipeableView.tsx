// Generated from Fingent Boilerplate | 2025-09-10 | Jerrin Thomas

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { SwipeableProps, defaultProps, RightActionProps } from "./SwipeableModel";
import { SwipeableStyles } from "./SwipeableStyle";
// import useSwipeableViewModel from "./SwipeableViewModel";
import { Theme } from "utilities/TenantIndex";

const RightAction = (props: RightActionProps) => {
  return (
    <View style={[SwipeableStyles.rightContainer, props?.rightActionContainerStyle]}>
      <TouchableOpacity
        onPress={() => props?.onPressRight?.()}
        style={[
          SwipeableStyles.rightActionContentContainer,
          props?.rightActionContentContainerStyle,
          {
            backgroundColor: props?.backgroundcolor || Theme.Colors.neutral1,
          },
        ]}>
        <Text style={[SwipeableStyles.rightActionText, props?.rightActionTextStyle]}>
          {props?.rightActionText || ''}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export function SwipeableView( props : Readonly<SwipeableProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  // const { } = useSwipeableViewModel(mergedProps);

  return (
    <ReanimatedSwipeable
      testID={mergedProps.testID}
      enabled={mergedProps?.isSwipeEnabled}
      containerStyle={[SwipeableStyles.swipeable, mergedProps?.swipeableStyle]}
      friction={2}
      rightThreshold={0}
      overshootFriction={0}
      overshootLeft={false}
      overshootRight={false}
      enableTrackpadTwoFingerGesture
      renderRightActions={() =>
        RightAction({
          rightActionContainerStyle: mergedProps?.rightActionContainerStyle,
          rightActionContentContainerStyle: mergedProps?.rightActionContentContainerStyle,
          rightActionText: mergedProps?.rightActionText,
          rightActionTextStyle: mergedProps?.rightActionTextStyle,
          backgroundcolor: mergedProps?.backgroundcolor,
          onPressRight: mergedProps?.onPressRight,
        })
      }>
      {mergedProps?.children}
    </ReanimatedSwipeable>
  );
}

// Generated from Fingent Boilerplate

import React from "react";
import { View } from "react-native";
import { FundsCountBadgeProps, defaultProps } from "./FundsCountBadgeModel";
// import useFundsCountBadgeViewModel from "./FundsCountBadgeViewModel";
import { Theme } from "utilities/TenantIndex";
import CustomTextView from "components/customtext/CustomTextView";
import { FundsCountBadgeStyles } from "./FundsCountBadgeStyle";

export function FundsCountBadgeView(props: Readonly<FundsCountBadgeProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
//   const { displayCount, badgeStyle } = useFundsCountBadgeViewModel(mergedProps);

  return (
    <View key={mergedProps.keyValue} style={[
      FundsCountBadgeStyles.badge,
      mergedProps?.style,
      mergedProps.backgroundColor && { backgroundColor: mergedProps.backgroundColor }
    ]}>
      <CustomTextView 
        variant={mergedProps.variant as any || 'body_s_n1'} 
        color={mergedProps.textColor || Theme.Colors.neutral10}
      >
        {mergedProps.content}
      </CustomTextView>
    </View>
  );
}
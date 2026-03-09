// Generated from Fingent Boilerplate

import React from "react";
import { View } from "react-native";
import { 
  CountBadgeProps, 
  defaultProps
} from "./CountBadgeModel";
import { CountBadgeStyles } from "./CountBadgeStyle";
import { Theme } from "utilities/TenantIndex";
import CustomTextView from "components/customtext/CustomTextView";

export function CountBadgeView(props: Readonly<CountBadgeProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };

  return (
    <View 
      key={mergedProps.keyValue} 
      style={[
        CountBadgeStyles.badge,
        mergedProps.style,
        mergedProps.backgroundColor && { backgroundColor: mergedProps.backgroundColor }
      ]}
    >
      <CustomTextView 
        variant={mergedProps.variant as any} 
        color={mergedProps.textColor || Theme.Colors.neutral10}
      >
        {mergedProps.content || mergedProps.count?.toString() || "0"}
      </CustomTextView>
    </View>
  );
}
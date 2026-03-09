// generated from template
import React from 'react';
import { Text } from 'react-native';
import { CustomTextStyles } from './CustomTextStyle';
import { CustomTextViewProps, defaultProps } from './CustomTextModel';
import { Theme } from 'utilities/TenantIndex';

export function CustomTextView( props : Readonly<CustomTextViewProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  
  return (
    <Text
      style={[CustomTextStyles.defaultStyle, CustomTextStyles[mergedProps.variant as keyof typeof CustomTextStyles], mergedProps.style, {color: mergedProps.color || Theme.Colors.neutral8}]}
      allowFontScaling={mergedProps.lockFontScaling}
      numberOfLines={mergedProps.numberOfLines}
      ellipsizeMode={mergedProps.ellipsizeMode}
      textBreakStrategy={mergedProps.textBreakStrategy}
      onPress={mergedProps.onPress}
      >
      {mergedProps.children}
    </Text>
  );
}

export default CustomTextView;
// generated from template

import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { ButtonStyles } from "./ButtonStyle";
import { ButtonViewProps, defaultProps } from "./ButtonModel";
import CustomTextView from 'components/customtext/CustomTextView';
import { Theme } from "utilities/TenantIndex";

export function ButtonView( props : Readonly<ButtonViewProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };

  const renderIcon = () => {
    if (!mergedProps.icon) return null;
    
    const defaultIconStyle = mergedProps.iconPosition === 'left' 
      ? ButtonStyles.iconLeft 
      : ButtonStyles.icon;
    
    // Use custom iconStyle if provided, otherwise use default style
    const iconStyle = mergedProps.iconStyle 
      ? [defaultIconStyle, mergedProps.iconStyle]
      : defaultIconStyle;
    
    return (
      <Image
        style={iconStyle}
        source={mergedProps.icon}
        resizeMode="contain"
        tintColor={mergedProps.filled ? Theme.Colors.neutral10 : Theme.Colors.primary1}
      />
    );
  };

  const renderText = () => (
    <CustomTextView 
      style={[
        ButtonStyles.customText1,
        !mergedProps.filled && ButtonStyles.customText2,
      ]}
      color={mergedProps.color || Theme.Colors.neutral10}
      variant={mergedProps.buttonTextVariant}
    >
      {mergedProps.buttonText}
    </CustomTextView>
  );

  return (
    <TouchableOpacity
      testID={mergedProps.testID}
      onPress={mergedProps.onPress}
      style={[
        ButtonStyles.mainView,
        mergedProps.disabled && ButtonStyles.disabled,
        !mergedProps.filled && ButtonStyles.notFilled,
        {borderColor: mergedProps.color},
        mergedProps.style,
      ]}
      disabled={mergedProps.disabled}
    >
      {mergedProps.iconPosition === 'left' ? (
        <>
          {renderIcon()}
          {renderText()}
        </>
      ) : (
        <>
          {renderText()}
          {renderIcon()}
        </>
      )}
    </TouchableOpacity>
  );
}

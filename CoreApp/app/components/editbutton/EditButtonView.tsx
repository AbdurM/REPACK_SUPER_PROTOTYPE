// Generated from Fingent Boilerplate

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { EditButtonProps, defaultProps } from './EditButtonModel';
import { EditButtonStyles } from './EditButtonStyle';
import useEditButtonViewModel from './EditButtonViewModel';
import { CustomTextView } from 'components/customtext/CustomTextView';
import { Theme } from 'utilities/TenantIndex';
import { Strings } from 'utilities/TenantIndex';

export function EditButtonView(
  props: Readonly<EditButtonProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { } = useEditButtonViewModel(mergedProps);
  
  return (
    <TouchableOpacity
      style={[
        EditButtonStyles.button,
        mergedProps.disabled && EditButtonStyles.disabled,
        mergedProps.style,
      ]}
      onPress={mergedProps.onPress}
      disabled={mergedProps.disabled}
      activeOpacity={mergedProps.activeOpacity}
      testID={mergedProps.testID}
      {...mergedProps}
    >
      <CustomTextView
        variant="body_s_n1"
        color={mergedProps.disabled ? Theme.Colors.neutral4 : Theme.Colors.primary1}
      >
        {mergedProps.buttonText || Strings.common.edit}
      </CustomTextView>
    </TouchableOpacity>
  );
}

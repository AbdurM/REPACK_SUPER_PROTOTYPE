// Generated from Fingent Boilerplate

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RetryProps, defaultProps } from './RetryModel';
import { RetryStyles } from './RetryStyle';
import useRetryViewModel from './RetryViewModel';
import { CustomTextView } from 'components/customtext/CustomTextView';
import { Theme } from 'utilities/TenantIndex';

export function RetryView(
  props: Readonly<RetryProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { handleRetry } = useRetryViewModel(mergedProps);

  return (
    <View
      key={mergedProps.keyValue}
      style={[RetryStyles.container, mergedProps.style]}
    >
      {!!mergedProps.message && (
        <CustomTextView color={Theme.Colors.neutral8}
        variant="body_s_n1"   style={RetryStyles.message}>
          {mergedProps.message}
        </CustomTextView>
      )}
      <TouchableOpacity
        style={[RetryStyles.button, mergedProps.buttonStyle]}
        onPress={handleRetry}
        activeOpacity={0.7}
      >
        <CustomTextView color={Theme.Colors.neutral10} variant="body_s_n1" style={[RetryStyles.buttonText, mergedProps.textStyle]}>
          {mergedProps.buttonText}
        </CustomTextView>
      </TouchableOpacity>
    </View>
  );
}


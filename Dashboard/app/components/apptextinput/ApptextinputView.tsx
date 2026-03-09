// Generated from Fingent Boilerplate

import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import useApptextinputViewModel from './ApptextinputViewModel';
import { ApptextinputProps, defaultProps } from './ApptextinputModel';
import { ApptextinputStyles } from './ApptextinputStyle';
import CustomTextView from 'components/customtext/CustomTextView';
import { Theme } from 'utilities/TenantIndex';
import { IconView } from 'components/icon/IconView';

export function ApptextinputView(props: Readonly<ApptextinputProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { value, error, errorMessage, icon, onChangeTextCallback, onIconTouch } =
    useApptextinputViewModel(mergedProps);

  return (
    <React.Fragment key={mergedProps.keyValue}>
      {!!mergedProps?.title && (
        <View style={ApptextinputStyles.titleRow}>
          <CustomTextView
            variant={mergedProps.titleVariant}
            style={ApptextinputStyles.titleStyle}
            color={Theme.Colors.neutral2}
          >
            {mergedProps?.title}
          </CustomTextView>
          {!!mergedProps?.actionText && (
            <TouchableOpacity onPress={mergedProps?.onActionPress}>
              <CustomTextView
                variant="h7"
                color={Theme.Colors.informational1}
              >
                {mergedProps?.actionText}
              </CustomTextView>
            </TouchableOpacity>
          )}
        </View>
      )}
      <View style={ApptextinputStyles.inputWrapper}>
        {!!mergedProps?.prefixText && (
          <TouchableOpacity onPress={mergedProps?.onPrefixPress}>
            <CustomTextView
              variant="h4"
              color={error ? Theme.Colors.error1 : Theme.Colors.neutral1}
              style={ApptextinputStyles.prefixText}
            >
              {mergedProps.prefixText}
            </CustomTextView>
          </TouchableOpacity>
        )}
        <TextInput
          style={[
            ApptextinputStyles.textInputStyle,
            mergedProps?.textInputStyle,
            error
              ? { color: Theme.Colors.error1 }
              : { color: Theme.Colors.neutral3 },
          ]}
          placeholder={mergedProps?.placeholder || ''}
          placeholderTextColor={mergedProps?.placeholderTextColor}
          onChangeText={onChangeTextCallback}
          value={value}
          secureTextEntry={mergedProps?.secureTextEntry}
          keyboardType={mergedProps?.keyboardType}
          autoCapitalize={mergedProps?.autoCapitalize}
          autoCorrect={mergedProps?.autoCorrect}
          editable={mergedProps?.editable}
          maxLength={mergedProps?.maxLength}
        />
        {(!!value && (!!icon || !mergedProps?.iconTouchable)) && (
          <IconView
            source={icon || "CLOSE"}
            style={ApptextinputStyles.iconStyle}
            touchable={true}
            onPress={onIconTouch}
            tintColor={error ? Theme.Colors.error1 : undefined}
          />
        )}
      </View>
      {(!!error && !!errorMessage) && (
        <CustomTextView
          variant="body_l_n1"
          style={ApptextinputStyles.errorStyle}
          color={Theme.Colors.error1}
        >
          {errorMessage}
        </CustomTextView>
      )}
    </React.Fragment>
  );
}

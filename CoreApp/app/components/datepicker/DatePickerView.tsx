// generated from template

import React from 'react';
import { View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerProps, defaultProps } from './DatePickerModel';
import { DatePickerStyles } from './DatePickerStyle';
import useDatePickerViewModel from './DatePickerViewModel';
import { CustomTextView } from '../customtext/CustomTextView';
import { ApptextinputView } from '../apptextinput/ApptextinputView';
import { ButtonView } from '../button/ButtonView';
import { Theme } from 'utilities/TenantIndex';
import { BottomSheetTemplateView } from 'templates/bottomsheettemplate/BottomSheetTemplateView';
import { Strings } from 'utilities/TenantIndex';
import { ICONS } from 'utilities/Images';

export function DatePickerView(
  props: Readonly<DatePickerProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const {
    tempSelectedDate,
    showAndroidPicker,
    handlePress,
    handleDateChange,
    handleDonePress,
    getDynamicStyles,
  } = useDatePickerViewModel(mergedProps);

  return (
    <React.Fragment>
      {mergedProps.titleText && (
        <View style={DatePickerStyles.titleContainer}>
          <CustomTextView
            variant="h7"
            style={DatePickerStyles.titleText}
            color={Theme.Colors.neutral2}
          >
            {mergedProps.titleText}
          </CustomTextView>
        </View>
      )}
      <View
        key={mergedProps.keyValue}
        style={[
          DatePickerStyles.container,
          mergedProps.dynamicWidth && DatePickerStyles.dynamicContainer,
          mergedProps.disabled && DatePickerStyles.disabledContainer,
          getDynamicStyles(),
          mergedProps.style,
          mergedProps.containerStyle
        ]}
      >
        <View
          style={DatePickerStyles.textInputContainer}
        >
          <ApptextinputView
            keyValue={`${mergedProps.keyValue}-input`}
            title=""
            placeholder={mergedProps.placeholder}
            value={mergedProps.inputValue || ""}
            onChangeText={mergedProps.onTextChange}
            keyboardType="numeric"
            maxLength={10}
            editable={true}
            error={false}
            errorMessage=""
            iconTouchable={true}
            containerStyle={DatePickerStyles.appTextInputContainer}
            textInputStyle={DatePickerStyles.appTextInputField}
          />
        </View>

        {mergedProps.showSelectButton && (
          <View style={DatePickerStyles.selectButtonContainer}>
            <ButtonView
              keyValue={`${mergedProps.keyValue}-select-button`}
              onPress={handlePress}
              testID={`${mergedProps.keyValue}-select-button`}
              buttonText={Strings.common.select}
              icon={ICONS.CALENDAR_LINE}
              iconPosition="left"
              iconStyle={DatePickerStyles.selectButtonIcon}
              disabled={mergedProps.disabled}
              filled={false}
              color={Theme.Colors.informational1}
              style={DatePickerStyles.selectButton}
            />
          </View>
        )}
      </View>

      {mergedProps.showDatePicker && Platform.OS === 'ios' && (
        <BottomSheetTemplateView
          keyValue={`datepicker-bottomsheet-${mergedProps.keyValue}`}
          title={mergedProps.pickerTitle || 'SELECT DATE'}
          bodyComponent={
            <View style={DatePickerStyles.pickerContainer}>
              <DateTimePicker
                value={tempSelectedDate || new Date()}
                mode={mergedProps.mode}
                display={mergedProps.display}
                onChange={handleDateChange}
                minimumDate={mergedProps.minimumDate}
                maximumDate={mergedProps.maximumDate}
                style={DatePickerStyles.dateTimePicker}
              />
            </View>
          }
          buttonText={Strings.common.done}
          onButtonPress={handleDonePress}
          bottomSheetRef={mergedProps.bottomSheetRef}
          portalName={`datepicker_${mergedProps.keyValue}`}
        />
      )}

      {mergedProps.showDatePicker && Platform.OS === 'android' && showAndroidPicker && (
        <DateTimePicker
          value={tempSelectedDate || new Date()}
          mode={mergedProps.mode}
          display={mergedProps.display}
          onChange={handleDateChange}
          minimumDate={mergedProps.minimumDate}
          maximumDate={mergedProps.maximumDate}
        />
      )}
    </React.Fragment>
  );
}

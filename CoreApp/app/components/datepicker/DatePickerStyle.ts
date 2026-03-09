// generated from template

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const DatePickerStyles = StyleSheet.create({
  titleContainer: {
    marginBottom: UI.responsiveWidth(1),
  },
  titleText: {},
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dynamicContainer: {
    alignSelf: 'flex-start',
  },
  disabledContainer: {
    opacity: 0.6,
  },
  textContainer: {
    flex: 1,
  },
  dynamicTextContainer: {
    flex: 1,
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  appTextInputContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  appTextInputField: {
    backgroundColor: 'transparent',
  },
  placeholderText: {
    color: Theme.Colors.neutral6,
  },
  selectedText: {
    color: Theme.Colors.neutral8,
  },
  selectButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  selectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: UI.responsiveWidth(4),
    paddingVertical: UI.responsiveWidth(0),
    borderRadius: UI.responsiveWidth(5),
    borderWidth: 1,
    borderColor: Theme.Colors.informational1,
    backgroundColor: Theme.Colors.background1,
    marginTop: 0,
  },
  selectButtonText: {
    marginLeft: UI.responsiveWidth(2),
  },
  pickerContainer: {
    paddingVertical: UI.responsiveWidth(4),
    paddingHorizontal: UI.responsiveWidth(2),
    alignItems: 'center',
  },
  doneButton: {
    marginBottom: UI.responsiveWidth(4),
  },
  dateTimePicker: {
    width: UI.responsiveWidth(80),
    height: UI.responsiveWidth(40),
  },
  selectButtonIcon: {
    width: UI.responsiveWidth(8),
    height: UI.responsiveWidth(8),
  },
});

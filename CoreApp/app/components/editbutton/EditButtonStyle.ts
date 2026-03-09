// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const EditButtonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: UI.responsiveWidth(5),
    paddingVertical: UI.responsiveHeight(0.25),
    borderRadius: UI.responsiveWidth(5),
    borderWidth: 1,
    borderColor: Theme.Colors.primary1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
    borderColor: Theme.Colors.neutral4,
  },
});

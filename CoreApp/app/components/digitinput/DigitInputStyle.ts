// Generated from Fingent Boilerplate | 2025-09-09 | diya.juliet

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const DigitInputStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  box: {
    height: UI.responsiveHeight(6),
    marginHorizontal: UI.responsiveWidth(0.7),
    backgroundColor: Theme.Colors.neutral9,
    borderRadius: 13,
    textAlign: 'center',
    flex: 1,
  },
  borderFocus: {
    borderWidth: 2.5,
    borderColor: Theme.Colors.primary1,
  },
});

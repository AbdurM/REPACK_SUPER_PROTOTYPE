// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const RetryStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  message: {
    textAlign: 'left',
    marginBottom: UI.responsiveHeight(2),
  },
  button: {
    paddingHorizontal: UI.responsiveWidth(8),
    paddingVertical: UI.responsiveHeight(1.5),
    backgroundColor: Theme.Colors.primary1,
    borderRadius: UI.responsiveWidth(2),
    minWidth: UI.responsiveWidth(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Theme.Colors.neutral10,
  },
});


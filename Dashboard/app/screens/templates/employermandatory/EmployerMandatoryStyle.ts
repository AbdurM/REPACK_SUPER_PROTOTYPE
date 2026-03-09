// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { Theme } from 'utilities/TenantIndex';
import { UI } from 'utilities/Helpers';

export const EmployerMandatoryStyles = StyleSheet.create({
  container: {
    backgroundColor: Theme.Colors.neutral10,
    borderRadius: UI.responsiveWidth(3),
    padding: UI.responsiveWidth(4),
    borderLeftWidth: UI.responsiveWidth(1),
    flexDirection: 'row',
  },
  leftSection: {
    flex: 1,
  },
  fundsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: UI.responsiveHeight(1),
  },
  fundsText: {
    marginLeft: UI.responsiveWidth(2),
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: UI.responsiveWidth(10),
    height: UI.responsiveWidth(10),
    tintColor: Theme.Colors.neutral6,
  },
});
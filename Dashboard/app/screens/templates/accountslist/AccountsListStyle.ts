// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const AccountsListStyles = StyleSheet.create({
  container: {
    backgroundColor: Theme.Colors.neutral10,
    borderRadius: UI.responsiveWidth(3),
    paddingVertical: UI.responsiveWidth(6),
    paddingHorizontal: UI.responsiveWidth(5),
    borderLeftWidth: UI.responsiveWidth(1),
    borderLeftColor: Theme.Colors.primary1,
    flexDirection: 'row',
  },
  leftSection: {
    flex: 1,
  },
  accountName: {
    marginBottom: UI.responsiveHeight(0.5),
  },
  accountNumber: {
    // No additional margin needed
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountText: {
    marginRight: UI.responsiveWidth(1),
  },
  arrowIcon: {
    // No additional styling needed
  },
  emptyContainer: {
    paddingVertical: UI.responsiveHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
  },
});


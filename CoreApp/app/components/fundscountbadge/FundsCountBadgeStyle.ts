// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { Theme } from 'utilities/TenantIndex';
import { UI } from 'utilities/Helpers';

export const FundsCountBadgeStyles = StyleSheet.create({
  badge: {
    backgroundColor: Theme.Colors.primary1,
    borderRadius: UI.responsiveWidth(3),
    paddingHorizontal: UI.responsiveWidth(2),
    paddingVertical: UI.responsiveWidth(0.5),
    minWidth: UI.responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
    // borderColor:'red'
  },
});
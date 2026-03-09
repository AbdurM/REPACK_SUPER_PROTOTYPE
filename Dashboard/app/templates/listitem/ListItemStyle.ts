// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const ListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: UI.responsiveWidth(4),
    paddingHorizontal: UI.responsiveWidth(4),
    borderColor: Theme.Colors.neutral6,
    borderBottomWidth: 1,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: UI.responsiveWidth(2),
  },
  textContainer: {
    flex: 1,
    marginLeft: UI.responsiveWidth(2),
  },
  typeText: {
    marginBottom: UI.responsiveWidth(1),
  },
});
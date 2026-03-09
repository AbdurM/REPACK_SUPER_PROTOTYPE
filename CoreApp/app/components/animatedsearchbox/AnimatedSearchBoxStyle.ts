// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const AnimatedSearchBoxStyles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  searchBox: {
    height: UI.responsiveWidth(10),
    borderRadius: UI.responsiveWidth(5),
    backgroundColor: Theme.Colors.neutral10,
    borderWidth: 1,
    borderColor: Theme.Colors.neutral7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: UI.responsiveWidth(3),
    shadowColor: Theme.Colors.neutral1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: UI.responsiveWidth(3.5),
    color: Theme.Colors.neutral2,
    paddingRight: UI.responsiveWidth(2),
  },
  searchIconContainer: {
    width: UI.responsiveWidth(6),
    height: UI.responsiveWidth(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

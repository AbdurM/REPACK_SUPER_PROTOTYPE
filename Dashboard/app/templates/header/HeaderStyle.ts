// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';

export const HeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: UI.responsiveWidth(4),
    height: UI.responsiveHeight(5)
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  // languageButton: {
  //   padding: UI.responsiveWidth(2),
  //   borderRadius: UI.responsiveWidth(2),
  //   // backgroundColor: Theme.Colors.secondary1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   minWidth: UI.responsiveWidth(10),
  //   minHeight: UI.responsiveWidth(10),
  // },
  icon: {
    width: UI.responsiveWidth(6),
    height: UI.responsiveWidth(6),
  },
  backIcon: {
    width: UI.responsiveWidth(6),
    height: UI.responsiveWidth(6),
  },
  questionIcon: {
    width: UI.responsiveWidth(5),
    height: UI.responsiveWidth(5),
    marginRight: UI.responsiveWidth(4),
  },
});
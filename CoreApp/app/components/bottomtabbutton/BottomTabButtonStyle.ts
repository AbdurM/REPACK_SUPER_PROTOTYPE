// Generated from Fingent Boilerplate

import {StyleSheet} from 'react-native';
import { Fontsize, TypographyStyles } from '../../utilities/Style';
// import { Theme, Font } from '../../utilities/TenantIndex';
import { UI } from '../../utilities/Helpers';

export const BottomTabButtonStyles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: UI.responsiveWidth(16), // Fixed height to prevent overflow
    paddingVertical: UI.responsiveWidth(1),
    paddingHorizontal: 1,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  selectedTab: {
    backgroundColor: 'transparent',
  },
  unSelectedTab: {
    backgroundColor: 'transparent',
  },
  tabIconView:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: UI.responsiveWidth(1),
  },
  tabIcon: {
    // Removed border for clean appearance
    // borderWidth: 1,
  },
  // selectedText: {
  //   textAlign: 'center',
  //   marginTop: UI.responsiveWidth(1),
  //   ...TypographyStyles.body_s_n2,
  //   lineHeight: Fontsize.eleven * 1.2, // Fixed line height for consistent baseline
  //   fontSize: Fontsize.eleven,
  //   maxWidth: UI.responsiveWidth(18), // Prevent text overflow
  // },
  // unSelectedText: {
  //   textAlign: 'center',
  //   marginTop: UI.responsiveWidth(1),
  //   ...TypographyStyles.body_s_n2,
  //   lineHeight: Fontsize.eleven * 1.2, // Fixed line height for consistent baseline
  //   fontSize: Fontsize.eleven,
  //   maxWidth: UI.responsiveWidth(18), // Prevent text overflow
  // },
  tabText: {
    textAlign: 'center',
    marginTop: UI.responsiveWidth(1),
    ...TypographyStyles.body_s_n2,
    lineHeight: Fontsize.eleven * 1.2, // Fixed line height for consistent baseline
    fontSize: Fontsize.eleven,
    maxWidth: UI.responsiveWidth(18), // Prevent text overflow
    // borderWidth: 1,
    overflow: 'visible',
  },
});

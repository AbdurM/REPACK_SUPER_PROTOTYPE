// Generated from Fingent Boilerplate | 2025-09-10 | Jerrin Thomas

import {StyleSheet} from 'react-native';
import { UI } from 'utilities/Helpers';
import { TypographyStyles } from 'utilities/Style';
import { Theme } from 'utilities/TenantIndex';

export const SwipeableStyles = StyleSheet.create({
  swipeable: {
    flex: 1,
  },
  rightContainer: {
    alignSelf: 'center',
    marginLeft: UI.responsiveWidth(-5),
  },
  rightActionContentContainer: {
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: UI.responsiveWidth(26),
    borderTopRightRadius: UI.responsiveWidth(5),
    borderBottomEndRadius: UI.responsiveWidth(5),
  },
  rightActionText: {
    alignSelf: 'center',
    marginLeft: UI.responsiveWidth(6),
    color: Theme.Colors.neutral1,
    ...TypographyStyles.h1
    // fontFamily: Font.Title_500,
    // fontSize: Fontsize.sixteen,
  },
});

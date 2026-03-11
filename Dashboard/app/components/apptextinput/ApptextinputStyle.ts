// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Fontsize } from 'utilities/Style';
import { Font, Theme } from 'utilities/TenantIndex';

export const ApptextinputStyles = StyleSheet.create({
  viewcontainer: {
    // borderWidth: 1,
  },
  textInputStyle: {
    // ...TypographyStyles.h4,
    fontSize: Fontsize.twentyFour,
    fontFamily: Font.Title_semi_bold,
    letterSpacing: -0.01 * Fontsize.twentyFour,
    fontWeight: '600',

    flex: 1,
    paddingVertical: UI.responsiveWidth(2),
    paddingHorizontal: UI.responsiveWidth(0.5),
    color: Theme.Colors.neutral3,
  },

  titleStyle: {},
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginHorizontal: UI.responsiveWidth(2),
    width: UI.responsiveWidth(6.5),
    height: UI.responsiveWidth(6.5),
  },
  errorStyle: {
    color: Theme.Colors.error1,
  },
  prefixText: {
    marginTop: UI.responsiveWidth(0.25),
    paddingVertical: UI.responsiveWidth(2),
    paddingRight: UI.responsiveWidth(1),
  },
});

// Generated from Fingent Boilerplate

import {StyleSheet} from 'react-native';
import { UI } from 'utilities/Helpers';
import { TypographyStyles } from 'utilities/Style';
import { Theme } from 'utilities/TenantIndex';

export const ApptextinputStyles = StyleSheet.create({
  viewcontainer: {
    // borderWidth: 1,
  },
  textInputStyle: {
    flex: 1,
    paddingVertical: UI.responsiveWidth(2),
    paddingHorizontal: UI.responsiveWidth(0.5),
    color: Theme.Colors.neutral3,
    ...TypographyStyles.h4
  },
  titleStyle: {},
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: UI.responsiveWidth(1),
  },
  inputWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle:{
    marginHorizontal: UI.responsiveWidth(2),
    width: UI.responsiveWidth(8),
    height: UI.responsiveWidth(8),
  },
  errorStyle:{
    color: Theme.Colors.error1,
  },
  prefixText: {
    marginTop: UI.responsiveWidth(0.25),
    paddingVertical: UI.responsiveWidth(2),
    paddingRight: UI.responsiveWidth(1),
  },
});

// generated from template

import {StyleSheet} from 'react-native';
import { UI } from 'utilities/Helpers';
import {Fontsize} from 'utilities/Style';
import { Theme } from 'utilities/TenantIndex';

export const ButtonStyles = StyleSheet.create({
  iconView: {
    width: UI.responsiveWidth(12),
    height: UI.responsiveWidth(12),
    borderRadius: UI.responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  // icon: {
  //   width: wp('7%'),
  //   height: wp('7%'),
  // },
  customText1: {
    color: Theme.Colors.neutral10,
  },
  customText2: {
    color: Theme.Colors.primary1
  },
  mainView: {
    backgroundColor: Theme.Colors.primary1,
    alignItems: 'center',
    borderRadius: UI.responsiveWidth(10),
    padding: UI.responsiveWidth(3),
    marginTop: UI.responsiveHeight(2),
    flexDirection:'row',
    justifyContent:'center',
  },
  disabled:{
    opacity: 0.5,
  },
  notFilled:{
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  icon:{
    height: UI.responsiveWidth(6),
    width: UI.responsiveWidth(6),
    marginLeft: UI.responsiveWidth(2),
  },
  iconLeft:{
    height: UI.responsiveWidth(6),
    width: UI.responsiveWidth(6),
    marginRight: UI.responsiveWidth(2),
  }
});

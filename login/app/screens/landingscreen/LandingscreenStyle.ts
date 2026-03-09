// generated from template

import {StyleSheet} from 'react-native';
import {Fontsize } from '../../utilities/Style';
import { UI } from '../../utilities/Helpers';

export const LandingscreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoView: {
    flex:1,
    width: '100%',
    position:'absolute',
    alignItems: 'center',
    marginTop: UI.responsiveHeight(50) - UI.responsiveWidth(24),
  },
  logoStyle: {
    width: UI.responsiveWidth(25),
    height: UI.responsiveWidth(14),
    alignSelf: 'center',
  },
  sloganText: {
    fontSize: Fontsize.twenty,
    marginTop: UI.responsiveWidth(3),
  },
  buttonView: {
    bottom: UI.responsiveWidth(8),
    position: 'absolute',
    width: UI.responsiveWidth(100),
    paddingHorizontal: UI.responsiveWidth(5),
  },
  iconContainer:{
    flex:1,
    alignItems:'center',
    paddingHorizontal: UI.responsiveWidth(5),
    // justifyContent:'center',
  },
  logoStyleBottomSheet: {
    width: UI.responsiveWidth(34),
    height: UI.responsiveWidth(34),
    alignSelf: 'center',
    marginTop: UI.responsiveWidth(40),
  },
  descriptionTextStyle: {
    textAlign: 'center',
    marginTop: UI.responsiveWidth(4),
  },
});

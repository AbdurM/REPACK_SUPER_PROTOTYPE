// Generated from Fingent Boilerplate

import {StyleSheet} from 'react-native';
import { UI } from 'utilities/Helpers';
import { TypographyStyles } from 'utilities/Style';
import { Theme } from 'utilities/TenantIndex';

export const AvatarStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // borderWidth:1
  },
  avatarView: {
    backgroundColor: Theme.Colors.secondary4,
    height: UI.responsiveWidth(25),
    width: UI.responsiveWidth(25),
    borderRadius: UI.responsiveWidth(12.5),
    justifyContent: 'center',
    // alignSelf: 'center',
    alignItems: 'center',
  },
  nameText: {
  //  fontSize: Fontsize.thirtySix,
  //  fontFamily: Font.Body_600
  //  ...TypographyStyles.body_l_n2
  },

  textContainer: {
    alignSelf: 'center',
    marginTop: UI.responsiveWidth(2),
    alignItems: 'center',
  },
  welcomeText: {
    // fontSize:  Fontsize.twentySix,
    // fontFamily: Font.Title_500,
   ...TypographyStyles.h4

  },
  name: {
    marginTop: UI.responsiveWidth(2),
    // fontSize:  Fontsize.twentyOne,
    // fontFamily: Font.Body_400,
   ...TypographyStyles.body_l_n3
  },
});

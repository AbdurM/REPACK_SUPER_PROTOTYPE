// Generated from Fingent Boilerplate

import {StyleSheet} from 'react-native';
import { UI } from 'utilities/Helpers';

export const LandingScreenBottomsheetStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer:{
    flex:1,
    alignItems:'center',
    paddingHorizontal: UI.responsiveWidth(5),
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
  buttonView: {
    bottom: UI.responsiveWidth(8),
    position: 'absolute',
    width: UI.responsiveWidth(100),
    paddingHorizontal: UI.responsiveWidth(5),
  },
});

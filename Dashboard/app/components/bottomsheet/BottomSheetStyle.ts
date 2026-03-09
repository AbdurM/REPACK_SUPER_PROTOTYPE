// generated from template

import {StyleSheet} from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const BottomSheetStyles = StyleSheet.create({
  sheet:{
    // paddingVertical:UI.responsiveWidth(2.5),
    // borderTopLeftRadius: UI.responsiveWidth(6),
    // borderTopRightRadius: UI.responsiveWidth(6),
  },
  bottomSheetBackground:{
    borderTopLeftRadius: UI.responsiveWidth(6),
    borderTopRightRadius: UI.responsiveWidth(6),
  },
  sheetContentView: {
    flex:1,
    paddingVertical: UI.responsiveWidth(4),
    paddingHorizontal:UI.responsiveWidth(6),
  },
  sheetContentScroll: {
    paddingVertical: UI.responsiveWidth(4),
    paddingHorizontal:UI.responsiveWidth(6),
  },
  sheetContentContainer:{
    flex:1,
  },
  bgColor: {
    backgroundColor: 'white',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  handle: {
    height: UI.responsiveWidth(1.5),
    width: UI.responsiveWidth(12),
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: Theme.Colors.neutral1 ,
    opacity: 0.3,
  },
  handleWrapper: {
    marginVertical :UI.responsiveWidth(1),
  },
  iconStyle: {
    width: UI.responsiveWidth(3.9),
    height: UI.responsiveWidth(3.9),
  },
  iconWrap: {
    // borderWidth:2,
    // paddingTop: UI.responsiveWidth(5),
    // paddingHorizontal: UI.responsiveWidth(4),
    // borderColor:'red',
  },
  iconWrapOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconWrapTwo:{
    paddingTop: UI.responsiveWidth(0),
    paddingHorizontal: UI.responsiveWidth(0),
  },
  iconPressBack:{
    padding:UI.responsiveWidth(5),
    alignSelf: 'flex-start',
  },
  iconPressClose:{
    padding:UI.responsiveWidth(5),
    alignSelf: 'flex-end',
  },
});

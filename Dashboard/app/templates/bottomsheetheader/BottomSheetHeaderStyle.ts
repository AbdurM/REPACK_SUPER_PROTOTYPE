// Generated from Fingent Boilerplate

import {StyleSheet} from 'react-native';
import {UI} from 'utilities/Helpers';
import {Theme} from 'utilities/TenantIndex';

export const BottomSheetHeaderStyles = StyleSheet.create({
  iconWrapOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backBtn: {
    alignSelf: 'flex-start',
    padding: UI.responsiveWidth(5),
  },
  closeBtn: {
    alignSelf: 'flex-end',
    padding: UI.responsiveWidth(5),
  },
  iconStyle: {
    width: UI.responsiveWidth(6),
    height: UI.responsiveWidth(6),
  },
  titleContainer: {
    paddingHorizontal: UI.responsiveWidth(5),
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.Colors.neutral7,
    marginHorizontal: UI.responsiveWidth(5),
  },
});
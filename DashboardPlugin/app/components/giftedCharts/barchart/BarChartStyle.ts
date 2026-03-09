// generated from template

import { StyleSheet } from 'react-native';
import { Fontsize } from '../../../utilities/Style';
import { Theme } from '../../../utilities/TenantIndex';
import { UI } from '../../../utilities/Helpers';


export const BarChartStyles = StyleSheet.create({
  container: {
    backgroundColor: Theme.Colors.neutral10,
    borderRadius: UI.responsiveWidth(2),
  },
  titleContainer: {
    flexDirection: 'row',
    // marginBottom: UI.responsiveWidth(3.5),
    // marginLeft: UI.responsiveWidth(3),
    paddingVertical: UI.responsiveWidth(4),
  },
  titleItem: {
    paddingRight: UI.responsiveWidth(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleDot: {
    width: UI.responsiveWidth(2.5),
    height: UI.responsiveWidth(2.5),
    borderRadius: UI.responsiveWidth(2.5),
    marginRight: UI.responsiveWidth(1),
  },
  titleText: {
    fontSize: Fontsize.twelve,
    marginLeft: UI.responsiveWidth(1.5),
  },
  durationView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: UI.responsiveWidth(3),
    borderRadius: UI.responsiveWidth(10.75),
    paddingHorizontal: UI.responsiveWidth(5),
    width: UI.responsiveWidth(90),
  },
  durationTextTouchView: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: UI.responsiveWidth(2),
  },
});

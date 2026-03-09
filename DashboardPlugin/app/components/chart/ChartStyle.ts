// Generated from Fingent Boilerplate

import {StyleSheet} from 'react-native';
import { UI } from '../../utilities/Helpers';
import { Theme } from '../../utilities/TenantIndex';

export const ChartStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  durationView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: UI.responsiveWidth(1),
    borderRadius: UI.responsiveWidth(10.75),
    paddingHorizontal: UI.responsiveWidth(5),
    width: UI.responsiveWidth(90),
    backgroundColor:Theme.Colors.activeState,
  },
  durationTextTouchView: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: UI.responsiveWidth(1.5),
    borderColor: Theme.Colors.neutral10,
  },
  durationSelectorContainer: {
    marginTop: UI.responsiveWidth(3),
    height: UI.responsiveWidth(46),
  },
});

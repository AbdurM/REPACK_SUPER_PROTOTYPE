// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';

export const ProgressBarStyles = StyleSheet.create({
  container: {
    // width: '100%',
    height: UI.responsiveWidth(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressSegment: {
    height: UI.responsiveWidth(1),
    borderRadius: UI.responsiveWidth(1.25),
    marginHorizontal: UI.responsiveWidth(0.5),
    flex: 1,
  },
  firstSegment: {
    marginLeft: 0,
  },
  lastSegment: {
    marginRight: 0,
  },
});
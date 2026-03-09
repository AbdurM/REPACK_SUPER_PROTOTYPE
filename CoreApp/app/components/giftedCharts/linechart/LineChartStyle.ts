// generated from template

import { StyleSheet } from 'react-native';
import { UI } from '../../../utilities/Helpers';

export const LineChartStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: UI.responsiveWidth(2),
    borderRadius: UI.responsiveWidth(2),
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: UI.responsiveWidth(3),
    marginLeft: UI.responsiveWidth(5),
  },
  titleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: UI.responsiveWidth(4),
  },
  titleDot: {
    width: UI.responsiveWidth(2.5),
    height: UI.responsiveWidth(2.5),
    borderRadius: UI.responsiveWidth(2.5),
  },
  titleText: {
    marginLeft: UI.responsiveWidth(1.5),
  },
});

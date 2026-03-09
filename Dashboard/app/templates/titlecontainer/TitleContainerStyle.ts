// Generated from Fingent Boilerplate

import {StyleSheet} from 'react-native';
import { UI } from 'utilities/Helpers';

export const TitleContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: UI.responsiveWidth(4),
    paddingVertical: UI.responsiveHeight(2),
    // borderWidth: 2,
    // borderColor: 'red',
  },
  titleStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: UI.responsiveWidth(3),
    // borderWidth: 2,
  },
  horizontalScrollContent: {
    paddingHorizontal: UI.responsiveWidth(2),
    paddingVertical: UI.responsiveHeight(1),
    // borderWidth: 2,
  },
  verticalScrollContent: {
    flexGrow: 1,
  },
});

// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const ListWidgetStyles = StyleSheet.create({
  container: {
    backgroundColor: Theme.Colors.background1,
    borderRadius: UI.responsiveWidth(4),
    paddingVertical: UI.responsiveWidth(5),
    marginHorizontal: UI.responsiveWidth(4),
    marginVertical: UI.responsiveWidth(4),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Theme.Colors.neutral7,
    paddingBottom: UI.responsiveWidth(4),
  },
  titleText: {
    marginLeft: UI.responsiveWidth(4),
  },
  seeAllText: {
  },
  itemsContainer: {
  },
  infoIcon: {
    marginHorizontal: UI.responsiveWidth(4),
    marginVertical: UI.responsiveWidth(1),
  },
  seeAllContainer:{
    marginTop:UI.responsiveWidth(4),
    alignItems:'center',
  },
  seeAllTouchable:{
    paddingHorizontal:UI.responsiveWidth(2),
  }
});
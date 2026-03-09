// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { TypographyStyles } from 'utilities/Style';
import { Theme } from 'utilities/TenantIndex';

export const HeaderContainerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: UI.responsiveWidth(4),
    paddingTop: UI.responsiveHeight(1),
  },
  titleText: {
    // Base title style
  },
  titleWithSubtitle: {
    marginBottom: UI.responsiveHeight(1),
  },
  titleWithoutSubtitle: {
    marginBottom: UI.responsiveHeight(2),
  },
  subTitleText: {
    marginBottom: UI.responsiveHeight(2),
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 1,
    // height: UI.responsiveHeight(4),
  },
  iconButton: {
    width: UI.responsiveWidth(12),
    height: UI.responsiveWidth(9),
    borderRadius: UI.responsiveWidth(4.5),
    borderWidth: 1,
    borderColor: Theme.Colors.neutral4,
    backgroundColor: Theme.Colors.neutral1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: UI.responsiveWidth(2),
  },
  iconButtonImage: {
    width: UI.responsiveWidth(7),
    height: UI.responsiveWidth(7),
    tintColor: Theme.Colors.neutral7,
  },
  searchInputStyle: {
    borderWidth: 1,
    borderColor: Theme.Colors.neutral7,
    borderRadius: UI.responsiveWidth(5),
    paddingHorizontal: UI.responsiveWidth(2),
    marginTop: UI.responsiveWidth(2),
    ...TypographyStyles.body_l_n1
  },
  policySelectStyle:{
    flex: 1,
    maxWidth: '64%',
    marginRight: UI.responsiveWidth(4),
  }
});

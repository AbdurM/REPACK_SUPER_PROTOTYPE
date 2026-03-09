// Generated from Fingent Boilerplate

import { StyleSheet } from "react-native";
import { UI } from "utilities/Helpers";
import { Theme } from "utilities/TenantIndex";

export const BottomSheetTemplateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.neutral10,
    borderTopLeftRadius: UI.responsiveWidth(4),
    borderTopRightRadius: UI.responsiveWidth(4),
    // paddingHorizontal: UI.responsiveWidth(4),
    // paddingTop: UI.responsiveHeight(2),
    paddingBottom: UI.responsiveHeight(2),
  },
  header: {
    paddingBottom: UI.responsiveHeight(2),
    borderBottomWidth: 1,
    borderBottomColor: Theme.Colors.neutral7,
    marginBottom: UI.responsiveHeight(2),
    // paddingHorizontal: UI.responsiveWidth(4),
    paddingTop: UI.responsiveHeight(2),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: UI.responsiveWidth(2),
  },
  titleIconContainer: {
    marginRight: UI.responsiveWidth(1),
  },
  headerText: {
    flex: 1,
    // textAlign: "center",
  },
  body: {
    flex: 1,
    // marginBottom: UI.responsiveHeight(2),
  },
  footer: {
    // paddingTop: UI.responsiveHeight(1),
    // borderWidth: 1,
  },
  button: {
    // marginTop: UI.responsiveHeight(1),
    // borderWidth: 1,
  },
});
// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { Theme } from 'utilities/TenantIndex';
import { UI } from 'utilities/Helpers';

export const SelectIconSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listCard: {
    backgroundColor: Theme.Colors.neutral10,
    marginHorizontal: UI.responsiveWidth(4),
    marginVertical: UI.responsiveHeight(1),
    borderRadius: UI.responsiveWidth(3),
    padding: UI.responsiveWidth(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Theme.Colors.neutral8,
  },
  listCardSelected: {
    borderColor: Theme.Colors.primary1,
    backgroundColor: Theme.Colors.primary1,
  },
  listContent: {
    flex: 1,
  },
  listItemNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: UI.responsiveHeight(0.5),
  },
  listItemName: {
    flex: 1,
    marginRight: UI.responsiveWidth(2),
  },
  itemNumber: {
    marginTop: UI.responsiveHeight(0.5),
  },
  checkbox: {
    width: UI.responsiveWidth(6),
    height: UI.responsiveWidth(6),
    borderRadius: UI.responsiveWidth(1),
    borderWidth: 2,
    borderColor: Theme.Colors.neutral7,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: UI.responsiveWidth(3),
  },
  checkboxSelected: {
    backgroundColor: Theme.Colors.primary1,
    borderColor: Theme.Colors.primary1,
  },
  checkmark: {
    // fontSize: UI.responsiveWidth(3),
    // fontWeight: 'bold',
  },

  // New filter list styles (Figma design)
  filterListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: UI.responsiveWidth(2),
    backgroundColor: Theme.Colors.neutral10,
    marginHorizontal: 0,
    borderBottomColor: Theme.Colors.neutral8,
    // paddingHorizontal: UI.responsiveWidth(6.5),
    // borderWidth: 1,
  },
  filterItemIcon: {
    // width: UI.responsiveWidth(6),
    // height: UI.responsiveWidth(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: UI.responsiveWidth(4),
    // borderWidth: 1,
  },
  filterItemContent: {
    flex: 1,
    marginRight: UI.responsiveWidth(4),
  },
  filterItemText: {
    // fontSize: 16,
    // fontWeight: '500',
  },
  filterCheckbox: {
    width: UI.responsiveWidth(6),
    height: UI.responsiveWidth(6),
    borderRadius: UI.responsiveWidth(3),
    borderWidth: 2,
    borderColor: Theme.Colors.neutral7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.Colors.neutral10,
  },
  filterCheckboxSelected: {
    backgroundColor: Theme.Colors.primary1,
    borderColor: Theme.Colors.primary1,
  },
  checkmarkContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
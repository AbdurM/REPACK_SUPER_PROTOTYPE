// generated from template

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const SelectOptionStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: UI.responsiveWidth(3),
    paddingVertical: UI.responsiveWidth(2),
    borderWidth: 1,
    borderRadius: UI.responsiveWidth(10),
    // minHeight: UI.responsiveWidth(12),
  },
  dynamicContainer: {
    alignSelf: 'flex-start',
  },
  disabledContainer: {
    opacity: 0.6,
  },
  textContainer: {
    flex: 1,
    marginRight: UI.responsiveWidth(2),
  },
  dynamicTextContainer: {
    marginRight: UI.responsiveWidth(2),
  },
  placeholderText: {
    color: Theme.Colors.neutral6,
  },
  selectedText: {
    color: Theme.Colors.neutral8,
  },
  chevronContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {
    paddingVertical: UI.responsiveWidth(3),
    paddingHorizontal: UI.responsiveWidth(2),
    borderBottomColor: Theme.Colors.neutral7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // List Selection Styles
  listContainer: {
    // padding: UI.responsiveWidth(4),
  },
  listHeader: {
    marginBottom: UI.responsiveWidth(6),
  },
  listCard: {
    paddingVertical: UI.responsiveWidth(4),
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Theme.Colors.neutral7,
    borderBottomWidth: 1,
  },
  listCardNoBorder: {
    borderBottomWidth: 0,
  },
  listCardSelected: {
    borderWidth: 1,
    borderColor: Theme.Colors.primary1,
  },
  listContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: UI.responsiveWidth(3),
  },
  listItemContent: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: UI.responsiveWidth(1),
  },
  listItemName: {
    flex: 1,
    marginRight: UI.responsiveWidth(2),
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: UI.responsiveWidth(2),
    paddingVertical: UI.responsiveWidth(0.4),
    borderRadius: UI.responsiveWidth(5),
    marginRight: UI.responsiveWidth(8),
  },
  statusBadgeActive: {
    backgroundColor: Theme.Colors.semantic1,
  },
  statusBadgePending: {
    backgroundColor: Theme.Colors.warning3,
  },
  statusBadgeInactive: {
    backgroundColor: Theme.Colors.neutral4,
  },
  statusTextActive: {
    color: Theme.Colors.neutral1,
  },
  statusTextPending: {
    color: Theme.Colors.neutral1,
  },
  statusTextInactive: {
    color: Theme.Colors.neutral6,
  },
  itemNumber: {
    marginTop: UI.responsiveWidth(1),
  },
  checkbox: {
    width: UI.responsiveWidth(6),
    height: UI.responsiveWidth(6),
    borderRadius: UI.responsiveWidth(3),
    borderWidth: 2,
    borderColor: Theme.Colors.neutral7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    // backgroundColor: Theme.Colors.primary1,
    borderColor: Theme.Colors.primary1,
  },
  checkmark: {
    color: Theme.Colors.neutral10,
    fontSize: UI.responsiveWidth(3.5),
    fontWeight: 'bold',
  },
  doneButton: {
    marginBottom: UI.responsiveWidth(4),
  },
  leftIcon: {
    marginRight: UI.responsiveWidth(2),
  },
  titleRow: {
    marginBottom: UI.responsiveWidth(2),
  },
  titleStyle: {},
});

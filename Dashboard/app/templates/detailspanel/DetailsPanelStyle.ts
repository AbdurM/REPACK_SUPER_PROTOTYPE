// generated from template

import {StyleSheet} from 'react-native';
import {Font, Theme} from '../../utilities/TenantIndex';
import {UI} from '../../utilities/Helpers';
import {Fontsize} from '../../utilities/Style';

export const DetailsPanelStyles = StyleSheet.create({
  containerWrapper:{
    paddingVertical: UI.responsiveWidth(1),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: UI.responsiveWidth(3),
  },
  iconView: {
    backgroundColor: Theme.Colors.secondary4,
    height: UI.responsiveWidth(10),
    width: UI.responsiveWidth(10),
    borderRadius: UI.responsiveWidth(12.5),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    height: UI.responsiveWidth(6),
    width: UI.responsiveWidth(6),
  },
  text: {
    marginTop: UI.responsiveHeight(0.5),
  },
  textTitle: {
    fontFamily: Font.Title_semi_bold,
    fontSize: Fontsize.sixteen,
    paddingHorizontal: UI.responsiveWidth(3),
  },
  leftIcon: {
    height: UI.responsiveWidth(5),
    width: UI.responsiveWidth(5),
  },

  leftIconContainer: {
    justifyContent: 'flex-start', // Align to top
    alignItems: 'flex-start', // Align to left edge
    alignSelf: 'flex-start', // Align container to top
    paddingTop: UI.responsiveWidth(1), // Small padding to align with title baseline
  },
  rightIconContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end', // Align to right edge
    alignSelf: 'flex-start',
  },
  rightIconContainerCentered: {
    alignSelf: 'center',
  },
  textViewContainer: {
    flex: 5,
    marginLeft: UI.responsiveWidth(3),
  },
  customTouchable: {
    marginLeft: UI.responsiveWidth(15),
    paddingBottom: UI.responsiveWidth(3),
  },
  descriptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: UI.responsiveWidth(2),
  },
  badgeContainer: {
    backgroundColor: Theme.Colors.informational2,
    paddingHorizontal: UI.responsiveWidth(3),
    paddingVertical: UI.responsiveHeight(0.3),
    borderRadius: UI.responsiveWidth(3),
  },
});

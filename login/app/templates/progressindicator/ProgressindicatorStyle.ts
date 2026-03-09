// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const ProgressindicatorStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 40,
    width: '100%',
    justifyContent: 'center',
  },
  track: {
    position: 'absolute',
    width: '100%',
    borderRadius: 32,
  },
  activeTrack: {
    position: 'absolute',
    borderRadius: 2,
    zIndex: 1,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 1,
  },
  indicator: {
    position: 'absolute',
    width: 1,
    // borderRadius: 1,
    borderLeftWidth: 2,
    borderStyle: 'dotted',
    height: UI.responsiveWidth(5),
    backgroundColor: 'transparent',
    borderColor: Theme.Colors.neutral6,
  },
  startIndicator: {
    left: 0,
  },
  progressIndicator: {
    right: 0,
  },
  label: {
    position: 'absolute',
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    zIndex: 3,
  },
  startLabel: {
    left: -10,
    top: 25,
  },
  progressLabel: {
    top: 25,
    // Dynamic left position will be set inline
  },
  labelContainer: {
    position: 'absolute',
    zIndex: 4,
  },
  startLabelContainer: {
    left: 0,
    top: UI.responsiveWidth(14),
  },
  endLabelContainer: {
    top: UI.responsiveWidth(14),
    right: 0,
  },
  borderTOproperRadius: {
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
  },
});

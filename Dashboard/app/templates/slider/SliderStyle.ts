// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from '../../utilities/Helpers';
import { Theme } from '../../utilities/TenantIndex';

export const SliderStyles = StyleSheet.create({
  percentageDisplay:{
    width: '100%',
    height: UI.responsiveWidth(6),
    marginBottom: UI.responsiveWidth(3),
    position: 'relative',
  },
  percentageTextWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: UI.responsiveWidth(5),
  },
  track: {
    left: 0,
    right: 0,
    height: 20,
    zIndex: 0.1,
    borderRadius: 30,
    position: 'absolute',
  },
  activeTrack: {
    left: 0,
    zIndex: 0.1,
    borderRadius: 12,
    position: 'absolute',
    height: UI.responsiveWidth(4),
  },
  thumb: {
    zIndex: 1,
    elevation: 5,
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    position: 'absolute',
    borderRadius: 30,
    shadowColor: Theme.Colors.neutral8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  disabledTrack: {
    opacity: 0.3,
  },
  disabledThumb: {
    opacity: 0.3,
  },
  valueText: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
  },
  maxSlidingIndicator: {
    width: 1,
    borderRadius: 1,
    borderLeftWidth: 2,
    borderStyle: 'dotted',
    height: UI.responsiveWidth(10),
    backgroundColor: 'transparent',
    borderColor: Theme.Colors.neutral6,
  },
  maxSlidingLabelContainer: {
    position: 'absolute',
    width: UI.responsiveWidth(25),
    left: 0,
    textAlign: 'left',
  },
  maxSlidingLabel: {
    width: UI.responsiveWidth(33),
    position: 'absolute',
    color: Theme.Colors.neutral8,
    right: 0,
    marginTop: UI.responsiveWidth(1),
  },
  disabledMaxSlidingIndicator: {
    opacity: 0.3,
  },
  disabledMaxSlidingLabel: {
    opacity: 0.3,
  },
  marginTop: {
    top: UI.responsiveWidth(5),
  },
});

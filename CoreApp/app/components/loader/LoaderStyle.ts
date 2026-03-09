// generated from template

import {StyleSheet} from 'react-native';
import { Colors } from 'utilities/Style';
import { Theme } from 'utilities/TenantIndex';

export const LoaderStyles = StyleSheet.create({
  loadingOuter: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Theme.Colors.neutral1,
    zIndex: 999,
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Generated from Fingent Boilerplate | 10 September 2025

import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { LoaderStyles } from './LoaderStyle';
import { LoaderViewProps, defaultProps } from './LoaderModel';
import { Theme } from 'utilities/TenantIndex';

export function LoaderView( props : Readonly<LoaderViewProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };

  return(
    <View style={mergedProps.type === 'container' ? LoaderStyles.loadingContainer : LoaderStyles.loadingOuter}>
      <ActivityIndicator size={mergedProps.size} color={Theme.Colors.neutral1} />
    </View>
  );
}
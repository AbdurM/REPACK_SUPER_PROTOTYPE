// generated from template

import React from "react";
import { View, ActivityIndicator } from "react-native";
import useAsyncImageViewModel from "./AsyncImageViewModel";
import { AsyncImageViewProps, defaultProps } from "./AsyncImageModel";
import FastImage from 'react-native-fast-image'
import { Theme } from "utilities/TenantIndex";

export function AsyncImageView( props : Readonly<AsyncImageViewProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { loader, onLoad, setLoader } = useAsyncImageViewModel(mergedProps);
  
  return (
    <View>
      <FastImage
        resizeMode={mergedProps.resizeMode}
        source={mergedProps.source}
        style={mergedProps.style}
        onLoad={() => onLoad()}
        onError={() => setLoader(false)}
      />

      {!loader ? (
        <View
          style={{ position: "absolute", left: "45%", top: mergedProps.top ? mergedProps.top : 50 }}
        >
          <ActivityIndicator size="small" color={Theme.Colors.neutral1} />
        </View>
      ) : null}
    </View>
  );
}

// generated from template

import React from "react";
import { View, ActivityIndicator, Image } from "react-native";
import useAsyncImageViewModel from "./AsyncImageViewModel";
import { AsyncImageStyles } from "./AsyncImageStyle";
import { AsyncImageViewProps, defaultProps } from "./AsyncImageModel";
import { Colors } from 'utilities/Style';
import FastImage from 'react-native-fast-image'

export function AsyncImageView( props : Readonly<AsyncImageViewProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { loaded, onLoad, setLoader } = useAsyncImageViewModel(mergedProps);
  
  return (
    <View>
      <FastImage
        resizeMode={mergedProps.resizeMode}
        source={mergedProps.source}
        style={mergedProps.style}
        onLoad={() => onLoad()}
        onError={() => setLoader(false)}
      />

      {!loaded ? (
        <View
          style={{ position: "absolute", left: "45%", top: mergedProps.top ? mergedProps.top : 50 }}
        >
          <ActivityIndicator size="small" color={Colors.COLOR_BUTTON_BG} />
        </View>
      ) : null}
    </View>
  );
}

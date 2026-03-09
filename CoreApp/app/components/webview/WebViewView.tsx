// generated from template

import React from "react";
import useWebViewViewModel from "./WebViewViewModel";
import { WebViewStyles } from "./WebViewStyle";
import { WebViewViewProps } from "./WebViewModel";
import WebView from "react-native-webview";

export function WebViewView({
  url,
  html,
  style,
  onMessage,
  minimumFontSize,
  textZoom,
  injectedJavaScript,
}: WebViewViewProps): React.JSX.Element {
  const { loading, setLoading } = useWebViewViewModel({});

  return (
    <WebView
      source={url ? { uri: url } : { html: html ?? '' }} // Ensure html is always a string
      style={[WebViewStyles.defaultWebview, style]}
      onMessage={(event) => {
        onMessage?.(event.nativeEvent.data);
      }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      scalesPageToFit={true} // Enables automatic scaling
      originWhitelist={["*"]} // Allows external content
      minimumFontSize={minimumFontSize ?? 12} // Sets minimum font size
      textZoom={textZoom ?? 200} // Adjusts text size
      allowsInlineMediaPlayback={true}
      injectedJavaScript={injectedJavaScript ?? ''} // Allows custom JS injection
    />
  );
}

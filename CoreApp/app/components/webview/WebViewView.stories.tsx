import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { StyleSheet, View } from "react-native";
import { WebViewView } from "./WebViewView";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes full space
    width: "100%",
    height: "100%",
    padding: 16,
    backgroundColor: "#f0f0f0", // Light background for visibility
  },
  webview: {
    flex: 1, // Ensure WebView takes available space
    width: "100%",
    height: "100%",
    borderWidth: 1, // Add border for debugging visibility
    borderColor: "#ccc",
  },
});

const meta = {
  title: "WebView",
  component: WebViewView,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    // Add layout parameter to ensure full-screen rendering
    layout: "fullscreen",
  },
} satisfies Meta<typeof WebViewView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WebViewExample: Story = {
  args: {
    url: "https://reactnative.dev/",
    html: undefined,
    style: styles.webview, // Use defined style for consistency
    onMessage: (data) => console.log("Message from WebView:", data),
    minimumFontSize: 12,
    textZoom: 100,
    injectedJavaScript: undefined,
  },
};


export const CustomHTML: Story = {
  args: {
    url: undefined,
    html: `
      <html>
        <body>
          <h1>Hello, WebView!</h1>
          <p>This is a custom HTML content rendered in WebView.</p>
          <button onclick="window.ReactNativeWebView.postMessage('Button Clicked!')">
            Click Me
          </button>
        </body>
      </html>
    `,
    style: styles.webview,
    onMessage: (data) => console.log("Message from WebView:", data),
    minimumFontSize: 16,
    textZoom: 120,
    injectedJavaScript: "window.alert('Custom JS Injected!');",
  },
};
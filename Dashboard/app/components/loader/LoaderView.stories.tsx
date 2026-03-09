import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { LoaderView } from "./LoaderView";

const meta = {
  title: "Loader",
  component: LoaderView,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof LoaderView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoaderExample: Story = {
  args: {
    type: "container",
    size: "large",
  },
};

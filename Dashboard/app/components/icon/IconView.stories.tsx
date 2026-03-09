import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { IconView } from "./IconView";

const meta = {
  title: "Icon",
  component: IconView,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconExample: Story = {
    args: {
        source: 'EYE_CLOSED',
        width: 60,
        height: 30,
        resizeMode: 'contain',
        style: { borderWidth: 1, borderColor: 'lightgray' },
      },
};

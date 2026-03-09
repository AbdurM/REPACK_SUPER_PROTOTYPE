import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import CustomTextView from "./CustomTextView";

const meta = {
  title: "CustomText",
  component: CustomTextView,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CustomTextView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomTextExample: Story = {
  args: {
    children: "Default Text",
    style: { fontSize: 20 },
    numberOfLines: 2,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, View } from "react-native";
import { CustomToastView } from "./CustomToastView";

const meta = {
  title: "CustomToast",
  component: ({ msg }) => {
    return (
      <Button title={`Show Toast`} onPress={() => CustomToastView({ msg })} />
    );
  },
    decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CustomToastView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomToastExample: Story = {
  args: {
    msg: "Custom Toast send",
  },
};

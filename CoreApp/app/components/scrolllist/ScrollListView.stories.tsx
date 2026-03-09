import { Text, View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ScrollListView from "./ScrollListView";

const meta = {
  title: "ScrollList",
  component: ScrollListView,

  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ScrollListView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollListExample: Story = {
    args: {
        data: Array.from({ length: 20 }, (_, i) => ({ id: i, name: `Item ${i + 1}` })),
        renderItem: ({ item }) => <Text style={{ paddingVertical: 10 }}>{item.name}</Text>,
        refreshing: false,
        isLoadingMore: false,
      },
};

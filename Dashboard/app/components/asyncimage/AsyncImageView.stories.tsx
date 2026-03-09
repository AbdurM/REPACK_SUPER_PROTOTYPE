import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { AsyncImageView } from "./AsyncImageView";
import React from 'react';

const meta = {
  title: "AsyncImage",
  component: AsyncImageView,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AsyncImageView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AsyncImageExample: Story = {
  args: {
    source: {
      uri: "https://media.istockphoto.com/id/1402801804/photo/closeup-nature-view-of-palms-and-monstera-and-fern-leaf-background.jpg?s=612x612&w=0&k=20&c=0pX8CbzsrqvMQKMa4853JRUw8oGy8NnsOC812H3o9Xo=",
    },
    style: { width: 100, height: 100 },
    resizeMode: 'contain'
  },
};

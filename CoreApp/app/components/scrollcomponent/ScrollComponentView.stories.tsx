import React from "react";
import { View, Text } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollComponentView } from "./ScrollComponentView";

const meta = {
  title: "ScrollComponent",
  component: ScrollComponentView,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ScrollComponentView>;

export default meta;

type Story = StoryObj<typeof meta>;

// export const ScrollExample: Story = {
//   args: {
//     children: (
//       <>
//         <Text>Test</Text>
//         <Text>Test</Text>
//       </>
//     ),
//   },
// };

export const ScrollExample: Story = {
  args: {
    loading: false,
    isLazyLoading: false,
    horizontal: false,
  },
  render: (args) => (
    <ScrollComponentView {...args}>
      <Text>Scrollable Child</Text>
      <Text>Another Item</Text>
    </ScrollComponentView>
  ),
};

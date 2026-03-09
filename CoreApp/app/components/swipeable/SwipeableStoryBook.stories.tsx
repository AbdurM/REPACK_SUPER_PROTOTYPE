// Generated from Fingent Boilerplate | 2025-09-10 | Jerrin Thomas

import type { Meta, StoryObj } from '@storybook/react';
import { SwipeableProps } from "./SwipeableModel";
import { SwipeableView } from "./SwipeableView";

export default {
  title: "Swipeable",
  component: SwipeableView,
  
} as Meta;

type Story = StoryObj<SwipeableProps>;

// export const Basic: Story = {}; // add this line to create another story with same component
export const SwipeableExample: Story = {
  args: {
     keyValue: "exampleKey",
  },
};

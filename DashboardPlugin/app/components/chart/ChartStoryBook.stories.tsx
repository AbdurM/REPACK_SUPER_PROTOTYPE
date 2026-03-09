// Generated from Fingent Boilerplate

import type { Meta, StoryObj } from '@storybook/react';
import { ChartProps } from "./ChartModel";
import { ChartView } from "./ChartView";

export default {
  title: "Chart",
  component: ChartView,
} as Meta;

type Story = StoryObj<ChartProps>;

// export const Basic: Story = {}; // add this line to create another story with same component
export const ChartExample: Story = {
  args: {
     keyValue: "exampleKey",
  },
};

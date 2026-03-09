// Generated from Fingent Boilerplate

import type { Meta, StoryObj } from '@storybook/react';
import { OptionsListProps } from "./OptionsListModel";
import { OptionsListView } from "./OptionsListView";

export default {
  title: "OptionsList",
  component: OptionsListView,
} as Meta;

type Story = StoryObj<OptionsListProps>;

// export const Basic: Story = {}; // add this line to create another story with same component
export const OptionsListExample: Story = {
  args: {
     keyValue: "exampleKey",
  },
};

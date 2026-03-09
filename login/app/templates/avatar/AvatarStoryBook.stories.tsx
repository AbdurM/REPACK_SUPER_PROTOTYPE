// Generated from Fingent Boilerplate

import type { Meta, StoryObj } from '@storybook/react';
import { AvatarProps } from "./AvatarModel";
import { AvatarView } from "./AvatarView";

export default {
  title: "Avatar",
  component: AvatarView,
} as Meta;

type Story = StoryObj<AvatarProps>;

export const AvatarExample: Story = {
  args: {
     keyValue: "exampleKey",
      title: "John Doe",
      color: "#3498db", // Example color
  },
};

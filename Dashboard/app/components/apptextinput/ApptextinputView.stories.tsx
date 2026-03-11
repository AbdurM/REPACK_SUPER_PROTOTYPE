import { Meta, Story, StoryObj } from "@storybook/react";
import { ApptextinputView } from "./ApptextinputView";
import { ApptextinputProps } from "./ApptextinputModel";

export default {
  title: "ApptextInput",
  component: ApptextinputView,
} as Meta;

type Story = StoryObj<ApptextinputProps>;

export const inputBasic: Story = {
  args: {
    title: "Title",
    placeholder: "Entry ",
  },
};

export const inputPlain: Story = {
  args: {
    placeholder: "Entry ",
  },
};

export const inputWithData: Story = {
  args: {
    placeholder: "Entry ",
    value: "Entry",
    iconTouchable: true,
  },
};

export const inputWithError: Story = {
  args: {
    placeholder: "Entry ",
    value: "Entry",
    iconTouchable: true,
    error: true,
    errorMessage: "Please use a valid email address",
  },
};

export const inputPassword: Story = {
  args: {
    placeholder: "Entry ",
    value: "Entry",
    iconTouchable: true,
    secureTextEntry: true,
    icon: 'EYE_FILL'
  },
};

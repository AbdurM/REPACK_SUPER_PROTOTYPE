// Generated from Fingent Boilerplate | 2025-09-09 | diya.juliet

import { DigitInputView } from './DigitInputView';
import { DigitInputProps } from './DigitInputModel';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/DigitInput',
  component: DigitInputView,
} as Meta;
type Story = StoryObj<DigitInputProps>;

export const DigitInput: Story = {
  args: {
    digits: 4,
    focusStyle: 'border',
    onComplete: (code: string) => {
      console.log('OTP Complete:', code);
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ButtonView } from './ButtonView';
import { ICONS } from 'utilities/Images';
import React from 'react';
import { View } from 'react-native';

const meta = {
  title: 'ButtonView',
  component: ButtonView,
  decorators: [
    (Story) => (
      <View style={{padding: 16, alignItems: 'flex-start'}}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ButtonView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonViewExample: Story = {
    args: {
        buttonText: 'Click Me',
        icon: ICONS.EYE,
        // onPress: action('pressed'),
        testID: 'default-button',
      },
};
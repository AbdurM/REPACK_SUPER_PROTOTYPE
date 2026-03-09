import type { Meta, StoryObj } from '@storybook/react';
import { ICONS } from 'utilities/Images';
import React from 'react';
import { View } from 'react-native';
import { SearchInputView } from './SearchInputView';

const meta = {
  title: 'SearchInput',
  component: SearchInputView,
} satisfies Meta<typeof SearchInputView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchInputExample: Story = {
    args: {
        placeholder: 'Search funds by name or ISIN',
        keyValue: 'search-input-1',
      },
};
// Generated from Fingent Boilerplate

import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedHeaderView } from './AnimatedHeaderView';
import { UI } from 'utilities/Helpers';

const meta: Meta<typeof AnimatedHeaderView> = {
  title: 'AnimatedHeader',
  component: AnimatedHeaderView,
  decorators: [
    Story => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AnimatedHeaderView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeader: Story = {
  args: {
    headerHeight: UI.responsiveHeight(8),
    headerContent: 'Animated Header',
    headerContainerStyle: { backgroundColor: 'black' },
    isStatic: false,
    bodyItems: 20 as any,
  },
  render: ({ headerContent, bodyItems, ...args }) => {
    const headerNode = (
      <View style={{ backgroundColor: '#6200ee', padding: 10 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>{headerContent}</Text>
      </View>
    );

    const bodyContent = Array.from({ length: bodyItems }, (_, i) => (
      <View
        key={i}
        style={{
          height: UI.responsiveHeight(10),
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ddd',
        }}
      >
        <Text>Item {i + 1}</Text>
      </View>
    ));

    return (
      <AnimatedHeaderView {...args} headerContent={headerNode}>
        {bodyContent}
      </AnimatedHeaderView>
    );
  },
};

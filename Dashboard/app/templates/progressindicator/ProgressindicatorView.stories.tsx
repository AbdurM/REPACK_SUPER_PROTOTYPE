import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressindicatorView } from './ProgressindicatorView';
import { CustomTextView } from 'components/customtext/CustomTextView';

const meta = {
  title: 'Components/ProgressIndicator',
  component: ProgressindicatorView,
  decorators: [
    (Story) => (
      <View style={{ padding: 20, backgroundColor: '#f5f5f5', minHeight: 150 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    keyValue: {
      control: 'text',
      description: 'Unique key for the progress indicator component',
    },
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Current progress value',
    },
    minimumValue: {
      control: { type: 'number', min: 0, max: 50 },
      description: 'Minimum value of the progress',
    },
    maximumValue: {
      control: { type: 'number', min: 50, max: 200 },
      description: 'Maximum value of the progress',
    },
    trackHeight: {
      control: { type: 'number', min: 10, max: 35 },
      description: 'Height of the progress track (current design uses 18-25px)',
    },
    activeTrackColor: {
      control: 'color',
      description: 'Color of the active progress track',
    },
    inactiveTrackColor: {
      control: 'color',
      description: 'Color of the inactive progress track',
    },
    showStartIndicator: {
      control: 'boolean',
      description: 'Show the start indicator line',
    },
    showProgressIndicator: {
      control: 'boolean',
      description: 'Show the progress indicator line',
    },
    startIndicatorColor: {
      control: 'color',
      description: 'Color of the start indicator',
    },
    progressIndicatorColor: {
      control: 'color',
      description: 'Color of the progress indicator',
    },
  },
} satisfies Meta<typeof ProgressindicatorView>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic Progress Indicator
export const Default: Story = {
  args: {
    keyValue: 'default-progress',
    value: 30,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 18,
    activeTrackColor: '#007AFF',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
  },
};

// Progress with Label Components
export const WithLabels: Story = {
  args: {
    keyValue: 'labeled-progress',
    value: 45,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 18,
    activeTrackColor: '#34C759',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Employer
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 12, color: '#666' }}>
          AED 120,000
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          You
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 12, color: '#666' }}>
          AED 54,000
        </CustomTextView>
      </View>
    ),
  },
};

// Low Progress Value (Testing Overlap Prevention)
export const LowProgress: Story = {
  args: {
    keyValue: 'low-progress',
    value: 5,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 16,
    activeTrackColor: '#FF3B30',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Starting Point
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          Very Long Label Text Here
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Current
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          5%
        </CustomTextView>
      </View>
    ),
  },
};

// High Progress Value (Testing Boundary Protection)
export const HighProgress: Story = {
  args: {
    keyValue: 'high-progress',
    value: 95,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 18,
    activeTrackColor: '#30D158',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Start
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          0%
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Almost Complete
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          95% Done!
        </CustomTextView>
      </View>
    ),
  },
};

// Near Maximum Progress (99% - Testing Edge Styling)
export const NearMaximumProgress: Story = {
  args: {
    keyValue: 'near-max-progress',
    value: 99,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 20,
    activeTrackColor: '#FF9500',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Goal
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          Target
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600', color: '#FF9500' }}>
          So Close!
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          99%
        </CustomTextView>
      </View>
    ),
  },
};

// Financial Progress Example
export const FinancialProgress: Story = {
  args: {
    keyValue: 'financial-progress',
    value: 65,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 20,
    activeTrackColor: '#007AFF',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View style={{ alignItems: 'center' }}>
        <CustomTextView variant="h5" style={{ fontSize: 14, fontWeight: '700', color: '#007AFF' }}>
          Target
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 12, color: '#333' }}>
          $100,000
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          Goal
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View style={{ alignItems: 'center' }}>
        <CustomTextView variant="h5" style={{ fontSize: 14, fontWeight: '700', color: '#30D158' }}>
          Current
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 12, color: '#333' }}>
          $65,000
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          Saved
        </CustomTextView>
      </View>
    ),
  },
};

// Complete Progress (100% - Shows Rounded Right Edge)
export const CompleteProgress: Story = {
  args: {
    keyValue: 'complete-progress',
    value: 100,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 20,
    activeTrackColor: '#30D158',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Start
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          0%
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600', color: '#30D158' }}>
          Complete! 🎉
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          100%
        </CustomTextView>
      </View>
    ),
  },
};

// Minimal Progress (No Indicators)
export const MinimalProgress: Story = {
  args: {
    keyValue: 'minimal-progress',
    value: 40,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 18,
    activeTrackColor: '#FF9500',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: false,
    showProgressIndicator: false,
  },
};

// Custom Range Progress
export const CustomRange: Story = {
  args: {
    keyValue: 'custom-range-progress',
    value: 150,
    minimumValue: 50,
    maximumValue: 200,
    trackHeight: 14,
    activeTrackColor: '#AF52DE',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Minimum
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          50 units
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Current
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          150 units
        </CustomTextView>
      </View>
    ),
  },
};

// Rounded Track Design (Current Implementation)
export const RoundedTrackDesign: Story = {
  args: {
    keyValue: 'rounded-track-progress',
    value: 60,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 22,
    activeTrackColor: '#007AFF',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Employer
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 11, color: '#666' }}>
          AED 120,000
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          You
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 11, color: '#666' }}>
          AED 72,000
        </CustomTextView>
      </View>
    ),
  },
};

// Thick Track Progress
export const ThickTrack: Story = {
  args: {
    keyValue: 'thick-track-progress',
    value: 75,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 25,
    activeTrackColor: '#FF2D92',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View style={{ alignItems: 'flex-start' }}>
        <CustomTextView variant="h5" style={{ fontSize: 16, fontWeight: '800' }}>
          🎯
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          Start
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View style={{ alignItems: 'center' }}>
        <CustomTextView variant="h5" style={{ fontSize: 16, fontWeight: '800' }}>
          🚀
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          75%
        </CustomTextView>
      </View>
    ),
  },
};

// Edge Case: Very Long Labels
export const LongLabels: Story = {
  args: {
    keyValue: 'long-labels-progress',
    value: 25,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 16,
    activeTrackColor: '#32ADE6',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View style={{ maxWidth: 100 }}>
        <CustomTextView variant="h5" style={{ fontSize: 11, fontWeight: '600' }}>
          Very Long Starting Label
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 9, color: '#666' }}>
          With Multiple Lines of Text
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View style={{ maxWidth: 100 }}>
        <CustomTextView variant="h5" style={{ fontSize: 11, fontWeight: '600' }}>
          Long End Label Too
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 9, color: '#666' }}>
          Should Not Overlap
        </CustomTextView>
      </View>
    ),
  },
};

// Interactive Demo (Play with controls!)
export const Interactive: Story = {
  args: {
    keyValue: 'interactive-progress',
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    trackHeight: 20,
    activeTrackColor: '#007AFF',
    inactiveTrackColor: '#E5E5EA',
    showStartIndicator: true,
    showProgressIndicator: true,
    startLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Start Point
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          Baseline
        </CustomTextView>
      </View>
    ),
    endLabelComponent: (
      <View>
        <CustomTextView variant="h5" style={{ fontSize: 12, fontWeight: '600' }}>
          Current Position
        </CustomTextView>
        <CustomTextView variant="h5" style={{ fontSize: 10, color: '#666' }}>
          Adjustable
        </CustomTextView>
      </View>
    ),
  },
};

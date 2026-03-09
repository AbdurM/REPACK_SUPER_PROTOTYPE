// generated from template

import React from 'react';
import { View } from 'react-native';
import { SelectOptionView } from './SelectOptionView';
import { SelectOptionItem } from './SelectOptionModel';

const sampleOptions: SelectOptionItem[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Long Option Text That Might Overflow', value: '4' },
];

export default {
  title: 'Components/SelectOption',
  component: SelectOptionView,
};

export const Default = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5' }}>
    <SelectOptionView
      placeholder="Select an option"
      options={sampleOptions}
      onPress={() => console.log('Select pressed')}
    />
  </View>
);

export const WithSelectedValue = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5' }}>
    <SelectOptionView
      placeholder="Select an option"
      options={sampleOptions}
      value="2"
      onPress={() => console.log('Select pressed')}
    />
  </View>
);

export const Disabled = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5' }}>
    <SelectOptionView
      placeholder="Select an option"
      options={sampleOptions}
      disabled
      onPress={() => console.log('Select pressed')}
    />
  </View>
);

export const WithoutChevron = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5' }}>
    <SelectOptionView
      placeholder="Select an option"
      options={sampleOptions}
      showChevron={false}
      onPress={() => console.log('Select pressed')}
    />
  </View>
);

export const DifferentVariants = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5', gap: 10 }}>
    <SelectOptionView
      placeholder="Body Medium 1"
      options={sampleOptions}
      variant="body_m_n1"
      onPress={() => console.log('Select pressed')}
    />
    <SelectOptionView
      placeholder="Body Medium 2"
      options={sampleOptions}
      variant="body_m_n2"
      onPress={() => console.log('Select pressed')}
    />
    <SelectOptionView
      placeholder="Body Small 1"
      options={sampleOptions}
      variant="body_s_n1"
      onPress={() => console.log('Select pressed')}
    />
  </View>
);

export const DynamicWidth = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5', gap: 10 }}>
    <SelectOptionView
      placeholder="Short"
      options={sampleOptions}
      dynamicWidth
      onPress={() => console.log('Select pressed')}
    />
    <SelectOptionView
      placeholder="Medium length text"
      options={sampleOptions}
      dynamicWidth
      onPress={() => console.log('Select pressed')}
    />
    <SelectOptionView
      placeholder="This is a very long placeholder text"
      options={sampleOptions}
      dynamicWidth
      onPress={() => console.log('Select pressed')}
    />
  </View>
);

export const DynamicWidthWithConstraints = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5', gap: 10 }}>
    <SelectOptionView
      placeholder="Min width 150"
      options={sampleOptions}
      dynamicWidth
      minWidth={150}
      onPress={() => console.log('Select pressed')}
    />
    <SelectOptionView
      placeholder="Max width 200 - this text should be clipped"
      options={sampleOptions}
      dynamicWidth
      maxWidth={200}
      onPress={() => console.log('Select pressed')}
    />
    <SelectOptionView
      placeholder="Min 100, Max 250"
      options={sampleOptions}
      dynamicWidth
      minWidth={100}
      maxWidth={250}
      onPress={() => console.log('Select pressed')}
    />
  </View>
);

export const DynamicWidthComparison = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5', gap: 10 }}>
    <View style={{ marginBottom: 10 }}>
      <SelectOptionView
        placeholder="Fixed width (default)"
        options={sampleOptions}
        onPress={() => console.log('Select pressed')}
      />
    </View>
    <View>
      <SelectOptionView
        placeholder="Dynamic width"
        options={sampleOptions}
        dynamicWidth
        onPress={() => console.log('Select pressed')}
      />
    </View>
  </View>
);

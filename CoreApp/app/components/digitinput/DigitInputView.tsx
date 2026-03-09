// Generated from Fingent Boilerplate | 2025-09-09 | diya.juliet

import React from 'react';
import { View, TextInput } from 'react-native';
import useDigitInputViewModel from './DigitInputViewModel';
import { DigitInputStyles } from './DigitInputStyle';
import { DigitInputProps, defaultProps } from './DigitInputModel';
import { CustomTextStyles } from 'components/customtext/CustomTextStyle';

export function DigitInputView(
  props: Readonly<DigitInputProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { digits, focusStyle, variant, textColor } = mergedProps;
  const {
    keyValue,
    values,
    handleChange,
    handleKeyPress,
    handleFocus,
    handleInputClick,
    inputsRef,
    focusedIndex,
  } = useDigitInputViewModel(mergedProps);

  return (
    <View
      key={keyValue}
      style={DigitInputStyles.container}
      onTouchStart={handleInputClick}
    >
      {Array.from({ length: digits! }).map((_, index) => (
        <TextInput
          key={index}
          ref={ref => {
            inputsRef.current[index] = ref;
          }}
          // maxLength={1}
          value={values[index]}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          onFocus={() => handleFocus(index)}
          onTouchStart={e => {
            // Prevent the default touch behavior and use our custom handler
            e.stopPropagation();
            handleInputClick();
          }}
          keyboardType="number-pad"
          caretHidden={focusStyle === 'border'}
          pointerEvents={focusedIndex === index ? 'auto' : 'none'}
          style={[
            DigitInputStyles.box,
            CustomTextStyles.defaultStyle,
            CustomTextStyles[variant as keyof typeof CustomTextStyles],
            textColor && { color: textColor },
            focusStyle === 'border' && focusedIndex === index
              ? DigitInputStyles.borderFocus
              : null,
          ]}
        />
      ))}
    </View>
  );
}

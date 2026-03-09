// Generated from Fingent Boilerplate | 2025-09-09 | diya.juliet

import { useState, useEffect, useRef } from 'react';
import {
  DigitInputProps,
  DigitInputViewModel,
} from './DigitInputModel';

export default function useDigitInputViewModel(
  props: DigitInputProps,
): DigitInputViewModel {
  const { keyValue, digits, onComplete } = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [values, setValues] = useState<string[]>(Array(digits!).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const inputsRef = useRef<(any | null)[]>([]);

  useEffect(() => {
    setLoading(false);
    // No initial focus - user needs to click to start
  }, []);

  const handleChange = (text: string, index: number) => {
    // Only process changes for the currently focused input
    if (index !== focusedIndex) {
      return;
    }

    const newValues = [...values];

    if (text === '') {
      // Handle backspace - clear current digit
      newValues[index] = '';
    } else {
      // Take only the last character to ensure single digit
      // This handles both single character input and multiple character paste
      const lastChar = text.slice(-1);

      // Only accept numeric characters
      if (/^\d$/.test(lastChar)) {
        newValues[index] = lastChar;
      } else {
        // If not a digit, don't change the value
        return;
      }
    }

    setValues(newValues);

    // Move to next input only if we added a digit and there's a next input
    if (text && index < digits! - 1) {
      inputsRef.current[index + 1]?.focus();
      setFocusedIndex(index + 1);
    }

    if (newValues.every(v => v !== '')) {
      onComplete?.(newValues.join(''));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Only process keypress for the currently focused input
    if (index !== focusedIndex) {
      return;
    }

    if (e.nativeEvent.key === 'Backspace') {
      if (values[index] === '' && index > 0) {
        // If current field is empty, move to previous field
        inputsRef.current[index - 1]?.focus();
        setFocusedIndex(index - 1);
      }
      // If current field has content, the handleChange will clear it
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleInputClick = () => {
    // When any input is clicked, focus the first empty input only if there are empty inputs
    const firstEmptyIndex = values.findIndex(value => value === '');
    if (firstEmptyIndex !== -1) {
      // Only focus if there are empty inputs
      inputsRef.current[firstEmptyIndex]?.focus();
      setFocusedIndex(firstEmptyIndex);
    }
    // If all inputs are filled, do nothing (don't focus anything)
  };

  return {
    loading,
    setLoading,
    keyValue: keyValue ?? '',
    values,
    setValues,
    handleChange,
    handleKeyPress,
    handleFocus,
    handleInputClick,
    inputsRef,
    focusedIndex,
  };
}

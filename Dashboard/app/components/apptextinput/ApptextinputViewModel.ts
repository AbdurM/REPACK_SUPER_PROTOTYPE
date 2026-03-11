// Generated from Fingent Boilerplate

import { useState, useEffect } from 'react';
import {
  ApptextinputProps,
  ApptextinputViewModel,
  defaultProps,
} from './ApptextinputModel';

export default function useApptextinputViewModel(
  props: ApptextinputProps,
): ApptextinputViewModel {
  const mergedProps = { ...defaultProps, ...props };
  const [localValue, setLocalValue] = useState(props.value || '');

  // Sync local state with props.value when it changes externally
  useEffect(() => {
    setLocalValue(props.value || '');
  }, [props.value]);

  const onChangeTextCallback = (text: string) => {
    setLocalValue(text);
    props?.onChangeText && props?.onChangeText(text);
  };

  const onIconTouch = () => {
    // If user provided onIconTouch, use it
    if (props?.onIconTouch) {
      props.onIconTouch();
    } else if (localValue) {
      // Default clear functionality - clear the text input
      setLocalValue('');
      props?.onChangeText && props.onChangeText('');
    }
  };

  return { onChangeTextCallback, onIconTouch, ...mergedProps, value: localValue };
}

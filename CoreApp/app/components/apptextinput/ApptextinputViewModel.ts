// Generated from Fingent Boilerplate

// import { useState } from 'react';
import { ApptextinputProps, ApptextinputViewModel, defaultProps } from './ApptextinputModel';

export default function useApptextinputViewModel(props: ApptextinputProps): ApptextinputViewModel {
    const mergedProps = { ...defaultProps, ...props };

  const onChangeText = (event: any) => {
    props?.onChangeText && props?.onChangeText(event.nativeEvent.text);
  };

  const onIconTouch = () => {
    // If user provided onIconTouch, use it
    if (props?.onIconTouch) {
      props.onIconTouch();
    } else if (mergedProps.value) {
      // Default clear functionality - clear the text input
      props?.onChangeText && props.onChangeText('');
    }
  }

  return { onChangeText, onIconTouch, ...mergedProps };
}

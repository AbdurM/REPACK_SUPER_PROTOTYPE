// Generated from Fingent Boilerplate

import { useState, useEffect } from 'react';
import { AvatarViewModel, AvatarProps } from './AvatarModel';

export default function useAvatarViewModel(
  props: AvatarProps,
): AvatarViewModel {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  useEffect(() => {
    if (props?.title) {
      const [first, ...rest] = props.title.split(' ');
      setFirstName(first);
      setLastName(rest.join(' '));
    }
  }, [props.title]);

  return { firstName, lastName };
}

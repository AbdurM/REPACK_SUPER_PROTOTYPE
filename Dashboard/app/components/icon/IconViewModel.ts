
// generated from template

import { IconProps, IconViewModel, defaultProps } from './IconModel';

export default function useIconViewModel(props: IconProps): IconViewModel {
  const mergedProps = { ...defaultProps, ...props };

  const handlePress = () => {
    props?.onPress && props.onPress();
  };

  const handleLongPress = () => {
    props?.onLongPress && props.onLongPress();
  };

  return { 
    ...mergedProps,
    handlePress, 
    handleLongPress 
  };
}

// generated from template

import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

interface AsyncImageViewModel {
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  onLoad: () => void;
  loader: boolean;
}

interface AsyncImageViewProps {
  keyValue: string;
  style: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
  source: ImageSourcePropType;
  top?: number;
}

// Default props
const defaultProps: AsyncImageViewProps = {
  keyValue: '',
  style: {},
  resizeMode: 'contain',
  source: { uri: '' },
  top: 0,
};

export type { AsyncImageViewProps, AsyncImageViewModel };
export { defaultProps };

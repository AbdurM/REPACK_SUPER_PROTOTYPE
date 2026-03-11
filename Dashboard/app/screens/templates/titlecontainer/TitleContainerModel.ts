// Generated from Fingent Boilerplate

interface TitleContainerViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TitleContainerProps {
  testID?: string;
  keyValue?: string;
  title?: string;
  onSeeAllPress?: () => void;
  hideChevronIcon?: boolean;
  children?: React.ReactNode;
  scrollable?: boolean;
  scrollDirection?: 'vertical' | 'horizontal';
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  [key: string]: any;
}

// Default props
const defaultProps: TitleContainerProps = {
  keyValue: 'TitleContainer',
  title: '',
  onSeeAllPress: () => {},
  hideChevronIcon: false,
  scrollable: false,
  scrollDirection: 'vertical',
  showsVerticalScrollIndicator: true,
  showsHorizontalScrollIndicator: true,
};

export type { TitleContainerProps, TitleContainerViewModel };
export { defaultProps };
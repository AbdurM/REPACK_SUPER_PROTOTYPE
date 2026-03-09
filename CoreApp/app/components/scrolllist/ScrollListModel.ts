// generated from template

interface ScrollListViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ScrollListViewProps {
  keyValue: string;
  data: any[];
  style?: any;
  testID: string;
  refreshing?: boolean;
  isLoadingMore?: boolean;
  onEndReached?: () => void;
  handleRefresh?: () => void;
  contentContainerStyle?: any;
  onRefresh?: () => Promise<void>;
  scrollEventThrottle?: number | undefined;
  keyExtractor: (item: any, index: number) => string;
  renderItem: ({ item, index }: { item: any; index: number }) => React.ReactNode;
}

// Default props
const defaultProps: ScrollListViewProps = {
  keyValue: "",
  data: [],
  style: {},
  testID: "",
  refreshing: false,
  isLoadingMore: false,
  contentContainerStyle: {},
  scrollEventThrottle: 16,
  keyExtractor: (item: any, index: number) => `${item?.id || index}`,
  renderItem: () => null,
};

export type { ScrollListViewProps, ScrollListViewModel };
export { defaultProps };
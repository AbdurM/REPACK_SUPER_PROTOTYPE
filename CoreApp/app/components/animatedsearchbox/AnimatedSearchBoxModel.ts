// Generated from Fingent Boilerplate

interface AnimatedSearchBoxViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchExpanded: boolean;
  searchText: string;
  searchWidthAnim: any;
  toggleSearch: () => void;
  handleSearchTextChange: (text: string) => void;
}

interface AnimatedSearchBoxProps {
  keyValue?: string;
  placeholder?: string;
  onSearchTextChange?: (text: string) => void;
  containerStyle?: any;
  searchBoxStyle?: any;
  textInputStyle?: any;
  iconTintColor?: string;
  iconSize?: number;
  animationDuration?: number;
}

// Default props
const defaultProps: AnimatedSearchBoxProps = {
  keyValue: "AnimatedSearchBox",
  placeholder: "Search...",
  onSearchTextChange: () => {},
  animationDuration: 300,
};

export type { AnimatedSearchBoxProps, AnimatedSearchBoxViewModel };
export { defaultProps };

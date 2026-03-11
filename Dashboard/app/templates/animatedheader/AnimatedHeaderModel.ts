// generated from template

import { ReactNode } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/tenants/aus/Theme.aus';

interface AnimatedHeaderViewModel {
  contentContainerStyle: StyleProp<ViewStyle>;
  scrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  headerStyle: StyleProp<ViewStyle>;
  setMeasuredHeight: React.Dispatch<React.SetStateAction<number>>;
  measuredHeight: number;
  handleLayout: (e: any) => void;
  refreshing: boolean;
  handleRefresh: () => void;
}

interface AnimatedHeaderProps {
  children: ReactNode;
  headerHeight?: number;
  headerContent: ReactNode;
  isStatic?: boolean;
  hideHeaderOnScroll?: boolean;
  headerContainerStyle?: StyleProp<ViewStyle>;
  outerContainerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  enablePullToRefresh?: boolean;
  onRefresh?: (hash: string) => void;
  refreshLoaderTintColor?: string;
}

// Default props
const defaultProps: AnimatedHeaderProps = {
  headerHeight: UI.responsiveHeight(6),
  isStatic: false,
  hideHeaderOnScroll: false,
  headerContent: null,
  children: null,
  headerContainerStyle: null,
  outerContainerStyle: null,
  backgroundColor: Theme.Colors.primary3,
  enablePullToRefresh: false,
  onRefresh: undefined,
  refreshLoaderTintColor: Theme.Colors.neutral10,
};

export type { AnimatedHeaderProps, AnimatedHeaderViewModel };
export { defaultProps };

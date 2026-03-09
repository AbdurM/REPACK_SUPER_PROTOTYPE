// generated from template

import React from 'react';
import {KeyboardType, StyleProp, TextStyle, ViewStyle} from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

interface BottomSheetRef {
  expand: () => void;
  collapse: () => void;
}

interface BottomSheetViewModel {
  bottomSheetRef: React.RefObject<BottomSheetModal | null>;
  closeHandler: () => void;
  largeSnap: number[];
  mediumSnap: string[];
  smallSnap: string[];
  dynamicSnap: string[];
  snapIndex: number;
  backHandler: () => void;
  _close: () => void;
  gesture: any;
  getSnapPoints: () => string[] | number[];
  renderBackdropProps: {
    disappearsOnIndex: number;
    pressBehavior: 'close' | 'none';
    opacity: number;
  };
  headerStyles: {
    iconWrap: any[];
    iconPressBack: any;
    iconPressClose: any;
    iconStyle: any;
    handleWrapper: any;
    handle: any;
  };
  mergedProps: BottomSheetViewProps;
}

type Size = 'small' | 'medium' | 'large' | 'dynamic';
type Format = 'compose' | 'static';

interface BottomSheetViewProps {
  keyValue?: string;
  format?: Format;
  size?: Size;
  portalName?: string;
  enablePanDownToClose?: boolean;
  enableContentPanningGesture?: boolean;
  onClose?: () => void;
  onBack?: () => void;
  back?: boolean;
  close?: boolean;
  backDrop?: boolean;
}

interface BottomSheetViewViewModelProps {
  ref: any;
  onClose?: () => void;
  onBack?: () => void;
}

interface SheetProps extends React.PropsWithChildren {
  style?: ViewStyle; // Optional style prop for additional customization
  contentContainerStyle?: ViewStyle;
}

interface SheetInputProps {
  style?: StyleProp<TextStyle>;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  cursorColor: string;
  disabled?: boolean;
  textColor?: string;
  keyboardType?: KeyboardType
}

interface BottomSheetCloseProps {
  dismissBottomSheet: () => void;
  dismissAllBottomSheet: () => void;
}

// Default props
const defaultProps: BottomSheetViewProps = {
  keyValue: "BottomSheetView",
  format: 'static',
  size: 'large',
  portalName: "",
  enablePanDownToClose: false,
  enableContentPanningGesture: true,
  back: false,
  close: false,
  backDrop: true,
};

export type {
  BottomSheetViewProps,
  BottomSheetViewModel,
  BottomSheetViewViewModelProps,
  BottomSheetRef,
  SheetProps,
  BottomSheetCloseProps,
  SheetInputProps,
};
export { defaultProps };

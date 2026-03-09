// generated from template

import {
  useState,
  useRef,
  useImperativeHandle,
  useMemo,
  useCallback,
  useContext,
} from 'react';
import {
  BottomSheetCloseProps,
  BottomSheetViewModel,
  BottomSheetViewViewModelProps,
  BottomSheetViewProps,
  defaultProps,
} from './BottomSheetModel';
import {Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { GestureContext } from 'context/GestureContext';
import { BottomSheetStyles } from './BottomSheetStyle';

export default function useBottomSheetViewModel(
  viewModelProps: BottomSheetViewViewModelProps,
  props: BottomSheetViewProps
): BottomSheetViewModel {
  const mergedProps = { ...defaultProps, ...props };
  const { ref } = viewModelProps;
  const {height} = Dimensions.get('screen');
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const largeSnap = useMemo(() => [height - insets.top], [height, insets.top]);
  const mediumSnap = useMemo(() => ['70%'], []);
  const smallSnap = useMemo(() => ['30%'], []);
  const dynamicSnap = useMemo(() => [], []);
  const {gesture} = useContext(GestureContext);

  const [snapIndex] = useState(0);

  const _open = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const _close = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  const closeHandler = () => {
    if (mergedProps.onClose) {
      mergedProps.onClose();
    }
  };

  const backHandler = () => {
    if (mergedProps.onBack) {
      mergedProps.onBack();
    }
  };

  const renderBackdropProps = useMemo(() => ({
    disappearsOnIndex: -1,
    pressBehavior: mergedProps.enablePanDownToClose ? 'close' : 'none' as 'close' | 'none',
    opacity: 1,
  }), [mergedProps.enablePanDownToClose]);

  const headerStyles = useMemo(() => ({
    iconWrap: [
      BottomSheetStyles.iconWrap,
      mergedProps.back && mergedProps.close && BottomSheetStyles.iconWrapOne,
      !mergedProps.back && !mergedProps.close && BottomSheetStyles.iconWrapTwo,
    ],
    iconPressBack: BottomSheetStyles.iconPressBack,
    iconPressClose: BottomSheetStyles.iconPressClose,
    iconStyle: BottomSheetStyles.iconStyle,
    handleWrapper: BottomSheetStyles.handleWrapper,
    handle: BottomSheetStyles.handle,
  }), [mergedProps.back, mergedProps.close]);

  const getSnapPoints = useCallback(() => {
    switch (mergedProps.size) {
      case 'dynamic':
        return dynamicSnap;
      case 'small':
        return smallSnap;
      case 'medium':
        return mediumSnap;
      case 'large':
        return largeSnap;
      default:
        return largeSnap;
    }
  }, [mergedProps.size, dynamicSnap, smallSnap, mediumSnap, largeSnap]);

  //To handle open/close function
  useImperativeHandle(ref, () => ({
    expand: () => {
      _open();
    },
    collapse: () => {
      _close();
    },
  }));

  return {
    bottomSheetRef,
    closeHandler,
    largeSnap,
    mediumSnap,
    smallSnap,
    dynamicSnap,
    snapIndex,
    backHandler,
    _close,
    gesture,
    getSnapPoints,
    renderBackdropProps,
    headerStyles,
    mergedProps,
  };
}

export const useBottomSheet = (): BottomSheetCloseProps => {
  const { dismiss, dismissAll } = useBottomSheetModal();

  return {
    dismissBottomSheet: dismiss,
    dismissAllBottomSheet: dismissAll,
  };
};

import React, { forwardRef, useCallback } from 'react';
import { View } from 'react-native';
import { BottomSheetStyles } from './BottomSheetStyle';
import useBottomSheetViewModel from './BottomSheetViewModel';
import {
  BottomSheetRef,
  BottomSheetViewProps,
  SheetInputProps,
  SheetProps,
  defaultProps,
} from './BottomSheetModel';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView as BottomSheetViewNew,
} from '@gorhom/bottom-sheet';
import { GestureDetector } from 'react-native-gesture-handler';
import { GlobalStyles } from 'utilities/Style';
import { IconView } from 'components/icon/IconView';

export const SheetTextInput: React.FC<SheetInputProps> = ({
  style,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  cursorColor,
  disabled,
  textColor,
  keyboardType,
}) => {
  return (
    <BottomSheetTextInput
      style={[{ color: textColor }, style]}
      value={value}
      onChangeText={onChangeText ? text => onChangeText(text) : undefined}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      cursorColor={cursorColor}
      editable={!disabled}
      autoComplete="off"
      autoCorrect={false}
      keyboardType={keyboardType}
    />
  );
};

export const SheetScroll: React.FC<SheetProps> = ({
  children,
  style,
  contentContainerStyle,
}) => {
  return (
    <BottomSheetScrollView
      contentContainerStyle={[contentContainerStyle]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      bounces={false}
      style={[style]}
    >
      {children}
    </BottomSheetScrollView>
  );
};

export const SheetView: React.FC<SheetProps> = ({ children, style }) => {
  return <BottomSheetViewNew style={[style]}>{children}</BottomSheetViewNew>;
};

export const BottomSheetView = forwardRef<
  BottomSheetRef,
  React.PropsWithChildren<BottomSheetViewProps>
>((props, ref) => {
  const mergedProps = { ...defaultProps, ...props };
  const {
    bottomSheetRef,
    snapIndex,
    closeHandler,
    gesture,
    getSnapPoints,
    renderBackdropProps,
    headerStyles,
    backHandler,
    _close,
  } = useBottomSheetViewModel(
    { ref, onClose: mergedProps.onClose, onBack: mergedProps.onBack },
    mergedProps,
  );

  const renderBackdrop = useCallback(
    (backdropProps: any) => (
      <BottomSheetBackdrop {...backdropProps} {...renderBackdropProps} />
    ),
    [renderBackdropProps],
  );

  const handleBar = useCallback(() => {
    return (
      <View style={headerStyles.handleWrapper}>
        <View style={headerStyles.handle} />
      </View>
    );
  }, [headerStyles.handleWrapper, headerStyles.handle]);

  const getTopHeader = useCallback(() => {
    return (
      <View style={headerStyles.iconWrap}>
        {mergedProps.back && (
          // <Pressable
          //   style={headerStyles.iconPressBack}
          //   onPress={() => backHandler()}
          // >
            <IconView source="BACK" style={[headerStyles.iconStyle]} touchable={true} onPress={() => backHandler()} />
          // </Pressable>
        )}
        {mergedProps.close && (
          // <Pressable
          //   style={headerStyles.iconPressClose}
          //   onPress={() => _close()}
          // >
            <IconView source="CLOSE" style={[headerStyles.iconStyle]} touchable={true} onPress={() => _close()}  />
          // </Pressable>
        )}
      </View>
    );
  }, [headerStyles, mergedProps.back, mergedProps.close, backHandler, _close]);

  return (
    <BottomSheetModal
      name={mergedProps.portalName}
      index={snapIndex}
      stackBehavior="push"
      backdropComponent={mergedProps.backDrop ? renderBackdrop : undefined}
      backgroundStyle={BottomSheetStyles.bottomSheetBackground}
      style={BottomSheetStyles.sheet}
      onDismiss={closeHandler}
      ref={bottomSheetRef}
      accessible={false}
      enableDynamicSizing={mergedProps.size === 'dynamic'}
      snapPoints={getSnapPoints()}
      enablePanDownToClose={mergedProps.enablePanDownToClose}
      enableContentPanningGesture={mergedProps.enableContentPanningGesture}
      handleComponent={mergedProps.enablePanDownToClose ? handleBar : null}
    >
      <GestureDetector gesture={gesture}>
        <View style={GlobalStyles.flex}>
          {getTopHeader()}

          {mergedProps.format === 'static' ? (
            <BottomSheetViewNew style={BottomSheetStyles.sheetContentView}>
              {props.children}
            </BottomSheetViewNew>
          ) : (
            props.children
          )}
        </View>
      </GestureDetector>
    </BottomSheetModal>
  );
});

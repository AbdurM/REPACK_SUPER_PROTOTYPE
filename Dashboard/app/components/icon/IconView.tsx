// generated from template

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ICONS } from 'utilities/Images';
import useIconViewModel from './IconViewModel';
import { IconProps } from './IconModel';

export function IconView(props: Readonly<IconProps>): React.JSX.Element {
  const { 
    source,
    style,
    tintColor,
    resizeMode,
    width,
    height,
    touchable,
    disabled,
    activeOpacity,
    touchableStyle,
    hitSlop,
    handlePress,
    handleLongPress,
    keyValue,
    touchableBackgroundColor,
    testID
  } = useIconViewModel(props);

  const imageComponent = (
    <Image
      source={ICONS[source]}
      resizeMode={resizeMode}
      style={[{ width, height }, style]}
      tintColor={tintColor}
    />
  );

  return (
    <React.Fragment key={keyValue}>
      {touchable ? (
        <TouchableOpacity
          testID={testID}
          onPress={handlePress}
          onLongPress={handleLongPress}
          disabled={disabled}
          activeOpacity={activeOpacity}
          style={[touchableStyle, { backgroundColor: touchableBackgroundColor }]}
          hitSlop={hitSlop}
        >
          {imageComponent}
        </TouchableOpacity>
      ) : imageComponent}
    </React.Fragment>
  );
}
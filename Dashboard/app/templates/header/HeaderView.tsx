// Generated from Fingent Boilerplate

import React from 'react';
import { View } from 'react-native';
import { HeaderProps, defaultProps } from './HeaderModel';
import { HeaderStyles } from './HeaderStyle';
import useHeaderViewModel from './HeaderViewModel';
import { IconView } from 'components/icon/IconView';
import { ElementKey } from 'utilities/ElementKey';

export function HeaderView(
  props: Readonly<HeaderProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { onProfilePress, onBackPress, onQuestionIconPress } = useHeaderViewModel(mergedProps);

  return (
    <View
      key={mergedProps.keyValue}
      style={[HeaderStyles.container, mergedProps.style]}
    >
      {/* Left side - Back button */}
      <View style={HeaderStyles.leftContainer}>
        {mergedProps.showBackButton && (
          <IconView
            testID={ElementKey.animatedheader_back}
            key={mergedProps.keyValue}
            source="BACK"
            style={HeaderStyles.backIcon}
            tintColor={mergedProps.leftIconTintColor}
            touchable={true}
            onPress={onBackPress}
            activeOpacity={0.7}
          />
        )}
      </View>

      {/* Right side - Question icon and Profile button */}
      <View style={HeaderStyles.rightContainer}>
        {mergedProps.showQuestionIcon && (
          <IconView
            source="QUESTION"
            style={HeaderStyles.questionIcon}
            tintColor={mergedProps.rightIconTintColor}
            touchable={true}
            onPress={onQuestionIconPress}
            activeOpacity={0.7}
          />
        )}
        {mergedProps.showRightIcon && (
          <IconView
            testID={ElementKey.animatedheader_profile}
            source="USER_LINE"
            style={HeaderStyles.icon}
            tintColor={mergedProps.rightIconTintColor}
            touchable={true}
            onPress={onProfilePress}
            activeOpacity={0.7}
          />
        )}
      </View>
    </View>
  );
}
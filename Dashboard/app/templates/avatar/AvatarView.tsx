// Generated from Fingent Boilerplate

import React from 'react';
import { View } from 'react-native';
import { AvatarProps, defaultProps } from './AvatarModel';
import { AvatarStyles } from './AvatarStyle';
import useAvatarViewModel from './AvatarViewModel';
import CustomTextView from 'components/customtext/CustomTextView';
import { Strings, Theme } from 'utilities/TenantIndex';

export function AvatarView(props: Readonly<AvatarProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { firstName, lastName } = useAvatarViewModel(mergedProps);

  return (
    <View id={'Avatar'} style={AvatarStyles.container}>
      <View
        style={[
          AvatarStyles.avatarView,
          { backgroundColor: mergedProps?.color },
        ]}
      >
        <CustomTextView variant='h1' color={Theme.Colors.neutral2}>
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </CustomTextView>
      </View>

      <View style={AvatarStyles.textContainer}>
        <CustomTextView variant='h3' color={Theme.Colors.neutral5}>
          {Strings.common.hi} {firstName}
        </CustomTextView>
        <CustomTextView variant='body_l_n1' color={Theme.Colors.neutral1}>
          {firstName} {lastName}
        </CustomTextView>
      </View>
    </View>
  );
}

// Generated from Fingent Boilerplate

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ListItemProps, defaultProps } from './ListItemModel';
import { ListItemStyles } from './ListItemStyle';
import { IconView } from 'components/icon/IconView';
import CustomTextView from 'components/customtext/CustomTextView';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export function ListItemView(
  props: Readonly<ListItemProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };

  return (
    <TouchableOpacity disabled={mergedProps.disabled} onPress={mergedProps.onPress} key={mergedProps.keyValue} style={ListItemStyles.container}>
      <View style={ListItemStyles.leftContainer}>
        {mergedProps.leftIcon && (
          <IconView
            source={mergedProps.leftIcon}
            width={UI.responsiveWidth(8)}
            height={UI.responsiveWidth(8)}
            tintColor={Theme.Colors.neutral4}
          />
        )}
        <View style={ListItemStyles.textContainer}>
          <CustomTextView
            variant="body_m_n2"
            color={Theme.Colors.neutral2}
            style={ListItemStyles.typeText}
          >
            {mergedProps?.type}
          </CustomTextView>
          {!!mergedProps?.date && mergedProps?.date !== '' && (
            <CustomTextView variant="body_s_n1" color={Theme.Colors.neutral1}>
              {mergedProps?.date}
            </CustomTextView>
          )}
        </View>
      </View>
      <View style={ListItemStyles.rightContainer}>
        {!mergedProps.rightIcon && (
          <CustomTextView variant="body_l_n2" color={Theme.Colors.neutral3}>
            {mergedProps?.currency} {mergedProps?.amount}
          </CustomTextView>
        )}
        {mergedProps.rightIcon && (
            <IconView
              source={mergedProps.rightIcon}
              width={UI.responsiveWidth(6)}
              height={UI.responsiveWidth(6)}
              tintColor={Theme.Colors.primary1}
              touchable = {true}
              onPress={mergedProps.onRightIconPress}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
// Generated from Fingent Boilerplate

import React from 'react';
import { View, Pressable } from 'react-native';
import { BottomTabButtonProps, defaultProps } from './BottomTabButtonModel';
import { BottomTabButtonStyles } from './BottomTabButtonStyle';
import useBottomTabButtonViewModel from './BottomTabButtonViewModel';
import { IconView } from '../icon/IconView';
import { CustomTextView } from '../customtext/CustomTextView';
import { Theme } from '../../utilities/TenantIndex';
import { ElementKey } from 'utilities/ElementKey';

export function BottomTabButtonView(
  props: Readonly<BottomTabButtonProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { tabName, getIconDetails } = useBottomTabButtonViewModel(mergedProps);

  const { style } = mergedProps;
  const focused = mergedProps['aria-selected']; // use this instead of accessibilityState.selected is undefined

  const tabBar = (): React.JSX.Element | null => {
    const iconDetails = getIconDetails();
    if (iconDetails?.iconName) {
      return (
        <View style={BottomTabButtonStyles.tabIconView}>
          <IconView
            width={iconDetails.width}
            height={iconDetails.height}
            resizeMode="contain"
            source={iconDetails.iconName}
            style={BottomTabButtonStyles.tabIcon}
            tintColor={
              focused ? '#0660D4' : "#65778B"
            }
          />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <Pressable
      {...mergedProps}
      testID={ElementKey.bottomtab_tab_button + `_${tabName()}`}
      style={[style, BottomTabButtonStyles.tabButton]}
    >
      <View style={BottomTabButtonStyles.tabContainer}>
        {tabBar()}
        <CustomTextView
          color={focused ? '#0660D4' : "#65778B"}
          style={BottomTabButtonStyles.tabText}
          //   focused
          //     ? BottomTabButtonStyles.selectedText
          //     : BottomTabButtonStyles.unSelectedText
          // }
          numberOfLines={1}
          ellipsizeMode="clip"
        >
          {tabName()}
        </CustomTextView>
      </View>
    </Pressable>
  );
}

// Generated from Fingent Boilerplate

import React from 'react';
import { View, ScrollView } from 'react-native';
import { TitleContainerProps, defaultProps } from './TitleContainerModel';
import { TitleContainerStyles } from './TitleContainerStyle';
import CustomTextView from 'components/customtext/CustomTextView';
import { IconView } from 'components/icon/IconView';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export function TitleContainerView(
  props: Readonly<TitleContainerProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };

  const renderChildren = () => {
    if (mergedProps.scrollable) {
      return (
        <ScrollView
          horizontal={mergedProps.scrollDirection === 'horizontal'}
          showsVerticalScrollIndicator={mergedProps.showsVerticalScrollIndicator}
          showsHorizontalScrollIndicator={mergedProps.showsHorizontalScrollIndicator}
          contentContainerStyle={
            mergedProps.scrollDirection === 'horizontal' 
              ? TitleContainerStyles.horizontalScrollContent 
              : TitleContainerStyles.verticalScrollContent
          }
        >
          {mergedProps.children}
        </ScrollView>
      );
    }
    return mergedProps.children;
  };

  return (
    <View key={mergedProps.keyValue} style={TitleContainerStyles.container}>
      <View style={TitleContainerStyles.titleStyle}>
        <CustomTextView variant='h7' color={Theme.Colors.neutral3} >
          {mergedProps.title || ''}
        </CustomTextView>
        {!mergedProps.hideChevronIcon && (
          <IconView
            testID={mergedProps.testID}
            source="CHEVRON_RIGHT"
            // style={{borderWidth:2}}
            width={UI.responsiveWidth(8)}
            height={UI.responsiveWidth(8)}
            tintColor={Theme.Colors.neutral3}
            touchable={true}
            // touchableStyle={{borderWidth:1}}
            onPress={mergedProps.onSeeAllPress}
          />
        )}
      </View>
      {renderChildren()}
    </View>
  );
}

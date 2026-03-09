// generated from template

import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {DetailsPanelStyles} from './DetailsPanelStyle';
import {DetailsPanelViewProps, defaultProps} from './DetailsPanelModel';
import {CustomTextView} from '../../components/customtext/CustomTextView';
import {Theme} from '../../utilities/TenantIndex';
import {IconView} from '../../components/icon/IconView';

export function DetailsPanelView(props: Readonly<DetailsPanelViewProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <View style={[DetailsPanelStyles.containerWrapper, mergedProps.style]}>
      <TouchableOpacity
        testID={mergedProps.testId}
        disabled={mergedProps.panelDisabled || !!mergedProps.onRightIconClick}
        id={'DetailsPanel'}
        onPress={() => mergedProps.onClick?.(mergedProps.id)}
        style={DetailsPanelStyles.container}>
        <View style={DetailsPanelStyles.leftIconContainer}>
          <View style={DetailsPanelStyles.iconView}>
            <IconView
              tintColor={mergedProps.leftIconTintColor || Theme.Colors.neutral8}
              style={DetailsPanelStyles.leftIcon}
              source={mergedProps.leftIcon as any}
            />
          </View>
        </View>

        <View style={DetailsPanelStyles.textViewContainer}>
          {mergedProps.title !== undefined && mergedProps.title !== '' && (
            <CustomTextView 
              variant='body_l_n2' 
              color={mergedProps.titleColor || Theme.Colors.neutral3}
            >
              {mergedProps.title}
            </CustomTextView>
          )}
          <View style={DetailsPanelStyles.descriptionRow}>
            {!!mergedProps.description && (
              <CustomTextView 
                variant='body_l_n1' 
                color={mergedProps.descriptionColor || Theme.Colors.neutral8}
                style={DetailsPanelStyles.text}
              >
                {mergedProps.description}
              </CustomTextView>
            )}
            {!!mergedProps.rightBadgeText && (
              <View style={[
                DetailsPanelStyles.badgeContainer,
                mergedProps.rightBadgeBackgroundColor && { backgroundColor: mergedProps.rightBadgeBackgroundColor }
              ]}>
                <CustomTextView 
                  variant='body_s_n1' 
                  color={mergedProps.rightBadgeColor || Theme.Colors.neutral10}
                >
                  {mergedProps.rightBadgeText}
                </CustomTextView>
              </View>
            )}
          </View>
        </View>

        <View style={[
          DetailsPanelStyles.rightIconContainer,
          // When no description, center the icon; when description exists, align with title
          !mergedProps.description && DetailsPanelStyles.rightIconContainerCentered
        ]}>
          <IconView
            disabled={!mergedProps.rightIcon}
            tintColor={mergedProps.rightIconTintColor || Theme.Colors.primary1}
            style={DetailsPanelStyles.iconStyle}
            source={mergedProps.rightIcon as any}
            touchable={!!mergedProps.rightIcon && !mergedProps.panelDisabled}
            onPress={() => mergedProps.onRightIconClick ? mergedProps.onRightIconClick(mergedProps.id) : mergedProps.onClick?.(mergedProps.id)}
          />
        </View>
      </TouchableOpacity>

      {mergedProps.customTouchableOptions
        ?.filter(f => f.value)
        ?.map((item, index) => {
          return (
            <TouchableOpacity
              testID={`${mergedProps.testId}-custom-${index}`}
              style={DetailsPanelStyles.customTouchable}
              onPress={() => mergedProps.onClickCustomTouch?.(item.id)}
              key={item?.value}>
              <CustomTextView
                variant='body_l_n1'
                color={mergedProps.customTouchableColor || Theme.Colors.neutral8}>
                {item?.value}
              </CustomTextView>
            </TouchableOpacity>
          );
        })}
    </View>
  );
}

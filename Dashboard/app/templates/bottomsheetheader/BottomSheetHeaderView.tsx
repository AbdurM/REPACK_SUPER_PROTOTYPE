// Generated from Fingent Boilerplate

import React from 'react';
import { View, Pressable } from 'react-native';
import { BottomSheetHeaderStyles } from './BottomSheetHeaderStyle';
import {
  BottomSheetHeaderViewProps,
  defaultProps,
} from './BottomSheetHeaderModel';
import { CustomTextView } from 'components/customtext/CustomTextView';
import { IconView } from 'components/icon/IconView';
import { Strings, Theme } from 'utilities/TenantIndex';

export function BottomSheetHeaderView(
  props: Readonly<BottomSheetHeaderViewProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };

  return (
    <React.Fragment key={mergedProps.keyValue}>
      <View style={[mergedProps.back && mergedProps.close && BottomSheetHeaderStyles.iconWrapOne]}>
        {mergedProps.back && (
          <Pressable
            onPress={() => mergedProps.backOnPress && mergedProps.backOnPress()}
            style={BottomSheetHeaderStyles.backBtn}
          >
            <IconView
              source="BACK"
              style={[BottomSheetHeaderStyles.iconStyle]}
            />
          </Pressable>
        )}
        {mergedProps.close && (
          <Pressable
            onPress={() => mergedProps.closeOnPress && mergedProps.closeOnPress()}
            style={BottomSheetHeaderStyles.closeBtn}
          >
            <IconView
              source="CLOSE_LINE"
              style={[BottomSheetHeaderStyles.iconStyle]}
            />
          </Pressable>
        )}
      </View>
      <View style={BottomSheetHeaderStyles.titleContainer}>
        <View style={BottomSheetHeaderStyles.titleRow}>
        {mergedProps.title !== undefined && mergedProps.title !== '' && (
          <CustomTextView
            variant="h3"
            color={mergedProps.titleColor || Theme.Colors.neutral5}
            style={[mergedProps.titleStyle ?? {}]}
          >
            {mergedProps.title}
            {mergedProps.titleSuffix && 
            <CustomTextView variant="h3" color={Theme.Colors.neutral1}
            style={[mergedProps.titleStyle ?? {}]}> {mergedProps.titleSuffix}
            </CustomTextView>}
          </CustomTextView>
        )}
        {mergedProps.optional && 
          <CustomTextView
          variant="h3"
          color={Theme.Colors.neutral1}
          style={[mergedProps.titleStyle ?? {}]}
        >
          {''}  ({Strings.common?.optional})
        </CustomTextView>
        }
        </View>
     
        {mergedProps.heading !== undefined && mergedProps.heading !== '' && (
          <CustomTextView
            variant="h7"
            color={mergedProps.headingColor || Theme.Colors.neutral5}
            style={[mergedProps.headingTextStyle ?? {}]}
          >
            {mergedProps.heading}
          </CustomTextView>
        )}
        {!!mergedProps.description && (
          <CustomTextView
            variant="body_l_n1"
            color={mergedProps.descriptionColor || Theme.Colors.neutral5}
            style={[mergedProps.descriptionTextStyle ?? {}]}
          >
            {mergedProps.description}
          </CustomTextView>
        )}
      </View>
      {mergedProps.showBottomBorder && (
        <View style={BottomSheetHeaderStyles.bottomBorder} />
      )}
    </React.Fragment>
  );
}

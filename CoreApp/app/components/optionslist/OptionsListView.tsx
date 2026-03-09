// Generated from Fingent Boilerplate

import React from "react";
import { View, TouchableOpacity } from "react-native";
import { OptionsListProps, defaultProps } from "./OptionsListModel";
import { OptionsListStyles } from "./OptionsListStyle";
import useOptionsListViewModel from "./OptionsListViewModel";
import { BottomSheetView } from "components/bottomsheet/BottomSheetView";
import { Strings, Theme } from "utilities/TenantIndex";
import CustomTextView from "components/customtext/CustomTextView";
import { IconView } from "components/icon/IconView";
import { ButtonView } from "components/button/ButtonView";

export function OptionsListView(props : Readonly<OptionsListProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { loading, setLoading } = useOptionsListViewModel(mergedProps);

  return (
    <BottomSheetView
      format="compose"
      back={false}
      close={false}
      enablePanDownToClose={true}
      portalName={
        mergedProps.extraText
          ? `bottomsheetInvestmentFilter_${mergedProps.extraText}${mergedProps.optionTitle?.replace(
              /\s+/g,
              '_',
            )}`
          : `bottomsheetInvestmentFilter_${mergedProps.optionTitle?.replace(/\s+/g, '_')}`
      }
      ref={mergedProps.bottomSheetRef}
      backDrop={true}
      size="dynamic">
      <CustomTextView
        color={Theme.Colors.neutral5}
        style={OptionsListStyles.filterHeading}>
        {mergedProps.optionTitle}
      </CustomTextView>
      {!!mergedProps.optionDescription && (
        <CustomTextView
          color={Theme.Colors.neutral5}
          style={OptionsListStyles.filterSubHeading}>
          {mergedProps.optionDescription}
        </CustomTextView>
      )}
      <View style={OptionsListStyles.filterItemContainer}>
        {mergedProps.list?.map((item: any, index: number) => (
          <TouchableOpacity
            testID={`${mergedProps.keyValue}${index}`}
            key={item.title}
            style={OptionsListStyles.selectItem}
            onPress={() => {
              mergedProps.onFilterPress(item);
            }}>
            {mergedProps.hasLeftIcon && (
              <IconView
                style={OptionsListStyles.calendarPlusIcon}
                source={mergedProps.hasLeftIcon}
                // tintColor={Theme.Colors.BUTTON_COLOR_ONE}
              />
            )}
            <View
              style={[
                OptionsListStyles.filterItem,
                {
                  borderBottomWidth: item.description && index !== (list?.length ?? 0) - 1 ? 1 : 0,
                },
              ]}>
              <CustomTextView
                color={Theme.Colors.TEXT}
                style={OptionsListStyles.filterTitle}>
                {item.title}
              </CustomTextView>
              {item.description && (
                <CustomTextView
                  color={Theme.Colors.TEXT}
                  style={OptionsListStyles.filterDescription}>
                  {item.description}
                </CustomTextView>
              )}
            </View>
            <IconView
              tintColor={
                item && item?.value === (mergedProps.activeFilter?.value || mergedProps.defaultSelectOption?.value)
                  ? Theme.Colors.BUTTON_COLOR_ONE
                  : null
              }
              source='AI_STAR'
              style={OptionsListStyles.selectIcon}
            />
          </TouchableOpacity>
        ))}
        <ButtonView
          buttonText={Strings.common.done}
          onPress={() => {
            mergedProps.bottomSheetRef?.current?.collapse();
            if(mergedProps.onClosePress){
              mergedProps.onClosePress();
            }
          }}
          style={OptionsListStyles.filterBtn}
          buttonColor={Theme.Colors.BUTTON_COLOR_ONE}
        />
      </View>
    </BottomSheetView>
  );
}
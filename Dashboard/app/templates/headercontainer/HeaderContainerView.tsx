// Generated from Fingent Boilerplate

import React from 'react';
import { View } from 'react-native';
import { HeaderContainerProps, defaultProps } from './HeaderContainerModel';
import { HeaderContainerStyles } from './HeaderContainerStyle';
import CustomTextView from 'components/customtext/CustomTextView';
import { PolicySelectView } from 'templates/policyselect/PolicySelectView';
import { SelectIconSheetView } from 'templates/selecticonsheet/SelectIconSheetView';
import { MockFilterData, MockCalendarData } from 'templates/selecticonsheet/SelectIconSheetModel';
import { Theme } from 'utilities/TenantIndex';
import { ApptextinputView } from 'components/apptextinput/ApptextinputView';

export function HeaderContainerView(
  props: Readonly<HeaderContainerProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };

  return (
    <View style={[HeaderContainerStyles.container, mergedProps.style]}>
      <CustomTextView 
        variant='h3'
        color={mergedProps.titleColor}
        style={[
          HeaderContainerStyles.titleText,
          mergedProps.subTitle 
            ? HeaderContainerStyles.titleWithSubtitle 
            : HeaderContainerStyles.titleWithoutSubtitle
        ]}
      >
        {mergedProps.title}
      </CustomTextView>

      {!!mergedProps.subTitle && (
        <CustomTextView 
          variant='body_s_n1'
          color={mergedProps.subTitleColor}
          style={HeaderContainerStyles.subTitleText}
        >
          {mergedProps.subTitle}
        </CustomTextView>
      )}
      
      <View style={HeaderContainerStyles.rowContainer}>
        {/* Policy Select Section */}
          {mergedProps.showPolicySelect && (
            <PolicySelectView
              keyValue={`${mergedProps.keyValue}-policy-select`}
              color={mergedProps.policySelectColor}
              borderColor={mergedProps.policySelectBorderColor}
              placeholder={mergedProps.policySelectPlaceholder}
              bottomSheetTitle={mergedProps.policySelectBottomSheetTitle}
              list={mergedProps.policySelectList}
              style={HeaderContainerStyles.policySelectStyle}
            />
          )}
        {/* Icon Buttons Section - Dynamic positioning */}
          {/* Filter Button */}
          {mergedProps.showFilterButton && (
            <SelectIconSheetView
              keyValue={`${mergedProps.keyValue}-filter`}
              iconSource="SETTINGS"
              iconStyle={HeaderContainerStyles.iconButtonImage}
              iconTintColor={Theme.Colors.neutral1}
              touchableStyle={HeaderContainerStyles.iconButton}
              bottomSheetTitle="Filter Options"
              useListMode={true}
              list={MockFilterData}
              onItemSelect={mergedProps.onFilterBottomSheetButtonPress}
              onDone={mergedProps.onFilterBottomSheetButtonPress}
              portalName={`filter_${mergedProps.keyValue}`}
            />
          )}
          
          {/* Calendar Button */}
          {mergedProps.showCalendarButton && (
            <SelectIconSheetView
              keyValue={`${mergedProps.keyValue}-calendar`}
              iconSource="CALENDAR_LINE"
              iconStyle={HeaderContainerStyles.iconButtonImage}
              iconTintColor={Theme.Colors.neutral1}
              touchableStyle={HeaderContainerStyles.iconButton}
              bottomSheetTitle="Calendar Options"
              useListMode={true}
              list={MockCalendarData}
              onItemSelect={mergedProps.onCalendarBottomSheetButtonPress}
              onDone={mergedProps.onCalendarBottomSheetButtonPress}
              portalName={`calendar_${mergedProps.keyValue}`}
            />
          )}
          
      </View>

      {mergedProps.showSearchButton && (
        <ApptextinputView
          keyValue={`${mergedProps.keyValue}-search`}
          placeholder="Search"
          // value={mergedProps.searchValue}
          // onChangeText={mergedProps.onSearchChange}
          textInputStyle={HeaderContainerStyles.searchInputStyle}
          placeholderTextColor={Theme.Colors.neutral2}
        />
      )}
      
    </View>
  );
}

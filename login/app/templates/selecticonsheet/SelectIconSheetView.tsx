// Generated from Fingent Boilerplate

import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SelectIconSheetProps, defaultProps } from './SelectIconSheetModel';
import useSelectIconSheetViewModel from './SelectIconSheetViewModel';
import { SelectIconSheetStyles } from './SelectIconSheetStyle';
import { IconView } from 'components/icon/IconView';
import { BottomSheetTemplateView } from 'templates/bottomsheettemplate/BottomSheetTemplateView';
import { CustomTextView } from 'components/customtext/CustomTextView';
import { Strings, Theme } from 'utilities/TenantIndex';
import { UI } from 'utilities/Helpers';

export function SelectIconSheetView(
  props: Readonly<SelectIconSheetProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const {
    handleIconPress,
    handleBottomSheetButtonPress,
    tempSelectedItem,
    handleItemSelect,
    bottomSheetRef,
  } = useSelectIconSheetViewModel(mergedProps);

  // Render list item card
  const renderListItemCard = (item: {
    id: string;
    name: string;
    planNumber?: string;
    status?: 'Active' | 'Pending' | 'Inactive';
    iconSource?: any;
  }) => {
    const isSelected = item.id === tempSelectedItem;

    return (
      <TouchableOpacity
        key={item.id}
        style={SelectIconSheetStyles.filterListItem}
        onPress={() => handleItemSelect(item)}
        activeOpacity={0.7}
      >
        {/* Left Icon */}
        {item.iconSource && (
          <View style={SelectIconSheetStyles.filterItemIcon}>
            <IconView
              source={item.iconSource}
              width={UI.responsiveWidth(7)}
              height={UI.responsiveWidth(7)}
              tintColor={Theme.Colors.neutral6}
            />
          </View>
        )}

        {/* Middle Text Content */}
        <View style={SelectIconSheetStyles.filterItemContent}>
          <CustomTextView
            variant="body_l_n2"
            color={Theme.Colors.neutral2}
            style={SelectIconSheetStyles.filterItemText}
          >
            {item.name}
          </CustomTextView>
        </View>

        {/* Right Checkbox */}
        <View
          style={[
            SelectIconSheetStyles.filterCheckbox,
            isSelected && SelectIconSheetStyles.filterCheckboxSelected,
          ]}
        >
          {isSelected && (
            <View style={SelectIconSheetStyles.checkmarkContainer}>
              <CustomTextView
                variant="body_l_n3"
                color={Theme.Colors.neutral10}
              >
                ✓
              </CustomTextView>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // Generate body component based on mode
  const getBodyComponent = () => {
    if (
      mergedProps.useListMode &&
      mergedProps.list &&
      mergedProps.list.length > 0
    ) {
      return (
        <React.Fragment>
          {mergedProps.list.map(item => renderListItemCard(item))}
        </React.Fragment>
      );
    }
    return mergedProps.bodyComponent;
  };

  return (
    <React.Fragment key={mergedProps.keyValue}>
      <IconView
        source={mergedProps.iconSource}
        style={mergedProps.iconStyle}
        width={mergedProps.iconWidth}
        height={mergedProps.iconHeight}
        tintColor={mergedProps.iconTintColor}
        touchable={true}
        onPress={handleIconPress}
        activeOpacity={mergedProps.activeOpacity}
        disabled={mergedProps.disabled}
        touchableStyle={mergedProps.touchableStyle}
      />

      <BottomSheetTemplateView
        keyValue={`${mergedProps.keyValue}-bottomsheet`}
        title={mergedProps.bottomSheetTitle}
        bodyComponent={getBodyComponent()}
        headerComponent={mergedProps.headerComponent}
        footerComponent={mergedProps.footerComponent}
        buttonText={mergedProps.buttonText || Strings.common?.done || 'Done'}
        onButtonPress={handleBottomSheetButtonPress}
        bottomSheetRef={bottomSheetRef}
        portalName={
          mergedProps.portalName || `selecticonsheet_${mergedProps.keyValue}`
        }
        showButton={mergedProps.showBottomSheetButton}
        enablePanDownToClose={mergedProps.enablePanDownToClose}
        backDrop={mergedProps.backDrop}
      />
    </React.Fragment>
  );
}
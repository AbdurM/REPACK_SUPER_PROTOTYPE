// generated from template

import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SelectOptionProps, defaultProps, ListItem } from './SelectOptionModel';
import { SelectOptionStyles } from './SelectOptionStyle';
import useSelectOptionViewModel from './SelectOptionViewModel';
import { CustomTextView } from '../customtext/CustomTextView';
import { IconView } from '../icon/IconView';
import { UI } from 'utilities/Helpers';
import { Theme, Strings } from 'utilities/TenantIndex';
import { BottomSheetTemplateView } from 'templates/bottomsheettemplate/BottomSheetTemplateView';
import { ElementKey } from 'utilities/ElementKey';

export function SelectOptionView(
  props: Readonly<SelectOptionProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const {
    tempSelectedItem,
    handlePress,
    handleItemSelect,
    handleDonePress,
    getDynamicStyles,
    getStatusStyle,
    getStatusTextStyle,
    getItemId,
    selectedListItem,
    selectedOption,
    isPlaceholder,
  } = useSelectOptionViewModel(mergedProps);

  // Get display text for the select option
  const getDisplayText = (): string => {
    if (selectedListItem) {
      return selectedListItem.title || '';
    }
    if (selectedOption) {
      return selectedOption.label;
    }
    return mergedProps.placeholder || '';
  };

  // Render status badge
  const renderStatusBadge = (status?: string) => {
    if (!status || status.trim() === '') {
      return null;
    }
    return (
      <View style={getStatusStyle(status)}>
        <CustomTextView
          style={getStatusTextStyle(status)}
          color={Theme.Colors.neutral9}
        >
          {status}
        </CustomTextView>
      </View>
    );
  };

  // Render list item card
  const renderListItemCard = (item: ListItem, index: number) => {
    const itemId = getItemId(item);
    const isSelected = itemId !== null && itemId === tempSelectedItem;
    const isLastItem = index === (mergedProps.list?.length ?? 0) - 1;

    return (
      <TouchableOpacity
        key={item.id || itemId?.toString() || ''}
        style={[
          SelectOptionStyles.listCard,
          (mergedProps.hideOptionSeparators || isLastItem) && SelectOptionStyles.listCardNoBorder,
          //   isSelected && SelectOptionStyles.listCardSelected
        ]}
        onPress={() => handleItemSelect(item)}
        activeOpacity={0.7}
      >
        <View style={SelectOptionStyles.listContent}>
          {mergedProps.showOptionIcons && (
            <IconView
              source="USER_FILL"
              width={UI.responsiveWidth(6)}
              height={UI.responsiveWidth(6)}
              tintColor={Theme.Colors.neutral2}
              style={SelectOptionStyles.optionIcon}
            />
          )}
          <View style={SelectOptionStyles.listItemContent}>
            <View style={SelectOptionStyles.nameRow}>
              <CustomTextView
                variant="formHeader"
                color={Theme.Colors.neutral2}
                style={SelectOptionStyles.listItemName}
              >
                {item.title || ''}
              </CustomTextView>
              <View style={SelectOptionStyles.rightSection}>
                {mergedProps.showStatusBadge && renderStatusBadge(item.status)}
                <View
                  style={[
                    SelectOptionStyles.checkbox,
                    isSelected && SelectOptionStyles.checkboxSelected,
                  ]}
                >
                  {isSelected && (
                    <IconView
                      source="CHECK"
                      width={UI.responsiveWidth(6)}
                      height={UI.responsiveWidth(6)}
                    />
                  )}
                </View>
              </View>
            </View>
            {!!item.description && itemId !== null && (
              <CustomTextView
                variant="body_s_n1"
                color={Theme.Colors.neutral6}
                style={SelectOptionStyles.itemNumber}
              >
                {item.description || ''}
              </CustomTextView>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <React.Fragment>
      {!!mergedProps.optionMainTitle && (
        <View style={SelectOptionStyles.titleRow}>
          <CustomTextView
            variant="h7"
            style={SelectOptionStyles.titleStyle}
            color={Theme.Colors.neutral2}
          >
            {mergedProps.optionMainTitle}
          </CustomTextView>
        </View>
      )}
      <TouchableOpacity
        testID={ElementKey.selectoption_container}
        key={mergedProps.keyValue}
        style={[
          SelectOptionStyles.container,
          mergedProps.dynamicWidth && SelectOptionStyles.dynamicContainer,
          mergedProps.disabled && SelectOptionStyles.disabledContainer,
          getDynamicStyles(),
          mergedProps.style,
          {borderColor: mergedProps.borderColor},
          mergedProps.containerStyle
        ]}
        onPress={handlePress}
        disabled={mergedProps.disabled}
        activeOpacity={0.7}
        {...mergedProps}
      >
        <View
          style={[
            mergedProps.dynamicWidth
              ? SelectOptionStyles.dynamicTextContainer
              : SelectOptionStyles.textContainer,
            mergedProps.textContainerStyle
          ]}
        >
          <CustomTextView
            variant={mergedProps.variant}
            style={[
              isPlaceholder
                ? SelectOptionStyles.placeholderText
                : SelectOptionStyles.selectedText,
            ]}
            numberOfLines={1}
            ellipsizeMode={mergedProps.dynamicWidth ? 'clip' : 'tail'}
            color={mergedProps.color}
          >
            {getDisplayText()}
          </CustomTextView>
        </View>

        {mergedProps.showChevron && (
          <View style={SelectOptionStyles.chevronContainer}>
            <IconView
              source="CHEVRON_DOWN"
              width={UI.responsiveWidth(5)}
              height={UI.responsiveWidth(5)}
              tintColor={
                mergedProps.disabled
                  ? Theme.Colors.secondary4
                  : mergedProps.chevronIconColor || mergedProps.color
              }
            />
          </View>
        )}
      </TouchableOpacity>

      {mergedProps.showOptionsList && (
        <BottomSheetTemplateView
          keyValue={`selectoption-bottomsheet-${mergedProps.keyValue}`}
          title={mergedProps.optionTitle || 'SELECT OPTION'}
          bodyComponent={
            <React.Fragment>
              {mergedProps.list?.map((item, index) => renderListItemCard(item, index))}
            </React.Fragment>
          }
          buttonText={mergedProps.buttonText || Strings.common.done}
          onButtonPress={handleDonePress}
          bottomSheetRef={mergedProps.bottomSheetRef}
          portalName={`selectoption_${mergedProps.keyValue}`}
          size={mergedProps.bottomSheetSize || 'dynamic'}
          scrollHeight={mergedProps.scrollHeight}
        />
      )}
    </React.Fragment>
  );
}

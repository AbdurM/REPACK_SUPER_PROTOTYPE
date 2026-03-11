// Generated from Fingent Boilerplate

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ListWidgetProps, defaultProps } from './ListWidgetModel';
import useListWidgetViewModel from './ListWidgetViewModel';
import { ListWidgetStyles } from './ListWidgetStyle';
import { GlobalStyles } from 'utilities/Style';
import { Strings, Theme } from 'utilities/TenantIndex';
import { ListItemView } from 'templates/listitem/ListItemView';
import CustomTextView from 'components/customtext/CustomTextView';
import { BottomSheetTemplateView } from 'templates/bottomsheettemplate/BottomSheetTemplateView';
import { ElementKey } from 'utilities/ElementKey';

export function ListWidgetView(
  props: Readonly<ListWidgetProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { bottomSheetRef } = useListWidgetViewModel(mergedProps);

  return (
    <View
      key={mergedProps.keyValue}
      style={[ListWidgetStyles.container, GlobalStyles.cardShadow]}
    >
      <View style={ListWidgetStyles.headerContainer}>
        <CustomTextView
          variant="h7"
          color={Theme.Colors.neutral3}
          style={ListWidgetStyles.titleText}
        >
          {mergedProps.title}
        </CustomTextView>
        {/* <IconView
          testID={ElementKey.widget_info_icon}
          source="INFO_FILL"
          touchable={true}
          width={UI.responsiveWidth(6)}
          height={UI.responsiveWidth(6)}
          tintColor={Theme.Colors.neutral6}
          style={ListWidgetStyles.infoIcon}
          onPress={() => bottomSheetRef?.current?.expand()}
        /> */}
      </View>

      <View style={ListWidgetStyles.itemsContainer}>
        {(mergedProps?.historyItems || []).map((item, index) => (
          <ListItemView
            key={`${item.id}-${index}`}
            keyValue={`list-item-${item.id}-${index}`}
            type={item.type || ''}
            date={item.date || ''}
            amount={item.amount || ''}
          />
        ))}
      </View>

      <View style={ListWidgetStyles.seeAllContainer}>
        <TouchableOpacity
          testID={ElementKey.see_all_button}
          onPress={mergedProps?.onSeeAllPress}
          style={ListWidgetStyles.seeAllTouchable}
        >
          <CustomTextView
            variant="body_m_n2"
            color={Theme.Colors.primary1}
            style={ListWidgetStyles.seeAllText}
          >
            {Strings.common?.seeAll || 'See all'}
          </CustomTextView>
        </TouchableOpacity>
      </View>

      <BottomSheetTemplateView
        keyValue={`bottomsheet-${mergedProps.keyValue}`}
        title={mergedProps.bottomSheetTitle}
        bodyComponent={mergedProps.bottomSheetContent}
        buttonText={Strings.common?.done || 'Done'}
        onButtonPress={() => {
          bottomSheetRef?.current?.collapse();
        }}
        bottomSheetRef={bottomSheetRef}
        portalName={`listwidget_${mergedProps.keyValue}`}
      />
    </View>
  );
}

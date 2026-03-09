// Generated from Fingent Boilerplate

import React from "react";
import { View, ScrollView } from "react-native";
import { 
  BottomSheetTemplateProps, 
  defaultProps
} from "./BottomSheetTemplateModel";
import useBottomSheetTemplateViewModel from "./BottomSheetTemplateViewModel";
import { BottomSheetTemplateStyles } from "./BottomSheetTemplateStyle";
import { BottomSheetView } from "components/bottomsheet/BottomSheetView";
import { ButtonView } from "components/button/ButtonView";
import CustomTextView from "components/customtext/CustomTextView";
import { Theme } from "utilities/TenantIndex";
import { ElementKey } from "utilities/ElementKey";

export function BottomSheetTemplateView(props: Readonly<BottomSheetTemplateProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { handleButtonPress } = useBottomSheetTemplateViewModel(mergedProps);

  // Default header component if none provided
  const defaultHeaderComponent = (
    <View style={BottomSheetTemplateStyles.header}>
      <View style={BottomSheetTemplateStyles.headerContent}>
        {mergedProps.titleIcon && (
          <View style={BottomSheetTemplateStyles.titleIconContainer}>
            {mergedProps.titleIcon}
          </View>
        )}
        <CustomTextView 
          variant={mergedProps.titleVariant || 'h7'} 
          color={Theme.Colors.neutral3}
          style={BottomSheetTemplateStyles.headerText}
        >
          {mergedProps.title}
        </CustomTextView>
      </View>
    </View>
  );

  // Default footer component if none provided and showButton is true
  const defaultFooterComponent = mergedProps.showButton ? (
    <View style={BottomSheetTemplateStyles.footer}>
      <ButtonView
        buttonText={mergedProps.buttonText}
        onPress={handleButtonPress}
        testID={ElementKey.bottomsheet_template_button}
        filled={true}
        style={BottomSheetTemplateStyles.button}
      />
    </View>
  ) : null;

  return (
    <BottomSheetView
      key={mergedProps.keyValue}
      format="static"
      back={false}
      close={false}
      enablePanDownToClose={mergedProps?.enablePanDownToClose}
      enableContentPanningGesture={false}
      portalName={mergedProps.portalName!}
      ref={mergedProps.bottomSheetRef}
      backDrop={mergedProps.backDrop!}
      size={'dynamic'}
    >
      <View style={BottomSheetTemplateStyles.container}>
        {/* Header Section */}
        {!!mergedProps.title && defaultHeaderComponent}
        {mergedProps.headerComponent}

        {/* Scrollable Body Section */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[BottomSheetTemplateStyles.body, { height: mergedProps.scrollHeight }]}
        >
          {mergedProps.bodyComponent}
        </ScrollView>

        {/* Footer Section */}
        {mergedProps.footerComponent || defaultFooterComponent}
      </View>
    </BottomSheetView>
  );
}
// Generated from Fingent Boilerplate

import React from "react";
import { View } from "react-native";
import { EmployerMandatoryProps, defaultProps } from "./EmployerMandatoryModel";
import useEmployerMandatoryViewModel from "./EmployerMandatoryViewModel";
import { EmployerMandatoryStyles } from "./EmployerMandatoryStyle";
import { GlobalStyles } from "utilities/Style";
import { IconView } from "components/icon/IconView";
import CustomTextView from "components/customtext/CustomTextView";
import { Theme, Strings } from "utilities/TenantIndex";
import { CountBadgeView } from "templates/countbadge/CountBadgeView";

export function EmployerMandatoryView(props: Readonly<EmployerMandatoryProps>): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  useEmployerMandatoryViewModel(mergedProps);

  return (
      <View key={mergedProps.keyValue} style={[EmployerMandatoryStyles.container,mergedProps?.style,GlobalStyles.cardShadow]}>
        <View style={EmployerMandatoryStyles.leftSection}>
          <CustomTextView variant='body_l_n2' color={Theme.Colors.neutral3} >
            {mergedProps.title || Strings.accountsPage.employerMandatory}
          </CustomTextView>

          <View style={EmployerMandatoryStyles.fundsContainer}>
            <CountBadgeView
              keyValue={`funds-badge-${mergedProps.keyValue}`}
              count={mergedProps.fundsCount || 0}
              variant="body_s_n1"
              textColor={Theme.Colors.neutral10}
              backgroundColor={Theme.Colors.primary1}
            />
            <CustomTextView variant={'body_m_n1'} color={Theme.Colors.neutral1} style={EmployerMandatoryStyles.fundsText}>
              Funds invested
            </CustomTextView>
          </View>
        </View>
        
        <View style={EmployerMandatoryStyles.rightSection}>
          <IconView
            source={mergedProps.iconName as any || "NOUN_INVESTMENT"}
            style={EmployerMandatoryStyles.icon}
            tintColor={Theme.Colors.neutral4}
          />
        </View>
      </View>
  );
}
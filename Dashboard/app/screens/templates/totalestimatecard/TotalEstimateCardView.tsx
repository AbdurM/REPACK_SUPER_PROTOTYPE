// Generated from Fingent Boilerplate

import React from 'react';
import { View } from 'react-native';
import {
  TotalEstimateCardProps,
  defaultProps,
} from './TotalEstimateCardModel';
import useTotalEstimateCardViewModel from './TotalEstimateCardViewModel';
import { TotalEstimateCardStyles } from './TotalEstimateCardStyle';
import { Strings, Theme } from 'utilities/TenantIndex';
import CustomTextView from 'components/customtext/CustomTextView';
import { GlobalStyles } from 'utilities/Style';

export function TotalEstimateCardView(
  props: Readonly<TotalEstimateCardProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  useTotalEstimateCardViewModel(mergedProps);

  const formatAmount = (amount: number) => {
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <View
      key={mergedProps.keyValue}
      style={[
        TotalEstimateCardStyles.container,
        GlobalStyles.cardShadow,
        mergedProps.style,
      ]}
    >
      {/* Header Section - Total Balance */}
      <View style={TotalEstimateCardStyles.headerSection}>
        <CustomTextView
          variant="body_m_n1"
          color={Theme.Colors.neutral4}
          style={TotalEstimateCardStyles.dateText}
        >
          {Strings.dashboardPage.estimatedBalanceAsOf} {mergedProps.balanceDate}
        </CustomTextView>

        <View style={TotalEstimateCardStyles.amountContainer}>
          <CustomTextView
            variant="h2"
            color={Theme.Colors.neutral2}
            style={TotalEstimateCardStyles.amountText}
          >
            {mergedProps.currency}
            {formatAmount(mergedProps.totalBalance || 0)}
          </CustomTextView>
        </View>
      </View>

      {/* Financial Year Section */}
      {/* <View style={TotalEstimateCardStyles.financialYearSection}> */}
        {/* <CustomTextView
          variant="body_m_n1"
          color={Theme.Colors.neutral2}
          style={TotalEstimateCardStyles.financialYearTitle}
        >
          {mergedProps.financialYear}
        </CustomTextView> */}

        {/* Estimated Returns Row */}
        {/* <View style={TotalEstimateCardStyles.detailRow}>
          <CustomTextView
            variant="body_m_n1"
            color={Theme.Colors.neutral4}
            style={TotalEstimateCardStyles.detailLabel}
          >
            {Strings.dashboardPage.estimatedReturns}
          </CustomTextView>
          <View style={TotalEstimateCardStyles.detailAmount}>
            <CustomTextView
              variant="body_m_n3"
              color={Theme.Colors.neutral2}
              style={TotalEstimateCardStyles.detailAmountText}
            >
              {mergedProps.currency}
              {formatAmount(mergedProps.estimatedReturns || 0)}
            </CustomTextView>
          </View>
        </View> */}

        {/* Income Stream Row */}
        {/* <View style={TotalEstimateCardStyles.detailRow}>
          <CustomTextView
            variant="body_m_n1"
            color={Theme.Colors.neutral4}
            style={TotalEstimateCardStyles.detailLabel}
          >
            {Strings.dashboardPage.incomeStream}
          </CustomTextView>
          <View style={TotalEstimateCardStyles.detailAmount}>
            <CustomTextView
              variant="body_m_n3"
              color={Theme.Colors.neutral2}
              style={TotalEstimateCardStyles.detailAmountText}
            >
              {mergedProps.currency}
              {formatAmount(mergedProps.incomeStream || 0)}
            </CustomTextView>
          </View>
        </View> */}
      {/* </View> */}
    </View>
  );
}


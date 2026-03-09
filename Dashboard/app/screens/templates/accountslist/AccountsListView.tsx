// Generated from Fingent Boilerplate

import React, { Fragment } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AccountsListProps, defaultProps } from './AccountsListModel';
import { AccountsListStyles } from './AccountsListStyle';
import useAccountsListViewModel from './AccountsListViewModel';
import CustomTextView from 'components/customtext/CustomTextView';
import { Strings, Theme } from 'utilities/TenantIndex';
import { GlobalStyles } from 'utilities/Style';
import { InvestmentSummaryLoaderView } from '../investmentsummary/InvestmentSummaryLoaderView';
import { RetryView } from 'templates/retryview/RetryView';
import { IconView } from 'components/icon/IconView';
import { UI } from 'utilities/Helpers';

export function AccountsListView(
  props: Readonly<AccountsListProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { handleAccountPress } = useAccountsListViewModel(mergedProps);

  return (
    <Fragment key={mergedProps.keyValue}>
      {/* Accounts List */}
      {mergedProps.accounts && mergedProps.accounts.length > 0 && mergedProps.accounts.map((account) => (
        <TouchableOpacity
          key={account.id}
          activeOpacity={0.7}
          onPress={() => handleAccountPress(account.id)}
          style={mergedProps.style}
        >
          <View style={[AccountsListStyles.container, GlobalStyles.cardShadow,{
            backgroundColor: Theme.Colors.neutral10,
            borderLeftColor: Theme.Colors.primary1,
          }]}>
            <View style={AccountsListStyles.leftSection}>
              <CustomTextView
                variant="body_l_n2"
                color={Theme.Colors.neutral2}
                style={AccountsListStyles.accountName}
              >
                {account.name}
              </CustomTextView>
              <CustomTextView
                variant="body_s_n1"
                color={Theme.Colors.neutral1}
                style={AccountsListStyles.accountNumber}
              >
                {account.accountNumber}
              </CustomTextView>
            </View>

            <View style={AccountsListStyles.rightSection}>
              <CustomTextView
                variant="h7"
                color={Theme.Colors.neutral2}
                style={AccountsListStyles.amountText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {account.currency}&nbsp;
                {account.amount.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </CustomTextView>
              <IconView
                keyValue={`arrow-${account.id}`}
                source="FORWARD_LINE"
                width={UI.responsiveWidth(5)}
                height={UI.responsiveWidth(5)}
                tintColor={Theme.Colors.neutral6}
                style={AccountsListStyles.arrowIcon}
              />
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {/* Loading State */}
      {(!mergedProps.accounts || (mergedProps.accounts.length === 0 && mergedProps.loading && !mergedProps.error)) && (
        <InvestmentSummaryLoaderView />
      )}

      {/* Empty State */}
      {mergedProps.accounts && mergedProps.accounts.length === 0 && !mergedProps.loading && !mergedProps.error && (
        <View style={AccountsListStyles.emptyContainer}>
          <CustomTextView 
            variant="body_m_n1" 
            color={Theme.Colors.neutral4}
            style={AccountsListStyles.emptyText}
          >
            {Strings.dashboardPage.noAccountsFound}
          </CustomTextView>
        </View>
      )}

      {/* Error/Retry State */}
      {mergedProps.error && !mergedProps.loading && !mergedProps.accounts && mergedProps.onRetry && (
        <RetryView 
          onRetry={mergedProps.onRetry}
          message={Strings.dashboardPage.failedToLoadAccounts}
          buttonText={Strings.common.retry}
        />
      )}
    </Fragment>
  );
}


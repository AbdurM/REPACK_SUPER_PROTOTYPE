// Generated from Fingent Boilerplate

import React from 'react';
import { InvestmentIcons, InvestmentSummaryProps, defaultProps } from './InvestmentSummaryModel';
import { InvestmentSummaryStyles } from './InvestmentSummaryStyle';
import useInvestmentSummaryViewModel from './InvestmentSummaryViewModel';
import { TitleContainerView } from '../titlecontainer/TitleContainerView';
import { EmployerMandatoryView } from '../employermandatory/EmployerMandatoryView';
import { InvestmentSummaryLoaderView } from './InvestmentSummaryLoaderView';
import CustomTextView from 'components/customtext/CustomTextView';
import { RetryView } from 'templates/retryview/RetryView';
import { Strings, Theme } from 'utilities/TenantIndex';
import { ElementKey } from 'utilities/ElementKey';

export function InvestmentSummaryView(
  props: Readonly<InvestmentSummaryProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { investmentSummaryData, investmentSummaryFailure, handleSeeAllPress, handleInvestmentPress, handleRetry } = useInvestmentSummaryViewModel(mergedProps);

  return (
    <TitleContainerView
      testID={ElementKey.investmentsummary_container_arrow}
      keyValue={mergedProps.keyValue}
      title={mergedProps.title}
      onSeeAllPress={handleSeeAllPress}
    >
      {investmentSummaryData?.investmentList?.map((data: any, index: number) => (
        <EmployerMandatoryView
          key={data.id || index}
          keyValue={`employer-mandatory-${data.id || index}`}
          title={data.contributionSource}
          fundsCount={data.fundDetails?.length || data.fundsInvested || 0}
          iconName={data.riskProfileStrategy?.icon || data.iconName || InvestmentIcons[data.contributionSource as keyof typeof InvestmentIcons]}
          onPress={handleInvestmentPress}
          style={[InvestmentSummaryStyles.investmentCard, {borderLeftColor: Theme.Colors.investmentSummaryColors[index % Theme.Colors.investmentSummaryColors.length]}]}
        />
      ))}
      {(!investmentSummaryData?.investmentList && investmentSummaryFailure === null) && <InvestmentSummaryLoaderView />}
      {investmentSummaryData?.investmentList?.length === 0 && !investmentSummaryFailure && <CustomTextView>{Strings.accountsPage.noInvestmentsFound}</CustomTextView>}
      {investmentSummaryFailure !== null && (
        <RetryView 
          onRetry={handleRetry}
          message={Strings.accountsPage.failedToLoadInvestmentSummary}
          buttonText={Strings.common.retry}
        />
      )}
    </TitleContainerView>
  );
}


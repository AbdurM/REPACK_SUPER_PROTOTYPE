// Generated from Fingent Boilerplate

import React from 'react';
import { Alert, StatusBar, View } from 'react-native';
import {
  DashboardProps,
  defaultProps,
  MockAccountsData,
  MockBarChartData,
} from './DashboardModel';
import useDashboardViewModel from './DashboardViewModel';
import { Strings, TenantConstants, Theme, useTheme } from 'utilities/TenantIndex';
import { AnimatedHeaderView } from 'templates/animatedheader/AnimatedHeaderView';
import { HeaderView } from 'templates/header/HeaderView';
import { SvgGradientView } from 'components/svggradient/SvgGradientView';
import { HeaderContainerView } from 'templates/headercontainer/HeaderContainerView';
import { TitleContainerView } from 'templates/titlecontainer/TitleContainerView';
import { AccountsListView } from '../templates/accountslist/AccountsListView';
import { TotalEstimateCardView } from '../templates/totalestimatecard/TotalEstimateCardView';
import { UI } from 'utilities/Helpers';
import { BarChartView } from 'components/giftedCharts/barchart/BarChartView';
import { ThemeProvider } from 'context/ThemeContext';
import { DashboardStyles } from './DashboardStyle';
import { StatusBarStyles } from 'utilities/Constants';
import { ChartView } from 'components/chart/ChartView';
import {
  lineData1,
  lineData2,
} from './DashboardModel';

export function DashboardView(
  props: Readonly<DashboardProps>,
): React.JSX.Element {
  const mergedProps = { ...defaultProps, ...props };
  const { 
    handleProfilePress,
    handleAccountPress,
    handleRefresh,
    accounts,
    loading,
    policyDataFailure,
    refreshHash,
    dashboardData,
  } = useDashboardViewModel(mergedProps);
  // const { statusBarTheme, statusBarColor } = useTheme();
  const { config } = props.route.params;
  return (
    <ThemeProvider>
      <StatusBar
            backgroundColor={Theme.Colors.background1}
            barStyle={StatusBarStyles.light}
        />
      <AnimatedHeaderView
        backgroundColor={Theme.Colors.primary3}
        enablePullToRefresh={true}
        onRefresh={handleRefresh}
        refreshLoaderTintColor={Theme.Colors.neutral10}
        isStatic={true}
        headerContent={
          <View style={DashboardStyles.headerContent}>
            <HeaderView
              keyValue="dashboard-header"
              showBackButton={false}
              showRightIcon={true}
              onProfilePress={handleProfilePress}
              tintColor={Theme.Colors.neutral10}
              rightIconTintColor={Theme.Colors.neutral10}
            />
            <HeaderContainerView
              keyValue="dashboard-header-container"
              title={Strings.dashboardPage.portfolioSummary}
              titleColor={Theme.Colors.neutral10}
              subTitle={`${Strings.dashboardPage.accountsCombinedAsOf} ${dashboardData.valuationDate}`}
              subTitleColor={Theme.Colors.neutral10}
              style={DashboardStyles.portfolioSummaryText}
              showPolicySelect={false}
            />
          </View>
          
        }
      >
        {config?.chart?.visible !== false && (
          <View style={DashboardStyles.lineChartContainer}>
            <SvgGradientView containerStyle={DashboardStyles.gradientView} />
            
            {(config?.chart?.type === 'BAR') && (
              <BarChartView
                containerStyle={DashboardStyles.barChartContainer}
                barData={MockBarChartData}
                barWidth={UI.responsiveWidth(2.5)}
                spacing={UI.responsiveWidth(4.25)}
                noOfSections={3}
                maxValue={200}
                width={UI.responsiveWidth(80)}
                height={UI.responsiveWidth(35)}
                initialSpacing={UI.responsiveWidth(1)}
                yAxisTextColor={Theme.Colors.neutral10}
                xAxisLabelTextColor={Theme.Colors.neutral10}
                formatYLabel={(value: string) => `${Number(value)}k`}
                rulesType="dashed"
                rulesColor={Theme.Colors.neutral1}
                rulesThickness={1.5}
                showDurationSelector={true}
                durationSelectorBackgroundColor={Theme.Colors.activeState}
                durationTextColor={Theme.Colors.neutral10}
                initialDuration="1Y"
              />
            )}
            {config?.chart?.type === 'LINE' && (
              <ChartView
                keyValue={`${refreshHash}-chart`}
                key={`${refreshHash}-chart`}
                lineData1={lineData1}
                lineData2={lineData2}
                yAxisSuffix={'k'}
                verticalLinesColor={Theme.Colors.secondary2}
                title1={Strings.accountsPage.balanceHistory}
                title2={Strings.accountsPage.yourContributions}
              />
            )}
            {/* <View style={{ height: UI.responsiveHeight(20)}} /> */}
          </View>
        )}
        <View style={[DashboardStyles.contentContainer,{
          backgroundColor: Theme.Colors.background2,
        }]}>
          {config?.balanceFYInfo?.visible !== false ? (
            <TotalEstimateCardView
              keyValue="dashboard-total-estimate-card"
              totalBalance={dashboardData.total}
              currency={TenantConstants.Currency}
              balanceDate={dashboardData.valuationDate}
              style={{backgroundColor:Theme.Colors.background1}}
            />
          ) : <View style={{padding: UI.responsiveWidth(7)}} />}
          
          {config?.accountActions?.visible !== false && (
          <TitleContainerView
            keyValue="dashboard-accounts-container"
            title={Strings.dashboardPage.yourAccounts}
            hideChevronIcon={true}
          >
            <AccountsListView
              accounts={accounts || MockAccountsData}
              onAccountPress={handleAccountPress}
              style={DashboardStyles.accountCard}
              loading={loading}
              error={policyDataFailure}
              onRetry={() => handleRefresh('')}
              keyValue={`${refreshHash}-accounts-list`}
              // key={`${refreshHash}-accounts-list`}
            />
          </TitleContainerView>
          )}
        </View>
      </AnimatedHeaderView>
    </ThemeProvider>
    
  );
}

export default DashboardView;
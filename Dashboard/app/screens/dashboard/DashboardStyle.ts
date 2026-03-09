// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';
// console.log('Theme in DashboardStyle: ', Theme);
export const DashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.background2,
  },
  gradientView: {
    width: UI.responsiveWidth(100),
    height: UI.responsiveHeight(35),
    position: 'absolute',
  },
  lineChartContainer: {
    zIndex: 1,
    paddingBottom: UI.responsiveWidth(2),
  },
  contentContainer: {
    backgroundColor: Theme.Colors.background2,
  },
  portfolioSummaryText: {
    marginBottom: UI.responsiveWidth(3),
  },
  accountCard: {
    marginBottom: UI.responsiveHeight(1.5),
  },
  barChartContainer: {
    marginHorizontal: UI.responsiveWidth(5),
    marginTop: UI.responsiveWidth(4),
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
  headerContent: {
    flex: 1,
  },
});


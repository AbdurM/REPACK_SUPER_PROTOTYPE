// Generated from Fingent Boilerplate

import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Theme } from 'utilities/TenantIndex';

export const TotalEstimateCardStyles = StyleSheet.create({
  container: {
    backgroundColor: Theme.Colors.background1,
    borderRadius: UI.responsiveWidth(4),
    paddingVertical: UI.responsiveWidth(5),
    // paddingHorizontal: UI.responsiveWidth(5),
    marginHorizontal: UI.responsiveWidth(4),
    marginVertical: UI.responsiveWidth(3),
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Header Section
  headerSection: {
    // alignItems: 'flex-start',
    // marginBottom: UI.responsiveWidth(4),
  },
  
  dateText: {
    marginBottom: UI.responsiveWidth(2),
    textAlign: 'center',
  },
  
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  
  amountText: {
    // Additional styling if needed
    textAlign: 'center',
    width: '100%',
  },
  
  // Financial Year Section
  financialYearSection: {
    borderTopWidth: 1,
    borderTopColor: Theme.Colors.neutral7,
    paddingTop: UI.responsiveWidth(4),
    marginTop: UI.responsiveWidth(2),
  },
  
  financialYearTitle: {
    marginBottom: UI.responsiveWidth(4),
  },
  
  // Details Row
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: UI.responsiveWidth(3),
  },
  
  detailLabel: {
    flex: 1,
  },
  
  detailAmount: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  
  detailAmountText: {
    textAlign: 'right',
  },
});


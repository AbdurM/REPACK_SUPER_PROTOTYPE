// Generated from Fingent Boilerplate

import { ViewStyle } from 'react-native';

interface TotalEstimateCardProps {
  keyValue?: string;
  totalBalance?: number;
  currency?: string;
  balanceDate?: string;
  financialYear?: string;
  estimatedReturns?: number;
  incomeStream?: number;
  style?: ViewStyle | ViewStyle[];
  [key: string]: any;
}

interface TotalEstimateCardViewModel {}

// Static data for mock/template purposes - PascalCase
const MockTotalEstimateData = {
  totalBalance: 965280.39,
  currency: '$',
  balanceDate: '14/08/2024',
  financialYear: '2025-26 Financial Year to Date',
  estimatedReturns: 869490.34,
  incomeStream: 102839.59,
};

// MANDATORY: Default props (should be minimal/empty values)
const defaultProps: TotalEstimateCardProps = {
  keyValue: '',
  totalBalance: 0,
  currency: '$',
  balanceDate: '',
  financialYear: '',
  estimatedReturns: 0,
  incomeStream: 0,
};

export type { TotalEstimateCardProps, TotalEstimateCardViewModel };
export { defaultProps, MockTotalEstimateData };


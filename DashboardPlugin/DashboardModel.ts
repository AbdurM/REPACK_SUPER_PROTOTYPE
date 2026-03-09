// Generated from Fingent Boilerplate

// import { BottomSheetRef } from "components/bottomsheet/BottomSheetModel";
// import { Theme } from 'utilities/TenantIndex';
// import { AccountData } from '../templates/accountslist/AccountsListModel';
// import { ListItem } from "components/selectoption/SelectOptionModel";
// import { ErrorModel } from 'services/ServicesModels';
// import { Constants } from "utilities/Constants";

// interface DashboardData {
//   total: number;
//   valuationDate: string;
// }

// interface DashboardConfig {
//   chart?: {
//     type: string;
//     visible: boolean;
//   };
//   balanceFYInfo?: {
//     visible: boolean;
//   };
//   accountActions?: {
//     visible: boolean;
//   };
//   contributionsCard?: {
//     visible: boolean;
//   };
// }

// interface DashboardViewModel {
//   loading: boolean;
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
//   handleProfilePress: () => void;
//   handleAccountPress: (accountId: string) => void;
//   handleQuestionPress: () => void;
//   handleRefresh: (hash: string) => void;
//   accounts: AccountData[];
//   policyDataFailure: ErrorModel | null;
//   refreshHash: string;
//   dashboardData: DashboardData;
// }

// interface DashboardProps {
//   keyValue?: string;
//   bottomSheetRef?: React.RefObject<BottomSheetRef | null>;
//   loading?: boolean;
//   setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
//   config?: DashboardConfig;
// }

// // Mock account data
// const MockAccountsData: AccountData[] = [
//   {
//     id: "1",
//     name: "Super",
//     accountNumber: "Account #: 01234567",
//     amount: 18465.21,
//     currency: "$",
//     borderColor: Theme.Colors.primary1,
//   },
//   {
//     id: "2",
//     name: "Transition to retirement",
//     accountNumber: "Account #: 76543210",
//     amount: 496562.56,
//     currency: "$",
//     borderColor: Theme.Colors.primary1,
//   },
// ];

// Account list data for policy select dropdown
// const DashboardAccountSelectList: ListItem[] = [
//   {
//     planId: '01234567',
//     planName: 'Super',
//     policyCurrency: '$',
//     policyId: 1,
//     policyStatus: 'Active',
//     policyValue: 18465.21,
//   },
//   {
//     planId: '76543210',
//     planName: 'Transition to retirement',
//     policyCurrency: '$',
//     policyId: 2,
//     policyStatus: 'Active',
//     policyValue: 496562.56,
//   },
//   {
//     planId: '01234567',
//     planName: 'Sailtech Unlimited',
//     policyCurrency: '$',
//     policyId: 3,
//     policyStatus: 'Pending',
//     policyValue: 0,
//   },
// ];

// Mock bar chart data (values 0-200, will display as 600k-800k on Y-axis)
const MockBarChartData = [
  { value: 100, label: 'J', frontColor: 'white' },
  { value: 120, label: 'F', frontColor: 'white' },
  { value: 40, label: 'M', frontColor: 'white' },
  { value: 60, label: 'A', frontColor: 'white' },
  { value: 150, label: 'M', frontColor: 'white' },
  { value: 100, label: 'J', frontColor: 'white' },
  { value: 20, label: 'J', frontColor: 'white' },
  { value: 140, label: 'A', frontColor: 'white' },
  { value: 150, label: 'S', frontColor: 'white' },
  { value: 170, label: 'O', frontColor: 'white' },
  { value: 185, label: 'N', frontColor: 'white' },
  { value: 200, label: 'D', frontColor: 'white' },
];

const MockBarChartData1M = [
  { value: 180, label: 'Nov', frontColor: 'white' },
];

const MockBarChartData6M = [
  { value: 50, label: 'Jun', frontColor: 'white' },
  { value: 200, label: 'Jul', frontColor: 'white' },
  { value: 80, label: 'Aug', frontColor: 'white' },
  { value: 60, label: 'Sep', frontColor: 'white' },
  { value: 80, label: 'Oct', frontColor: 'white' },
  { value: 100, label: 'Nov', frontColor: 'white' },
];

const MockBarChartData3Y = [
  { value: 180, label: '2023', frontColor: 'white' },
  { value: 50, label: '2024', frontColor: 'white' },
  { value: 120, label: '2025', frontColor: 'white' },
];

const MockBarChartData5Y = [
  { value: 10, label: '2025', frontColor: 'white' },
  { value: 50, label: '2024', frontColor: 'white' },
  { value: 180, label: '2023', frontColor: 'white' },
  { value: 80, label: '2022', frontColor: 'white' },
  { value: 40, label: '2021', frontColor: 'white' },
  { value: 100, label: '2020', frontColor: 'white' },
];

const lineData1 = [
  { value: 10, label: 'Jan' }, // Jan
  { value: 20, label: 'Feb' }, // Feb
  { value: 15, label: 'Mar' }, // Mar
  { value: 30, label: 'Apr' }, // Apr
  { value: 25, label: 'May' }, // May
  { value: 35, label: 'Jun' }, // Jun
  { value: 40, label: 'Jul' }, // Jul
  { value: 40, label: 'Aug' }, // Aug
];

const lineData2 = [
  { value: 5, label: 'Jan' }, // Jan
  { value: 25, label: 'Feb' }, // Feb
  { value: 10, label: 'Mar' }, // Mar
  { value: 20, label: 'Apr' }, // Apr
  { value: 15, label: 'May' }, // May
  { value: 30, label: 'Jun' }, // Jun
  { value: 38, label: 'Jul' }, // Jul
];

// Default props
// const defaultProps: DashboardProps = {
//   keyValue: "",
// };

// export type { DashboardProps, DashboardViewModel, DashboardData, DashboardConfig };
export {
//   defaultProps, MockAccountsData, DashboardAccountSelectList,
  MockBarChartData, MockBarChartData1M, MockBarChartData6M,
  MockBarChartData3Y, MockBarChartData5Y,
  lineData1, lineData2,};


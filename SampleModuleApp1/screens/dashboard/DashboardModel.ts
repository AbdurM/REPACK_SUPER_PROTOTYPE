// Generated from Fingent Boilerplate

interface DashboardData {
  total: number;
  valuationDate: string;
}

interface DashboardViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleProfilePress: () => void;
  handleAccountPress: () => void;
  handleQuestionPress: () => void;
  handleRefresh: (hash: string) => void;
  refreshHash: string;
  dashboardData: DashboardData;
}

interface DashboardProps {
  keyValue?: string;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

// Mock account data
const MockAccountsData: any[] = [
  {
    id: "1",
    name: "Super",
    accountNumber: "Account #: 01234567",
    amount: 18465.21,
    currency: "$",
  },
  {
    id: "2",
    name: "Transition to retirement",
    accountNumber: "Account #: 76543210",
    amount: 496562.56,
    currency: "$",
  },
];

// Account list data for policy select dropdown
const DashboardAccountSelectList: any[] = [
  {
    planId: '01234567',
    planName: 'Super',
    policyCurrency: '$',
    policyId: 1,
    policyStatus: 'Active',
    policyValue: 18465.21,
  },
  {
    planId: '76543210',
    planName: 'Transition to retirement',
    policyCurrency: '$',
    policyId: 2,
    policyStatus: 'Active',
    policyValue: 496562.56,
  },
  {
    planId: '01234567',
    planName: 'Sailtech Unlimited',
    policyCurrency: '$',
    policyId: 3,
    policyStatus: 'Pending',
    policyValue: 0,
  },
];

// Mock bar chart data (values 0-200, will display as 600k-800k on Y-axis)
const MockBarChartData = [
  { value: 10, label: 'J', frontColor: '#e0e0e0' },
  { value: 20, label: 'F', frontColor: '#e0e0e0' },
  { value: 40, label: 'M', frontColor: '#e0e0e0' },
  { value: 60, label: 'A', frontColor: '#e0e0e0' },
  { value: 80, label: 'M', frontColor: '#e0e0e0' },
  { value: 100, label: 'J', frontColor: '#e0e0e0'  },
  { value: 120, label: 'J', frontColor: '#e0e0e0' },
  { value: 140, label: 'A', frontColor: '#e0e0e0' },
  { value: 150, label: 'S', frontColor: '#e0e0e0' },
  { value: 170, label: 'O', frontColor: '#e0e0e0' },
  { value: 185, label: 'N', frontColor: '#e0e0e0' },
  { value: 200, label: 'D', frontColor: '#e0e0e0' },
];

// Default props
const defaultProps: DashboardProps = {
  keyValue: "",
};

export type { DashboardProps, DashboardViewModel, DashboardData };
export { defaultProps, MockAccountsData, DashboardAccountSelectList, MockBarChartData };


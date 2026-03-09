// Generated from Fingent Boilerplate

import { ViewStyle } from "react-native";
import { ErrorModel } from 'services/ServicesModels';

interface AccountsListViewModel {
  handleAccountPress: (accountId: string) => void;
}

interface AccountsListProps {
  keyValue?: string;
  accounts: AccountData[];
  onAccountPress?: (accountId: string) => void;
  style?: ViewStyle;
  loading?: boolean;
  error?: ErrorModel | null;
  onRetry?: () => void;
}

interface AccountData {
  id: string;
  name: string;
  accountNumber: string;
  amount: number;
  currency: string;
  borderColor?: string;
}

// Default props
const defaultProps: Partial<AccountsListProps> = {
  keyValue: "accounts-list",
  accounts: [],
};

export type { AccountsListProps, AccountsListViewModel, AccountData };
export { defaultProps };


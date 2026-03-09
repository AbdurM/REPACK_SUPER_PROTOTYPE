// Generated from Fingent Boilerplate

import { AccountsListViewModel, AccountsListProps } from "./AccountsListModel";

export default function useAccountsListViewModel(props: AccountsListProps): AccountsListViewModel {
  const { onAccountPress } = props;

  const handleAccountPress = (accountId: string) => {
    if (onAccountPress) {
      onAccountPress(accountId);
    }
    console.log('Account pressed:', accountId);
  };

  return {
    handleAccountPress,
  };
}


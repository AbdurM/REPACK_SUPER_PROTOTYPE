// Generated from Fingent Boilerplate

import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { InvestmentSummaryProps, InvestmentSummaryViewModel } from './InvestmentSummaryModel';
// import { accountActions } from 'modules/accounts/store/slice/accountsSlice';
// import { RootState } from 'store/Store';
import { useEffectFetchOnScheme } from 'services/UseEffectFetchOnScheme';
// import { useIsFocused } from '@react-navigation/native';

const useInvestmentSummaryViewModel = (
  props: InvestmentSummaryProps,
): InvestmentSummaryViewModel => {
  // const dispatch = useDispatch();
  // const { activePolicyId } = useSelector((state: RootState) => state.app);
  // const { createSessionData } = useSelector((state: RootState) => state.auth);
  // const { investmentSummarySuccess, investmentSummaryFailure } = useSelector((state: RootState) => state.account);
  // const isFocused = useIsFocused(); // to check if the screen is focused
  
  // Fetch fund details on component load
  // useEffectFetchOnScheme(activePolicyId, () => {
  //   if (createSessionData && activePolicyId && isFocused) {
  //     dispatch(accountActions.clearInvestmentSummaryData());
  //     dispatch(accountActions.getInvestmentSummary());
  //   }
  // }, [createSessionData]);

  // useEffect(() => {
  //   if (investmentSummarySuccess) {
  //     console.log('Investment Summary Success:', investmentSummarySuccess);
  //   }
  //   if (investmentSummaryFailure) {
  //     console.log('Investment Summary Failure:', investmentSummaryFailure);
  //   }
  // }, [investmentSummarySuccess, investmentSummaryFailure]);

  const handleSeeAllPress = () => {
    if (props.onSeeAllPress) {
      props.onSeeAllPress();
    }
  };

  const handleInvestmentPress = () => {
    if (props.onInvestmentPress) {
      props.onInvestmentPress();
    }
  };

  const handleRetry = () => {
    // if (createSessionData && activePolicyId) {
    //   dispatch(accountActions.clearInvestmentSummaryData());
    //   dispatch(accountActions.getInvestmentSummary());
    // }
  };

  return {
    investments: props.investments ?? [],
    // investmentSummaryData: investmentSummarySuccess,
    // investmentSummaryFailure,
    handleSeeAllPress,
    handleInvestmentPress,
    handleRetry,
  };
};

export default useInvestmentSummaryViewModel;


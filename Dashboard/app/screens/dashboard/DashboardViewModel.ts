// Generated from Fingent Boilerplate

import { useState, useMemo, useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { DashboardViewModel, DashboardProps } from "./DashboardModel";
// import { navigate } from "utilities/Navigation";
import { NavStates, StatusBarStyles } from "utilities/Constants";
// import { RootState } from 'store/Store';
import { AccountData } from "../templates/accountslist/AccountsListModel";
import { Theme } from "utilities/TenantIndex";
import { UtilitiesFunctions } from "utilities/Helpers";
// import { appActions } from "store/slice/AppSlice";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "context/ThemeContext";
// import { authActions } from "modules/auth/store/slice/AuthSlice";

export default function useDashboardViewModel(_props: DashboardProps): DashboardViewModel {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshHash, setRefreshHash] = useState<string>('');
  // const { policyData, policyDataFailure } = useSelector((state: RootState) => state.app);
  // const { getUserContextData, createSessionData } = useSelector((state: RootState) => state.auth);
  // const dispatch = useDispatch();
  // const { setStatusBarColor, setStatusBarTheme } = useTheme();

  // useFocusEffect(
  //   useCallback(() => {
  //     setStatusBarColor(Theme.Colors.background1);
  //     setStatusBarTheme(StatusBarStyles.light);
  //   }, [setStatusBarColor, setStatusBarTheme]),
  // );
  
  // useEffect(() => {
  //   if(policyData || !getUserContextData?.memberId) {
  //     return;
  //   }
  //   if(getUserContextData?.memberId) {
  //     setLoading(true);
  //     const newRefreshHash = UtilitiesFunctions.generateUUID();
  //     setRefreshHash(newRefreshHash);
  //     const policyRequest = {
  //       memberId: getUserContextData?.memberId
  //     };
  //     dispatch(appActions.getPolicyData(policyRequest));
  //   }
    
  // }, [policyData, createSessionData?.percanaId, getUserContextData?.memberId, dispatch]);


  // useEffect(() => {
  //   if(policyData || policyDataFailure) {
  //     setLoading(false);
  //   }
  // }, [policyData, policyDataFailure]);
  // Map policyData to accounts format
  // const accounts = useMemo((): AccountData[] => {
  //   if (!policyData?.memberPolicySummaryList) return [];
    
  //   return policyData.memberPolicySummaryList.map((policy) => ({
  //     id: policy.policyId?.toString() || policy.planId,
  //     name: policy.planName,
  //     accountNumber: `Account #: ${policy.policyId}`,
  //     amount: policy.policyValue,
  //     currency: policy.policyCurrency,
  //     borderColor: Theme.Colors.primary1,
  //   }));
  // }, [policyData]);

  // Calculate dashboard data with total and valuation date
  const dashboardData = useMemo(() => {
    // Calculate total from policy values
    // const total = policyData?.memberPolicySummaryList?.reduce(
    //   (sum, policy) => sum + (policy.policyValue || 0),
    //   0
    // ) || 0;

    const total = 0; // Placeholder until policyData is available
    // Format current date as dd/mm/yyyy
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const valuationDate = `${day}/${month}/${year}`;

    return {
      total,
      valuationDate,
    };
  }, [
    // policyData
  ]);

  const handleProfilePress = () => {
    // navigate({ name: NavStates.screenNames.profileScreenView });
  };

  const handleAccountPress = (accountId: string) => {
    // dispatch(appActions.setActivePolicyId(Number(accountId)));
    // navigate({ name: NavStates.screenNames.accountsView, params: { accountId } });
  };

  const handleQuestionPress = () => {
    // Add your logic here - e.g., navigate to help screen, show bottom sheet, etc.
  };

  const handleRefresh = (hash: string) => {
    // Generate new refresh hash and trigger data reload
    const newRefreshHash = hash || UtilitiesFunctions.generateUUID();
    setRefreshHash(newRefreshHash);
    // if(getUserContextData?.memberId) {  
    //   setLoading(true);
    //   const policyRequest = {
    //     memberId: getUserContextData?.memberId
    //   };
    //   dispatch(appActions.getPolicyData(policyRequest));
    // }else{
    //   dispatch(authActions.getUserContextData());
    //   dispatch(authActions.createSession());
    // }
  };

  return { 
    loading, 
    setLoading,
    handleProfilePress,
    handleAccountPress,
    handleQuestionPress,
    handleRefresh,
    // accounts,
    // policyDataFailure,
    refreshHash,
    dashboardData,
  };
}


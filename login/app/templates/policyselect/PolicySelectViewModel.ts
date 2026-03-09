// Generated from Fingent Boilerplate

import { useState, useRef, useEffect, useMemo } from "react";
import { PolicySelectViewModel, PolicySelectProps, RootState } from "./PolicySelectModel";
import { BottomSheetRef } from "components/bottomsheet/BottomSheetModel";
import { ListItem } from "components/selectoption/SelectOptionModel";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "store/slice/AppSlice";


export default function usePolicySelectViewModel(_props: PolicySelectProps): PolicySelectViewModel {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>();
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const dispatch = useDispatch();
  const {policyData, activePolicyId} = useSelector((state: RootState) => state.app);
  const {getUserContextData, createSessionData} = useSelector((state: RootState) => state.auth);
  
  useEffect(() => {
    if(policyData || !getUserContextData?.memberId) {
      return;
    }
    if(getUserContextData?.memberId) {
      const policyRequest = {
        memberId: getUserContextData?.memberId
      };
      dispatch(appActions.getPolicyData(policyRequest));
    }
  }, [policyData, createSessionData?.percanaId, getUserContextData?.memberId, dispatch]);

  useEffect(() => {
    if(policyData?.memberPolicySummaryList?.length > 0) {
      // Access policyId from the raw policy data structure
      const firstPolicy = policyData.memberPolicySummaryList[0] as any;
      setSelectedItem(firstPolicy?.policyId || null);
    }
  }, [policyData]);
  
  const handleItemSelect = (item: ListItem) => {
    setSelectedItem(item.itemId || null);
    console.log('Policy selected:', item);
  };

  const handleDonePress = (itemId: number | null) => {
    if (itemId !== null) {
      dispatch(appActions.setActivePolicyId(itemId));
    }
    // Close the bottom sheet
    bottomSheetRef?.current?.collapse();
  };

  // Transform policy data to generic ListItem format
  const transformedList: ListItem[] = useMemo(() => {
    if (!policyData?.memberPolicySummaryList) {
      return [];
    }
    return policyData.memberPolicySummaryList.map((policy: any) => ({
      id: policy.policyId ?? null,
      title: policy.planName || '',
      status: policy.policyStatus || '',
      currency: policy.policyCurrency,
      value: policy.policyValue,
      description: `ID: ${policy.policyId}`,
    }));
  }, [policyData]);

  return { 
    loading, 
    setLoading, 
    bottomSheetRef,
    selectedItem: selectedItem ?? null,
    activePolicyId: activePolicyId ?? null,
    transformedList,
    handleItemSelect,
    handleDonePress,
    policyData
  };
}

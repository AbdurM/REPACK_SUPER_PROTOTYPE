// Generated from Fingent Boilerplate

import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { ChartViewModel, ChartProps, DurationType } from "./ChartModel";
// import { accountActions } from "modules/accounts/store/slice/accountsSlice";
// import { RootState } from "store/Store";
// import { PensionDataItem } from "modules/accounts/store/models/PensionSummaryModel";
import { useEffectFetchOnScheme } from 'services/UseEffectFetchOnScheme';
// import { useIsFocused } from '@react-navigation/native';

export default function useChartViewModel(_props: ChartProps): ChartViewModel {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedDuration, setSelectedDuration] = useState<DurationType>('3M');
  // const { createSessionData } = useSelector((state: RootState) => state.auth);
  // const { activePolicyId } = useSelector((state: RootState) => state.app);
  // const { pensionSummarySuccess } = useSelector((state: RootState) => state.account);
  // const [filteredPensionData, setFilteredPensionData] = useState<PensionDataItem>({} as PensionDataItem);
  // const isFocused = useIsFocused(); // to check if the screen is focused
  
  // Fetch pension summary on component load
  // useEffectFetchOnScheme(activePolicyId, () => {
  //   if (createSessionData && activePolicyId && isFocused) {
  //     dispatch(accountActions.clearPensionSummaryData());
  //     setLoading(true);
  //     dispatch(accountActions.getPensionSummary());
  //   }
  // }, [createSessionData]);

  // useEffect(() => {
  //   setFilteredPensionData(getFilteredPensionData());
  // }, [pensionSummarySuccess, selectedDuration]);

  const handleDurationChange = (duration: DurationType) => {
    setSelectedDuration(duration);
  };

  // const getFilteredPensionData = () => {
  //   const allData = pensionSummarySuccess?.data || [];
  //   const selectedData = allData.find((item) => item.name === selectedDuration.toLowerCase());
  //   return selectedData || {} as PensionDataItem || [];
  // };

  return { 
    loading, 
    setLoading, 
    selectedDuration, 
    setSelectedDuration,
    // pensionSummaryData: pensionSummarySuccess?.data ?? [],
    handleDurationChange,
    // filteredPensionData
  };
}
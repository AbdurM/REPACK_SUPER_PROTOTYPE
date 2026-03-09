// Generated from Fingent Boilerplate

import { useState, useMemo, useEffect, useCallback } from "react";
import { DashboardViewModel, DashboardProps } from "./DashboardModel";
import { useNavigation } from '@react-navigation/native';

export default function useDashboardViewModel(_props: DashboardProps): DashboardViewModel {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshHash, setRefreshHash] = useState<string>('');
  const navigation = useNavigation<any>();

  const handleAccountPress = () => {
    navigation.navigate('DetailsView');
  };


  return { 
    loading, 
    setLoading,
    handleAccountPress,
  };
}


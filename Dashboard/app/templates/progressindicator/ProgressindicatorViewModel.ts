// Generated from Fingent Boilerplate

import { useState, useEffect, useMemo } from "react";
import { ProgressindicatorViewModel, ProgressindicatorProps } from "./ProgressindicatorModel";

export default function useProgressindicatorViewModel(props: ProgressindicatorProps): ProgressindicatorViewModel {
  const [loading, setLoading] = useState<boolean>(false);

  // Calculate progress percentage based on value and min/max values
  const progressPercentage = useMemo(() => {
    const { value = 0, minimumValue = 0, maximumValue = 100 } = props;
    
    // Ensure value is within bounds
    const clampedValue = Math.max(minimumValue, Math.min(maximumValue, value));
    
    // Calculate percentage
    const range = maximumValue - minimumValue;
    if (range <= 0) return 0;
    
    return ((clampedValue - minimumValue) / range) * 100;
  }, [props]);


  useEffect(() => {
    // component Initialization
    setLoading(false);
  }, []);

  return { 
    loading, 
    setLoading,
    progressPercentage
  };
}
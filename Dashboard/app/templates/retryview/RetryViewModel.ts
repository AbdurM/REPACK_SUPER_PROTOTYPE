// Generated from Fingent Boilerplate

import { useState, useEffect } from "react";
import { RetryViewModel, RetryProps } from "./RetryModel";

export default function useRetryViewModel(props: RetryProps): RetryViewModel {
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    // component Initialization
  }, []);

  const handleRetry = () => {
    // Call the onRetry prop if provided
    if (props.onRetry) {
      props.onRetry();
    }
  };

  return { 
    handleRetry,
    loading,
    setLoading,
  };
}

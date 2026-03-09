// Generated from Fingent Boilerplate | 2025-09-09 | Jerrin Thomas

import { useState, useEffect } from "react";
import { SearchInputViewModel, SearchInputProps, defaultProps } from "./SearchInputModel";

export default function useSearchInputViewModel(props: SearchInputProps): SearchInputViewModel {
  const { keyValue } = { ...defaultProps, ...props };
  // const [loading, setLoading] = useState<boolean>(true);


  const onChangeText = (event: any) => {
    // Handle text change if needed
    props?.onChangeText && props?.onChangeText(event.nativeEvent.text);
  };

  return { onChangeText, keyValue };
}

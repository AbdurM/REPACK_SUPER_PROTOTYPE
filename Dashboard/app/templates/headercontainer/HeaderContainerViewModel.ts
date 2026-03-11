// Generated from Fingent Boilerplate

import { useState } from "react";
import { HeaderContainerViewModel, HeaderContainerProps } from "./HeaderContainerModel";

export default function useHeaderContainerViewModel(props: HeaderContainerProps): HeaderContainerViewModel {
  const [loading, setLoading] = useState<boolean>(false);

  return { 
    loading, 
    setLoading,
  };
}

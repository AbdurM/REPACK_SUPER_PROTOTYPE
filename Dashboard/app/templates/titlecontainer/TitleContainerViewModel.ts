// Generated from Fingent Boilerplate

import { useState, useEffect } from "react";
import { TitleContainerViewModel, TitleContainerProps } from "./TitleContainerModel";

export default function useTitleContainerViewModel(props: TitleContainerProps): TitleContainerViewModel {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // component Initialization
  }, []);

  return { loading, setLoading };
}
// Generated from Fingent Boilerplate

import { useState, useEffect } from "react";
import { OptionsListViewModel, OptionsListProps } from "./OptionsListModel";

export default function useOptionsListViewModel(props: OptionsListProps): OptionsListViewModel {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // component Initialization
  }, []);

  return { loading, setLoading };
}
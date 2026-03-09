// Generated from Fingent Boilerplate

import { useState, useEffect } from "react";
import { LandingScreenBottomsheetViewModel, LandingScreenBottomsheetProps } from "./LandingScreenBottomsheetModel";

export default function useLandingScreenBottomsheetViewModel(props: LandingScreenBottomsheetProps): LandingScreenBottomsheetViewModel {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // component Initialization
  }, []);

  return { loading, setLoading };
}
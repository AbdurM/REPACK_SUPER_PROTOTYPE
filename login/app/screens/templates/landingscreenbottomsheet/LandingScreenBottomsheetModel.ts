// Generated from Fingent Boilerplate

import { RefObject } from 'react';
import { BottomSheetRef } from 'components/bottomsheet/BottomSheetModel';

interface LandingScreenBottomsheetViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LandingScreenBottomsheetProps {
  keyValue?: string;
  bottomSheetRef?: RefObject<BottomSheetRef>;
  onPressClose?: () => void;
  confirmBiometric?: () => void;
  setLoginMode?: (mode: string) => void;
  images?: any;
}

// Default props
const defaultProps: LandingScreenBottomsheetProps = {
  keyValue: "LandingScreenBottomsheet",
  onPressClose: () => {},
  confirmBiometric: () => {},
  setLoginMode: () => {},
  images: undefined,
};

export type { LandingScreenBottomsheetProps, LandingScreenBottomsheetViewModel };
export { defaultProps };
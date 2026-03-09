// generated from template

import { BottomSheetRef } from "../../components/bottomsheet/BottomSheetModel";

interface LandingscreenViewModelProps {
  onPressLogIn: () => void;
  openBottomSheet: () => void;
  confirmBiometric: () => void;
  onPressClose: () => void;
  bottomSheetRef: React.RefObject<BottomSheetRef> | undefined;
  loading: boolean;
  setLoginMode: (loginMode: string) => void;
  openWebPage?: () => void;
}

interface LandingscreenParams {
  email: string;
  password: string;
  remember_me: number;
}

interface UrlParams {
  id: number;
  count: number;
}

interface LandingscreenPayload {
  params: LandingscreenParams;
  urlParams: UrlParams;
}

interface LandingscreenViewModel {
  onPressLogIn: () => void;
  doBiometricsAuth: () => void;
  onPressClose: () => void;
  bottomSheetRef: React.RefObject<BottomSheetRef> | undefined;
  confirmBiometric: () => void;
  openBottomSheet: () => void;
  loading: boolean;
  setLoginMode: (loginMode: string) => void;
  openWebPage?: () => void;
}

const defaultProps: LandingscreenViewProps = {
  keyValue: "LandingscreenView",
  bottomSheetRef: undefined,
  loading: false,
  setLoading: undefined,
  images: undefined,
  onTokenReceived: undefined,
}
interface LandingscreenViewProps {
  keyValue?: string;
  bottomSheetRef: React.RefObject<BottomSheetRef> | undefined;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  onPressLogIn?: () => void;
  openBottomSheet?: () => void;
  confirmBiometric?: () => void;
  onPressClose?: () => void;
  setLoginMode?: (loginMode: string) => void;
  openWebPage?: () => void;
  images?: any;
  onTokenReceived?: (token: string) => void;
}

interface UserModel {

};

// example model for flashlist item
type ProductItemProps = {
  title: string;
  description: string;
  image: any;
};

export type { LandingscreenViewModelProps,LandingscreenViewProps,LandingscreenViewModel,UserModel,LandingscreenPayload , ProductItemProps};
export { defaultProps };
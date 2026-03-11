// Generated from Fingent Boilerplate

import { BottomSheetRef } from "components/bottomsheet/BottomSheetModel";
import { ListItem } from "components/selectoption/SelectOptionModel";
import { ViewStyle } from "react-native";
import { CreateSessionDataModel } from "modules/auth/store/models/CreateSession";
import { PolicyDataModel } from "store/models/GetPolicyData";
import { UserContextDataModel } from "modules/auth/store/models/GetUserContextData";
import { Theme } from "utilities/TenantIndex";

interface PolicySelectViewModel {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  bottomSheetRef: React.RefObject<BottomSheetRef | null>;
  selectedItem: number | null;
  activePolicyId: number | null;
  transformedList: ListItem[];
  handleItemSelect: (item: ListItem) => void;
  handleDonePress: (itemId: number | null) => void;
  policyData: PolicyDataModel;
}

interface PolicySelectProps {
  keyValue?: string;
  style?: ViewStyle;
  color?: string;
  borderColor?: string;
  placeholder?: string;
  bottomSheetTitle?: string;
  list?: ListItem[];
}

interface AppState {
  policyData: PolicyDataModel;
  activePolicyId: number | null;
}
interface AuthState {
  getUserContextData: UserContextDataModel;
  createSessionData: CreateSessionDataModel;
}
interface RootState {
  app: AppState;
  auth: AuthState;
}

// Sample list data for policy selection
const policyListData: ListItem[] = [
  {
    planId: '1',
    policyId: 1234567890,
    planName: 'ABC International Plan',
    policyCurrency: 'USD',
    policyStatus: 'Active',
    policyValue: 100000,
  },
  {
    planId: '2', 
    policyId: 1234567890,
    planName: 'ABC Solutions Plan',
    policyCurrency: 'USD',
    policyStatus: 'Active',
    policyValue: 100000,
  },
  {
    planId: '3',
    policyId: 1234567890,
    planName: 'Sailtech Unlimited',
    policyCurrency: 'USD',
    policyStatus: 'Pending',
    policyValue: 100000,
  },
];

// Default props
const defaultProps: PolicySelectProps = {
  keyValue: "policy-select",
  color: Theme.Colors.neutral10,
  borderColor: Theme.Colors.neutral4,
  placeholder: "Select an option",
  bottomSheetTitle: "SELECT POLICY",
};

export type { PolicySelectProps, PolicySelectViewModel, RootState };
export { defaultProps, policyListData };

// Generated from Fingent Boilerplate

import { ViewStyle } from "react-native";
import { Strings } from 'utilities/TenantIndex';

interface EmployerMandatoryProps {
  keyValue?: string;
  title?: string;
  fundsCount?: number;
  onPress?: () => void;
  iconName?: string;
  style?: ViewStyle[] | ViewStyle;
  [key: string]: any;
}

interface EmployerMandatoryViewModel {
  handlePress: () => void;
}

// MANDATORY: Default props
const defaultProps: EmployerMandatoryProps = {
  keyValue: "",
  title: Strings.accountsPage.employerMandatory,
  fundsCount: 0,
  iconName: "NOUN_INVESTMENT",
  onPress: () => {},
};

export type { EmployerMandatoryProps, EmployerMandatoryViewModel };
export { defaultProps };
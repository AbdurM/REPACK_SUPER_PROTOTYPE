// Generated from Fingent Boilerplate

import { ErrorModel } from "services/ServicesModels";
import { InvestmentSummaryDataModel } from "modules/accounts/store/models/InvestmentSummaryModel";

interface InvestmentSummaryProps {
  keyValue?: string;
  investments?: InvestmentSummaryItemData[];
  title?: string;
  onSeeAllPress?: () => void;
  onInvestmentPress?: () => void;
  [key: string]: any;
}

interface InvestmentSummaryViewModel {
  investments: InvestmentSummaryItemData[];
  investmentSummaryData: InvestmentSummaryDataModel | null;
  handleSeeAllPress: () => void;
  handleInvestmentPress: () => void;
  investmentSummaryFailure: ErrorModel | null;
  handleRetry: () => void;
}

interface InvestmentSummaryItemData {
  id: string;
  title: string;
  fundsInvested: number;
  type: 'employer_mandatory' | 'employer_voluntary' | 'employee_voluntary';
  iconName: string;
}

const InvestmentIcons = {
  "Employer Mandatory": "NOUN_EMPLOYER",
  "Employer Voluntary": "NOUN_COINS",
  "Employee Voluntary": "NOUN_INVESTMENT",
  "Employer Rollover": "NOUN_INVESTMENT",
};

// MANDATORY: Default props
const defaultProps: InvestmentSummaryProps = {
  keyValue: "",
  investments: [],
  title: "",
  onSeeAllPress: () => {},
  onInvestmentPress: () => {},
};

export type { InvestmentSummaryProps, InvestmentSummaryViewModel, InvestmentSummaryItemData };
export { defaultProps, InvestmentIcons };


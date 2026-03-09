// Generated from Fingent Boilerplate

interface FundsCountBadgeProps {
  keyValue?: string;
  content?: string;
  backgroundColor?: string;
  textColor?: string;
  minWidth?: number;
  variant?: string;
  [key: string]: any;
}

interface FundsCountBadgeViewModel {
  displayCount: string | number;
  badgeStyle: any;
}

// MANDATORY: Default props
const defaultProps: FundsCountBadgeProps = {
  keyValue: "",
  content: "0",
  backgroundColor: undefined, // Will use theme default
  textColor: undefined, // Will use theme default
  minWidth: undefined, // Will use style default
  variant: 'body_s_n1',
};

export type { FundsCountBadgeProps, FundsCountBadgeViewModel };
export { defaultProps };
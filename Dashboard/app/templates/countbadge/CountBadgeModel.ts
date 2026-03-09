// Generated from Fingent Boilerplate

interface CountBadgeProps {
  keyValue?: string;
  count?: number;
  content?: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: string;
  style?: any;
  [key: string]: any;
}

interface CountBadgeViewModel {
  // ONLY functions and state values
}

// Static data for mock/template purposes - PascalCase
const MockCountBadgeData = {
  count: 5,
  content: "5",
  backgroundColor: "#007AFF",
  textColor: "#FFFFFF",
  variant: "body_s_n1",
};

// MANDATORY: Default props (should be minimal/empty values)
const defaultProps: CountBadgeProps = {
  keyValue: "",
  count: 0,
  content: "",
  backgroundColor: undefined,
  textColor: undefined,
  variant: "body_s_n1",
  style: undefined,
};

export type { CountBadgeProps, CountBadgeViewModel };
export { 
  defaultProps, 
  MockCountBadgeData
};

import { ViewStyle, TextStyle } from "react-native";

//-------- Styles--------//
interface GlobalStylesProps {
    container: ViewStyle;
    flexGrow: ViewStyle;
    row: ViewStyle;
    // elevatedShadow: ViewStyle;
    cardShadow: ViewStyle;
    flex: ViewStyle;
  };

interface TypographyStylesProps {
  defaultTextStyle: TextStyle;
  n1: TextStyle;
  n2: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  h7: TextStyle;
  h8: TextStyle;
  body_l_n1: TextStyle;
  body_l_n2: TextStyle;
  body_l_n3: TextStyle;
  body_m_n1: TextStyle;
  body_m_n2: TextStyle;
  body_m_n3: TextStyle;
  body_s_n1: TextStyle;
  body_s_n2: TextStyle;
  bodys_n3: TextStyle;
  largeBtn: TextStyle;
  formHeader: TextStyle;
  link: TextStyle;
  status: TextStyle;
}

interface BottomTabStylesProps {
  tabBarStyle: ViewStyle;
}

//-------- FontSize & LineHeight--------//

interface FontSizeProps {
  ten: number;
  eleven: number;
  twelve: number;
  thirteen: number;
  fourteen: number;
  fifteen: number;
  sixteen: number;
  seventeen: number;
  eighteen: number;
  twenty: number;
  twentTwo: number;
  twentyFour: number;
  twentySix: number;
  twentyEight: number;
  thirty: number;
  thirtyTwo: number;
  fiftyTwo: number;
  fourtyTwo: number;
}

interface LineHeightProps {
  n: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  h7: number;
  h8: number;
  bn1: number;
  bn2: number;
  bn3: number;
  bn4: number;
}

// export type {GlobalStylesProps, FontSizeProps};
//-------- Constants --------//
interface ConstantsProps {
  gender: any[];
  defaultPageSize: Record<string, any>;
  months: string[];
  weekDays: string[];
  biometricAutenticationErrors: Record<string, any>;
  countryCode: Record<string, string>;
}
interface StatusBarStylesProp {
  default: 'default';
  light: 'light-content';
  dark: 'dark-content';
}

//-------- Endpoints --------//
type EndpointProps = Record <string, string>;

//-------- Navigation --------//
type AuthStackParamList = {
  SignInView: undefined;
  LandingScreenView: undefined;
  SplashScreenView: undefined;
};
interface AuthStackNavigatorProps {
  initialRouteName?: keyof AuthStackParamList;
}

type AppStackParamList = {
  LandingScreenView: undefined;
  DashboardView: undefined;
};
interface AppStackNavigatorProps {
  initialRouteName?: keyof AppStackParamList;
}

type HomeStackParamList = {
  HomePage: undefined;
  AuthStack: undefined;
  HomeTab: undefined;
  BeneficiariesStack: undefined;
};
interface HomeStackNavigatorProps {
  initialRouteName?: keyof HomeStackParamList;
}

type AccountsTabStackParamList = {
  AccountsView: undefined;
  AccountDetailsView: undefined;
  MonthlyContributionSummaryView: undefined;
};
interface AccountsTabStackNavigatorProps {
  initialRouteName?: keyof AccountsTabStackParamList;
}

type DashboardTabStackParamList = {
  DashboardView: undefined;
  AccountsView: undefined;
};
interface DashboardTabStackNavigatorProps {
  initialRouteName?: keyof DashboardTabStackParamList;
}

type InvestmentsTabStackParamList = {
  InvestmentsView: undefined;
};
interface InvestmentsTabStackNavigatorProps {
  initialRouteName?: keyof InvestmentsTabStackParamList;
}

type ContributionsTabStackParamList = {
  ContributionsView: undefined;
  ContributionsListView: undefined;
};
interface ContributionsTabStackNavigatorProps {
  initialRouteName?: keyof ContributionsTabStackParamList;
}

type HistoryTabStackParamList = {
  HistoryView: undefined;
};
interface HistoryTabStackNavigatorProps {
  initialRouteName?: keyof HistoryTabStackParamList;
}

type MoreTabStackParamList = {
  MoreView: undefined;
  DocumentsView: undefined;
  PersonalDetailsView: undefined;
  BeneficiaryDetailsView: undefined;
  CommunicationPreferencesView: undefined;
  ProfileScreenView: undefined;
};
interface MoreTabStackNavigatorProps {
  initialRouteName?: keyof MoreTabStackParamList;
}

type BeneficiariesStackParamList = {
  BeneficiariesPageView: undefined;
  BeneficiaryDetailsView: undefined;
};
interface BeneficiariesStackNavigatorProps {
  initialRouteName?: keyof BeneficiariesStackParamList;
}

//--------Helper --------//
interface NavigationState {
  index: number;
  routes: { name: string }[];
}

interface Navigation {
  getState: () => NavigationState;
}
interface GenerateKeyProps {
  password: string;
  salt: string;
  cost: number;
  length: number;
}
interface GMapProps {
  latitude: string;
  longitude: string;
}
interface EncryptedData {
  cipher: string;
  iv: string;
}

interface DecryptDataProps {
  encryptedData: EncryptedData;
  key: string;
}

interface EncryptDataProps {
  text: string;
  key: string;
  iv: string;
}

interface UrlAppend {
  baseUrl: string;
  url: string;
}

type ThemeColors = {
  primary1: string;
  primary2: string;
  primary3: string;

  secondary1: string;
  secondary2: string;
  secondary3: string;
  secondary4: string;

  semantic1: string;
  semantic2: string;
  semantic3: string;
  semantic4: string;

  informational1: string;
  informational2: string;

  warning1: string;
  warning2: string;
  warning3: string;
  error1: string;
  error2: string;
  error3: string;

  neutral1: string;
  neutral2: string;
  neutral3: string;
  neutral4: string;
  neutral5: string;
  neutral6: string;
  neutral7: string;
  neutral8: string;
  neutral9: string;
  neutral10: string;

  background1: string;
  background2: string;
  background3: string;
  background4: string;
  
  activeState: string;
  pieChartColors: string[];
  policyStatusColors: {
    Active: string;
    Pending: string;
  };
  investmentSummaryColors: string[];
}

interface NavStatesProps {
  readonly tabNames: Record<string, any>;
  readonly stackNames: Record<string, any>;
  readonly screenNames: Record<string, any>;
}

interface CustomTabButtonProps {
  readonly route: any;
  readonly [key: string]: any; // This allows for any additional props
}
interface NavigationModel {
  navigate: (state: string) => void;
  dispatch: any;
  reset: any;
  getState: () => NavigationState;
}

type LogoutType = 'soft' | 'hard';
interface LogoutTypeProps {
  [key: string]: LogoutType;
}

export type {
  AuthStackNavigatorProps,
  AuthStackParamList,
  AppStackNavigatorProps,
  AppStackParamList,
  HomeStackNavigatorProps,
  HomeStackParamList,
  AccountsTabStackParamList,
  AccountsTabStackNavigatorProps,
  DashboardTabStackParamList,
  DashboardTabStackNavigatorProps,
  InvestmentsTabStackParamList,
  InvestmentsTabStackNavigatorProps,
  ContributionsTabStackParamList,
  ContributionsTabStackNavigatorProps,
  HistoryTabStackParamList,
  HistoryTabStackNavigatorProps,
  MoreTabStackParamList,
  MoreTabStackNavigatorProps,
  BeneficiariesStackParamList,
  BeneficiariesStackNavigatorProps,
  ConstantsProps,
  StatusBarStylesProp,
  EndpointProps,
  Navigation,
  GenerateKeyProps,
  GMapProps,
  DecryptDataProps,
  EncryptDataProps,
  EncryptedData,
  UrlAppend,
  ThemeColors,
  GlobalStylesProps,
  FontSizeProps,
  LineHeightProps,
  TypographyStylesProps,
  BottomTabStylesProps,
  NavStatesProps,
  CustomTabButtonProps,
  NavigationModel,
  LogoutTypeProps,
  LogoutType,
};

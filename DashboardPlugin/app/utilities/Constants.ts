// import { UtilitiesFunctions } from './tenants/uae/Utilities.uae';
import {
  ConstantsProps,
  NavStatesProps,
  StatusBarStylesProp,
  LogoutTypeProps,
} from './UtilitiesModel';

export const Constants: ConstantsProps = {
  gender: [
    { value: 0, name: 'Male' },
    { value: 1, name: 'Female' },
    { value: 2, name: 'Non-binary' },
    { value: 3, name: 'Prefer not to answer' },
  ],
  defaultPageSize: { pageSize: 10 },
  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  weekDays: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  biometricAutenticationErrors: {
    noneEnrolled: 'BIOMETRIC_ERROR_NONE_ENROLLED',
  },
  countryCode: {
    uae: '+971',
  },
};

export const StatusBarStyles: StatusBarStylesProp = {
  default: 'default',
  light: 'light-content',
  dark: 'dark-content',
};

export const NavStates: NavStatesProps = {
  tabNames: {
    homeTab: 'HomeTab',
  },
  stackNames: {
    authStack: 'AuthStack',
    homeStack: 'HomeStack',
    accountsTabStack: 'AccountsTabStack',
    dashboardTabStack: 'DashboardTabStack',
    investmentsTabStack: 'InvestmentsTabStack',
    contributionsTabStack: 'ContributionsTabStack',
    historyTabStack: 'HistoryTabStack',
    moreTabStack: 'MoreTabStack',
    beneficiariesStack: 'BeneficiariesStack',
  },
  screenNames: {
    landingScreenView: 'LandingScreenView',
    signInView: 'SignInView',
    splashScreenView: 'SplashScreenView',
    accountsView: 'AccountsView',
    accountDetailsView: 'AccountDetailsView',
    monthlyContributionSummary: 'MonthlyContributionSummaryView',
    homePage: 'HomePage',
    dashboardView: 'DashboardView',
    investmentsView: 'InvestmentsView',
    fundAllocationView: 'FundAllocationView',
    contributionsView: 'ContributionsView',
    historyView: 'HistoryView',
    moreView: 'MoreView',
    documentsView: 'DocumentsView',
    contributionsListView: 'ContributionsListView',
    personalDetailsView: 'PersonalDetailsView',
    beneficiariesPageView: 'BeneficiariesPageView',
    beneficiaryDetailsView: 'BeneficiaryDetailsView',
    communicationPreferencesView: 'CommunicationPreferencesView',
    profileScreenView: 'ProfileScreenView',
    bankDetailsView: 'BankDetailsView',
  },
};

export const LogoutTypes: LogoutTypeProps = {
  soft: 'soft',
  hard: 'hard',
};

export const ErrorMessages = {
  abort: ['Aborted'],
  noData: ['Sorry, empty response received from Bluedoor'],
  network: ['Network request failed', 'Network Error'],
  refreshToken: ['Failed to refresh token'],
  token: ['invalid signature', 'Unauthorized', 'UNAUTHENTICATED'],
};

export const AppInactiveTime: number = 60; // in minutes

export const RequestConstants = {
  managementCompanyId: '500202',
  managementCo: '500202',
  operatorId: 'uk-digital',
  locale: 'en-GB',
  role: 'BO',
  timeout: 120,
};

export const DocumentTitles = {
  prospectus: 'Prospectus.pdf',
  prospectusArabic: 'Prospectus(Arabic).pdf',
  userGuide: 'UserGuide.pdf',
}

export interface AppConfig {
  plugins: {
    bottomTabPlugins: string[];
    otherPlugins: string[];
  };
  authPluginSettings: {
    isRegisterButtonVisible: boolean;
    content: {
      usernameLabel: string;
      passwordLabel: string;
    };
  };
  dashboardPluginSettings: {
    balanceFYInfo: { visible: boolean };
    accountActions: { visible: boolean };
    contributionsCard: { visible: boolean };
  };
  transactionsPluginSettings: {
    headingCard: {
      visible: boolean;
      content: {
        title: string;
        subtitle: string;
      };
    };
  };
}

export interface RavenConfigResponse {
  id: string;
  application: string;
  environment: string;
  label: string;
  version: number;
  createdAt: string;
  lastModifiedAt: string;
  managementCompany: string;
  name: string;
  type: string | null;
  value: string;
}
export interface AppConfig {
  plugins: {
    bottomTabPlugins: string[];
  };
  dashboardPluginSettings: {
    balanceFYInfo: { visible: boolean };
    accountActions: { visible: boolean };
    contributionsCard: { visible: boolean };
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
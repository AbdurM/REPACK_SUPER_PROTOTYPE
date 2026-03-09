/**
 * Application Configuration
 * Central configuration file for managing plugins and their settings
 */

export type ChartType = 'BAR' | 'LINE';

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
    chart: {
      type: ChartType;
      visible: boolean;
    };
    balanceFYInfo: {
      visible: boolean;
    };
    accountActions: {
      visible: boolean;
    };
    contributionsCard: {
      visible: boolean;
    };
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

const appConfig: AppConfig = {
  plugins: {
    bottomTabPlugins: ['DashboardPlugin', 'TransactionsPlugin', 'ProfilePlugin'],
    otherPlugins: ['AuthPlugin'],
  },
  authPluginSettings: {
    isRegisterButtonVisible: false,
    content: {
      usernameLabel: 'Member number or Email address',
      passwordLabel: 'Password',
    },
  },
  dashboardPluginSettings: {
    chart: {
      type: 'LINE',
      visible: true,
    },
    balanceFYInfo: {
      visible: true,
    },
    accountActions: {
      visible: true,
    },
    contributionsCard: {
      visible: true,
    },
  },
  transactionsPluginSettings: {
    headingCard: {
      visible: true,
      content: {
        title: 'Transactions',
        subtitle: 'For transactions over 12 months, please visit the website.',
      },
    },
  },
};

export default appConfig;

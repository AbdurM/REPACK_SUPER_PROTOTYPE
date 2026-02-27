//this needs to be added to the config as well at somepoint. The reason why it has not been add it now is
//because remoteConfig needs to match what we have provided to the raven team. 
export const dynamicUrls = {
  remotes: {
    TransactionsPlugin: {
      baseUrl: 'http://localhost:9000/[platform]',
    },
    ProfilePlugin: {
      baseUrl: 'http://localhost:9001/[platform]',
    },
    AuthPlugin: {
      baseUrl: 'http://localhost:9002/[platform]',
    },
  }
};

export const config =
{
  plugins: {
    bottomTabPlugins: [
      "DashboardPlugin",
      "TransactionsPlugin",
      "ProfilePlugin"
    ],
    otherPlugins:["AuthPlugin"] 
  },
  dashboardPluginSettings: {
    cardVisible: true,
  },
  authPluginSettings: {
    primaryColour: '#00000',
    isRegisterBtnVisible: true,
    content: {
      usernameLabel: "Member number/Email address",
      passwordLabel: "Password",
    },
  },
  transactionsPluginSettings: {
    isHeaderVisible: true,
    content: {
      title: "Transactions",
      subtitle: "For transactions over 12 months, please visit the website.",
    },
  }
}

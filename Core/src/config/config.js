export const config = {
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
  },
  plugins: {
    bottomTabPlugins: ['TransactionsPlugin', 'ProfilePlugin'],
    otherPlugins: ['AuthPlugin'],
  },
  transactionsPluginSettings: {
    isHeaderVisible: true,
    content: {
      title: 'Transactions',
      subtitle: 'For transactions over 12 months, please visit the website.',
    },
  },
};

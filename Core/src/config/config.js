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
    DashboardPlugin: {
      baseUrl: 'http://localhost:9003/[platform]',
    },
  }
};
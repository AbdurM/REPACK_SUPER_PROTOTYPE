//this needs to be added to the config as well at somepoint. The reason why it has not been add it now is
//because remoteConfig needs to match what we have provided to the raven team. 
export const dynamicUrls = {
  remotes: {
    DashboardPlugin: {
      baseUrl: 'http://localhost:9003/[platform]',
    },
  }
};
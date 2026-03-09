import {authorize, refresh} from 'react-native-app-auth';
import Config from 'react-native-config';
import {TenantConstants} from '../utilities/TenantIndex';

const config = {
  // issuer: 'https://identity-server.dev.iam.ifdsfs.com/jhi',
  // redirectUrl: 'jhiapp:/oauthredirect',
  // issuer: 'https://identity-server.uat.iam.ifdsfs.com/bmo',
  // redirectUrl: 'ctiapp:/oauthredirect',
  // clientId: 'bmo-mobile-app',
  issuer: `${Config.IDENTITY_SERVER}${Config.TENANT_KEY}`,
  redirectUrl: TenantConstants.Uri.RedirectUrl,
  clientId: Config.CIAM_CLIENTID,
  scopes: [
    'openid',
    'profile',
    'offline_access',
    'apollo-graphql',
  ],
  additionalParameters: {prompt: 'login'},
};

export const refreshAuthToken = async (token: string) => {
  let _result = null;
  try {
    // Assuming refresh() is an asynchronous function that returns a promise
    _result = await refresh(config, {
      refreshToken: token,
    });
  } catch (error) {
    _result = null;
  }
  return _result;
};

export const appAuthLogin = async () => {
  let _result = null;
  try {
    _result = await authorize(config);
  } catch (error) {
    console.log('error', error);
    _result = null;
  }
  return _result;
};
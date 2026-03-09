import axios, { AxiosHeaderValue } from 'axios';
// import {Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { CustomToastView } from 'components/customtoast/CustomToastView';
import Config from 'react-native-config';
import { Strings } from 'utilities/TenantIndex';
// import {EndPoints} from 'utilities/EndPoints';
// import {getData, removeData, setData} from 'services/StorageService';
import { tokenRefreshService } from './TokenRefreshService';
import { setGraphqlHeaders } from './GraphQLService';
import { ErrorMessages } from 'utilities/Constants';
// import {appActions} from 'store/sagaSlice/appSlice';

axios.create();

axios.defaults.baseURL = Config.IDENTITY_SERVER;
axios.defaults.headers.common.Authorization = null;

axios.interceptors.response.use(response => {
  // remoteLoggerAxios({ response }); //  use remote logger only in qa and dev only not use in uat and production
  return response;
});

axios.interceptors.response.use(
  response => {
    // console.log(`[Axios Response - ${response.config.url}]`, response);
    return response;
  },
  async error => {
    // console.log('<-Interceptors Response Failure->\n', error);
    const dataReturn = await refreshToken(error);
    return dataReturn;
  },
);

export const checkNetworkState = async () => {
  const networkState = await NetInfo.fetch();
  if (!networkState.isConnected) {
    CustomToastView({
      heading: Strings.connectionerror.title,
      msg: Strings.connectionerror.errormessage,
    });
  }
  return networkState;
};

const exclusionPoints: string[] = [
  // `${Config.IFDSFSURL}${EndPoints.digitalMarker}`,
  // `${Config.IFDSFSURL}/api/${payload.userID}${EndPoints.addBankAccount}`
  // 'https://graphql.stage.kea.ifdsfs.com/api/10239399/verify-and-add-bank-account',
];

/**
 * Axios response interceptor for handling 401 errors
 * Uses TokenRefreshService for single-flight refresh mechanism
 *
 * Flow:
 * 1. Detect 401 error
 * 2. Call TokenRefreshService.getValidToken() - waits if refresh in progress
 * 3. Update Axios headers with new token
 * 4. Update GraphQL headers
 * 5. Retry the original request
 * 6. On failure, TokenRefreshService handles logout automatically
 */
export const refreshToken = async (error: any) => {
  const originalRequest = error.config;

  // Check if this is a 401 error and not in exclusion list
  if (
    error?.response?.status === 401 &&
    !exclusionPoints.includes(error.config.url)
  ) {
    // console.log(
    //   '[Axios Interceptor] 401 detected, requesting token refresh...',
    // );

    // Get valid token - will wait if another request is already refreshing
    const newToken = await tokenRefreshService.getValidToken();

    if (newToken?.accessToken) {
      // console.log('[Axios Interceptor] Token refreshed, retrying request...');

      // Update Axios headers for this request
      originalRequest.headers.Authorization = `Bearer ${newToken.accessToken}`;
      // originalRequest.headers.jwt = newToken.accessToken;

      // Update default Axios headers for future requests
      setAxiosToken(newToken.accessToken);

      // Update GraphQL headers
      setGraphqlHeaders(newToken.accessToken);

      // Retry the original request with new token
      return axios(originalRequest);
    } else {
      // Token refresh failed - TokenRefreshService already handled logout
      // console.error('[Axios Interceptor] Token refresh failed');
      return Promise.reject(new Error(ErrorMessages.refreshToken[0]));
    }
  } else {
    // Not a 401 or in exclusion list - pass through
    return Promise.reject(error);
  }
};

export const generateUrl = (
  url: string,
  params: Record<string, string>,
): string => {
  let urlCopy = url;
  for (const [key, value] of Object.entries(params)) {
    urlCopy = urlCopy.replace(`{${key}}`, value);
  }
  return urlCopy;
};

export const setAxiosToken = (token: AxiosHeaderValue): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.common.jwt = token;
  axios.defaults.headers.common.tenant = Config.TENANT;
};

export default axios;

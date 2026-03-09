import {
  NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";

//*********** Contact service **********//
interface Contact {
  givenName?: string;
  familyName?: string;
  phoneNumber?: Array<{ label: string; number: string }>;
}

//*********** EncryptedStorage service **********//
interface GetEncryptDataProps {
  key: string;
}

interface SetEncryptDataProps {
  key: string;
  data: any;
}

interface RemoveEncryptDataProps {
  key: string;
}

//*********** MMKVStorage service **********//
interface GetDataProps {
  key: string;
}

interface SetDataProps {
  key: string;
  data: any;
}

interface RemoveDataProps {
  key: string;
}

//*********** Apple service **********//
interface AppleAuthResponse {
  accessToken: string | null;
  [key: string]: any;
}

//*********** Facebook service **********//
interface FacebookAuthResponse {
  accessToken: string;
  email?: string;
  platform: string;
}

//*********** Google service **********//
interface GoogleAuthResponse {
  accessToken: string;
  email?: string;
  platform: string;
}

//*********** Logger service **********//
interface NetInfoData {
  type: string;
  isConnected?: boolean;
  isInternetReachable?: boolean;
  details?: any;
}

interface PostData {
  details: NetInfoState["details"];
  networkType: NetInfoStateType;
  [key: string]: any;
  bundleId: string;
  time: string;
  os: string;
  brand: string;
  device: string;
  osVersion: string;
  buildNumber: string;
  isLowRamDevice: boolean;
}

interface LogData {
  baseURL: string;
  url: string;
  method: string;
  requestHeaders: Record<string, any>;
  signal: any;
  timeout: number;
  transitional?: any;
  requestData: any | null;
  responseStatus: number;
  responseStatusText: string;
  responseHeaders: Record<string, any>;
  responseData: any;
  apiDuration: string;
}

type ErrorType = 'NO_INTERNET' | 'NETWORK_ERROR' | 'SERVER_ERROR' | 'GRAPHQL_ERROR' | 'REFRESH_TOKEN_ERROR' | 'NO_DATA' | 'UNKNOWN';

// type ServerType = 'ifdsfs' | 'identity';

interface ErrorModel {
  message: string;
  type: ErrorType;
  status: number;
  name: string;
  cause: string;
}

export type {
  Contact,
  PostData,
  LogData,
  NetInfoData,
  AppleAuthResponse,
  GoogleAuthResponse,
  FacebookAuthResponse,
  GetDataProps,
  SetDataProps,
  RemoveDataProps,
  GetEncryptDataProps,
  SetEncryptDataProps,
  RemoveEncryptDataProps,
  ErrorModel
};

import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
import { Middleware } from 'redux';
import { LogData, PostData } from './ServicesModels';

const remoteLoggerRedux: Middleware = () => (next) => async (action: any) => {
  const result = next(action);

  const postData:PostData = {
    ...action,
    bundleId: DeviceInfo.getBundleId(),
    time: new Date().toISOString(),
    brand: DeviceInfo.getBrand(),
    device: DeviceInfo.getDeviceId(),
    os: DeviceInfo.getSystemName(),
    osVersion: DeviceInfo.getSystemVersion(),
    buildNumber: DeviceInfo.getBuildNumber(),
    isLowRamDevice: DeviceInfo.isLowRamDevice(),
  };

  // Fetch carrier and network information asynchronously
  try {
    const netInfo = await NetInfo.fetch();

    postData.networkType = netInfo.type;
    postData.details = netInfo.details; // This will include more detailed network info

    // Log the postData with carrier and network information
    axios.post('https://d-log-api.fingent.net/logredux', {
      ...postData
    }).catch((err) => {
      console.error('Error logging Redux state:', err);
    });
  } catch (err) {
    console.error('Error fetching carrier or network information:', err);
  }
  return result;
};

const remoteLoggerAxios = ({ response }: Record<string, any>) => {
  // URLs to be excluded from logging
  const excludeUrls = ['https://d-log-api.fingent.net/logredux', 'https://d-log-api.fingent.net/logaxios'];

  if (!excludeUrls.includes(response.config.url)) {
    // Capture the end time and calculate the duration
    const endTime: number = new Date().getTime();
    const duration: number = (endTime - response.config.startTime) / 1000;

    // Log the response details
    console.log(`Interceptor -> ${response.config.url} (${duration}s)\n`, response);

    const logData: LogData = {
      baseURL: response.config.baseURL,
      url: response.config.url,
      method: response.config.method,
      requestHeaders: response.config.headers,
      signal: response.config.signal,
      timeout: response.config.timeout,
      transitional: response.config.transitional,
      requestData: response.config.data || null,
      responseStatus: response.status,
      responseStatusText: response.statusText,
      responseHeaders: response.headers,
      responseData: response.data,
      apiDuration: `${duration}s`
    };

    // Posting log data to the logging endpoint
    axios.post('https://d-log-api.fingent.net/logaxios', logData)
      .catch((err) => {
        console.error('Error logging API data:', err);
      });
  }
};

export { remoteLoggerRedux, remoteLoggerAxios };

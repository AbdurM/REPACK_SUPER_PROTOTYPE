import { fetchRemoteConfig } from '../api/apiService';
import { ravenBaseUrl } from '../api/clients/ravenClient';
import { AppConfig } from '../types/config.types';

export async function loadConfig(): Promise<AppConfig> {
  const data = await fetchRemoteConfig();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('Response is not an array or is empty');
  }

  if (ravenBaseUrl === '/mock') {
    return data[0].value as AppConfig;
  }

  return JSON.parse(data[0].value) as AppConfig;
}

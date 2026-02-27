import { Platform } from 'react-native';
import { ScriptManager } from '@callstack/repack/client';
import { dynamicUrls } from './config';

let initialized = false;

export const initializeRemoteResolver = () => {
  if (initialized) return;

  ScriptManager.shared.addResolver(async (scriptId, caller) => {
    let result;

    Object.entries(dynamicUrls?.remotes ?? {}).forEach(([remoteName, remoteConfig]) => {
      if (result) return;

      const baseUrl = (remoteConfig.baseUrl || '')
        .replace('[platform]', Platform.OS)
        
      if (!baseUrl) return;

      if (scriptId === remoteName) {
        result = { url: `${baseUrl}/${remoteName}.container.js.bundle` };
        return;
      }

      if (caller === remoteName) {
        const chunkFile =
          scriptId.endsWith('.bundle') || scriptId.endsWith('.js')
            ? scriptId
            : `${scriptId}.chunk.bundle`;
        result = { url: `${baseUrl}/${chunkFile}` };
      }
    });

    return result;
  });

  initialized = true;
};


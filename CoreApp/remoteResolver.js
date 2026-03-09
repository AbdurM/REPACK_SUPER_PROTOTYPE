import { Platform } from 'react-native';
import { ScriptManager, Script } from '@callstack/repack/client';
import { urls } from './remote';

let initialized = false;

export const initializeRemoteResolver = () => {
  if (initialized) return;

  ScriptManager.shared.setStorage(Script.ScriptStorage);

  ScriptManager.shared.addResolver(async (scriptId, caller) => {
    console.log('🔍 Resolving script:', { scriptId, caller });

    // Handle container bundles
    if (urls?.remotes?.[scriptId]) {
      const remoteConfig = urls.remotes[scriptId];
      const baseUrl = remoteConfig.baseUrl.replace('[platform]', Platform.OS);
      const containerUrl = `${baseUrl}/${scriptId}.container.js.bundle`;
      
      console.log('✅ Resolved container:', containerUrl);
      return {
        url: containerUrl,
        cache: false,
        query: {
          platform: Platform.OS,
        },
      };
    }

    // Handle chunk bundles for specific remotes
    if (caller && urls?.remotes?.[caller]) {
      const remoteConfig = urls.remotes[caller];
      const baseUrl = remoteConfig.baseUrl.replace('[platform]', Platform.OS);
      
      // Ensure proper chunk naming
      const chunkFile = scriptId.includes('.chunk.bundle') 
        ? scriptId 
        : scriptId.includes('.bundle') 
        ? scriptId 
        : `${scriptId}.chunk.bundle`;
      
      const chunkUrl = `${baseUrl}/${chunkFile}`;
      console.log('✅ Resolved chunk:', chunkUrl);
      
      return {
        url: chunkUrl,
        cache: false,
        query: {
          platform: Platform.OS,
        },
      };
    }

    console.log('⚠️ No resolver found for:', { scriptId, caller });
    return undefined;
  });

  initialized = true;
  console.log('✅ Remote resolver initialized');
};


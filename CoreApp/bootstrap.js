/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { ScriptManager, Script } from '@callstack/repack/client';

ScriptManager.shared.setStorage(Script.ScriptStorage);
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  
  // Handle the LoginModule container
  if (scriptId === 'LoginModule') {
    url = 'http://localhost:9001/ios/LoginModule.container.js.bundle';
  }
  // Handle CoreApp container (when remotes try to load it)
  else if (scriptId === 'CoreApp') {
    url = 'http://localhost:8081/ios/CoreApp.container.js.bundle';
  }
  // Handle any assets or chunks from LoginModule
  else if (caller === 'LoginModule') {
    url = `http://localhost:9001/${scriptId}`;
  }
  // Handle any assets or chunks from CoreApp
  else if (caller === 'CoreApp') {
    url = `http://localhost:8081/${scriptId}`;
  }
  
  if (url) {
    return {
      url,
      cache: false,
      query: {
        platform: 'ios',
      },
    };
  }
});

AppRegistry.registerComponent(appName, () => App);

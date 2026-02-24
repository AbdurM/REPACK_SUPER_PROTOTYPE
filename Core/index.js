/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { initializeRemoteResolver } from './src/config/remoteResolver';

initializeRemoteResolver();

AppRegistry.registerComponent(appName, () => App);

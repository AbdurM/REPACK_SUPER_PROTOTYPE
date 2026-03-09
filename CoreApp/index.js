/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { initializeRemoteResolver } from './remoteResolver';

initializeRemoteResolver();

AppRegistry.registerComponent(appName, () => App);

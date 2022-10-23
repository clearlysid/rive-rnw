/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

if (module.hot) {
	module.hot.accept();
}

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === "web") {
	AppRegistry.runApplication(appName, {
		initialProps: {},
		rootTag: document.getElementById('root'),
	});
}


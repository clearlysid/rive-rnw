// ref to https://levelup.gitconnected.com/react-native-typescript-and-react-native-web-an-arduous-but-rewarding-journey-8f46090ca56b

// This file stubs out (but still resolves) certain exports from 'react-native' that aren't meant to run on the web.
import { Text as RNText, Image as RNImage } from 'react-native-web';
export * from 'react-native-web';

export const ViewPropTypes = {
	style: () => { },
};
RNText.propTypes = {
	style: () => { },
};
RNImage.propTypes = {
	style: () => { },
	source: () => { },
};

export const Text = RNText;
export const Image = RNImage;
export const requireNativeComponent = () => { };
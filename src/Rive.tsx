import React, { useEffect } from "react";
import { View, Text, Platform, ViewStyle } from "react-native"
import RiveReactNative from "rive-react-native";
import type { LoopMode, Fit, Alignment, RNRiveError } from 'rive-react-native'

type RiveProps = {
	onPlay?: (animationName: string, isStateMachine: boolean) => void;
	onPause?: (animationName: string, isStateMachine: boolean) => void;
	onStop?: (animationName: string, isStateMachine: boolean) => void;
	onLoopEnd?: (animationName: string, loopMode: LoopMode) => void;
	onStateChanged?: (stateMachineName: string, stateName: string) => void;
	onError?: (rnRiveError: RNRiveError) => void;
	fit?: Fit;
	style?: ViewStyle;
	testID?: string;
	alignment?: Alignment;
	artboardName?: string;
	animationName?: string;
	stateMachineName?: string;
	autoplay?: boolean;
} & {
	resourceName: string; url?: never
} | {
	resourceName?: never; url: string
};

export const Rive = () => {

	useEffect(() => {
		console.log('rive-rnw is running')
	})

	// For iOS/Android, we use the official React Native runtime and pass on the relevant props
	if (Platform.OS === "ios" || Platform.OS === "android") {
		return (
			<View>
				<Text>App Stuff</Text>
				<RiveReactNative url="https://cdn.rive.app/animations/vehicles.riv" />
			</View>
		)
	}

	// For Web, we use the WASM/JS runtime directly
	if (Platform.OS === "web") {
		return (
			<View>
				<Text>Web Stuff</Text>
			</View>
		)
	}

	return null
} 
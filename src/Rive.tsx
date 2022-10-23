import React, { ReactElement, useRef } from "react";
import { View, Text, Platform, ViewStyle } from "react-native"
import RiveReactNative from "rive-react-native";
import type { LoopMode, Fit, Alignment, RNRiveError } from 'rive-react-native'
import type { XOR } from "./helpers";
import { useRive as useRiveCanvas } from "@rive-app/react-canvas";

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
	children?: ReactElement;
} & XOR<{ resourceName: string }, { url: string }>;


export const Rive = (props: RiveProps) => {

	const riveRef = useRef(null)

	console.log('rive-rnw initialized')

	// For iOS/Android, use the official React Native runtime
	if (Platform.OS === "ios" || Platform.OS === "android") {
		return (
			<View>
				<Text>App Stuff</Text>
				<RiveReactNative {...props} ref={riveRef} />
			</View>
		)
	}

	// For Web, we use the WASM/JS runtime directly
	if (Platform.OS === "web") {

		const src = props.resourceName || props.url
		const autoplay = props.autoplay
		const artboard = props.artboardName
		const animations = props.animationName
		const stateMachines = props.stateMachineName
		// const onPlay = props.onPlay
		// const onPause = props.onPause
		// const onStop = props.onStop
		// const onLoop = props.onLoopEnd
		// const onStateChange = props.onStateChanged

		const layout = {
			fit: props.fit,
			alignment: props.alignment
		}

		const { RiveComponent } = useRiveCanvas({
			src,
			autoplay,
			artboard,
			animations,
			stateMachines,
			// @ts-expect-error
			layout,
			// onPlay,
			// onPause,
			// onStop,
			// onLoop,
			// onStateChange,
		});

		return (

			<View>
				<Text>Web Stuff</Text>
				<View style={props.style} testID={props.testID}>
					{props.children &&
						<View style={{
							position: 'absolute',
							width: '100%',
							height: '100%'
						}}>
							{props.children}
						</View>}
					<RiveComponent ref={riveRef} />
				</View>

			</View>
		)
	}

	return null
} 
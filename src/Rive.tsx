import React, { ReactElement, useEffect, useRef } from "react";
import { View, Platform, ViewStyle, StyleSheet } from "react-native"
import { Layout, Rive as RiveCanvas } from "@rive-app/canvas";
import RiveReactNative from "rive-react-native";

// types
import type { XOR } from "./helpers";
import type { Fit, LoopMode, Alignment, RNRiveError } from 'rive-react-native'

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

	const children = props.children

	// For iOS/Android, use the official React Native runtime
	if (Platform.OS === "ios" || Platform.OS === "android") {
		return (
			<RiveReactNative url={props.url as any} style={props.style} autoplay={props.autoplay} />
		)
	}

	// For Web, use the WASM/JS runtime directly
	if (Platform.OS === "web") {

		const src = props.resourceName || props.url
		const autoplay = props.autoplay
		const artboard = props.artboardName
		const animations = props.animationName
		const stateMachines = props.stateMachineName

		useEffect(() => {
			const r = new RiveCanvas({
				canvas: riveRef.current,
				src,
				autoplay,
				artboard,
				animations,
				stateMachines,
				layout: new Layout({
					fit: props.fit,
					alignment: props.alignment
				}),
				onLoad: () => {
					r.resizeDrawingSurfaceToCanvas();
				},
			})
		}, [])

		return (
			<View style={props.style} testID={props.testID}>
				{children &&
					<View style={styles.children}>{children}</View>}
				<canvas ref={riveRef}>
				</canvas>
			</View>
		)
	}

	return null
}

const styles = StyleSheet.create({
	children: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
})
import React, { useEffect, useRef } from "react";
import { View, Platform, ViewStyle, Pressable } from "react-native"
import { Layout, Rive as RiveCanvas } from "@rive-app/canvas";
import RiveRN from "rive-react-native";
import { EventCallback } from "@rive-app/canvas";

// types
import type { XOR } from "./helpers";
import { Fit, Alignment, RNRiveError, RiveRef as RiveRNRef } from 'rive-react-native'

type RiveEvent = (animationName: string, isStateMachine: boolean) => void

type RiveProps = {
	onPlay?: RiveEvent
	onPause?: RiveEvent
	onStop?: RiveEvent
	onLoopEnd?: RiveEvent
	onStateChanged?: RiveEvent
	onError?: (rnRiveError: RNRiveError) => void;
	fit?: Fit;
	style?: ViewStyle;
	testID?: string;
	alignment?: Alignment;
	artboardName?: string;
	animationName?: string;
	stateMachineName?: string;
	autoplay?: boolean;
	children?: any;
} & XOR<{ resourceName: string }, { url: string }>;



type Props = RiveProps & {
	onLoad?: EventCallback,
	onLoadError?: EventCallback,

}

export const Rive = ({
	children,
	onPlay,
	onPause,
	onStop,
	onLoopEnd,
	onStateChanged,
	onError,
	style,
	autoplay = true,
	resourceName,
	url,
	alignment = Alignment.Center,
	fit = Fit.Contain,
	artboardName,
	animationName,
	stateMachineName,
	testID,
}: Props) => {

	const riveRef = useRef(null)

	// For iOS/Android, use the official React Native runtime
	if (Platform.OS === "ios" || Platform.OS === "android") {

		return (
			// @ts-expect-error
			<RiveRN
				ref={riveRef}
				style={style}
				autoplay={autoplay}
				resourceName={resourceName}
				url={url}
				alignment={alignment}
				fit={fit}
				animationName={animationName}
				artboardName={artboardName}
				stateMachineName={stateMachineName}
				testID={testID}
			/>
		)
	}

	// For Web, use the WASM/JS runtime directly
	if (Platform.OS === "web") {

		useEffect(() => {
			const r = new RiveCanvas({
				canvas: riveRef.current,
				autoplay,
				src: resourceName || url,
				layout: new Layout({
					alignment: alignment,
					fit: fit
				}),
				animations: animationName,
				artboard: artboardName,
				stateMachines: stateMachineName,
				onLoad: () => {
					r.resizeDrawingSurfaceToCanvas();
				},
			})
		}, [])

		return (
			<Pressable style={style} testID={testID}>
				{children &&
					<View style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
					}}>{children}</View>}
				<canvas ref={riveRef}>
				</canvas>
			</Pressable>
		)
	}

	return null
}
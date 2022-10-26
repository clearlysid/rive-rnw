import React, { useEffect, useRef, useState } from "react";
import { View, Platform, ViewStyle } from "react-native"
import { Rive as RiveWebGl } from "@rive-app/webgl";
import { Layout, EventCallback, Rive as RiveCanvas } from "@rive-app/canvas";
import RiveRN, { Fit, Alignment, RNRiveError } from "rive-react-native";
import { XOR } from "./helpers";

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



type Props = {
	onLoad?: EventCallback;
	onLoadError?: EventCallback;
	useWebGl?: boolean;
} & RiveProps

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
	onLoad,
	onLoadError,
	useWebGl = false,
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
			>
				{children}
			</RiveRN>
		)
	}

	// For Web, use the WASM/JS runtime directly
	if (Platform.OS === "web") {

		const [size, setSize] = useState<{ width: Number, height: Number }>({
			height: 0,
			width: 0
		})

		useEffect(() => {
			let r: RiveCanvas | RiveWebGl;

			const options = {
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
				}
			}

			if (useWebGl) {
				// @ts-expect-error
				r = new RiveWebGl(options)
			} else {
				r = new RiveCanvas(options)
			}

		}, [])

		return (
			<View style={style}
				testID={testID}
				onLayout={(event) => {
					const { width, height } = event.nativeEvent.layout
					setSize({ width, height })
				}}>
				{children &&
					<View style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
					}}>{children}</View>}

				<canvas ref={riveRef}
					height={`${size.height}`}
					width={`${size.width}`}
				>
				</canvas>
			</View>
		)
	}

	return null
}
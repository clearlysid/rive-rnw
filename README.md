# Rive (for React Native Web) — ⚠️ WIP

![Rive hero image](https://rive-app.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fff44ed5f-1eea-4154-81ef-84547e61c3fd%2Frive_notion.png?table=block&id=f198cab2-c0bc-4ce8-970c-42220379bcf3&spaceId=9c949665-9ad9-445f-b9c4-5ee204f8b60c&width=2000&userId=&cache=v2)

This library is (yet another) wrapper around the iOS/Android runtime and the WASM/JS runtime, providing a singular component and ref pattern for cross-platform applications built using [react-native-web](https://necolas.github.io/react-native-web/)

## Table of contents

-   ⭐ [Rive Overview](#rive-overview)
-   🚀 [Getting Started & API docs](#getting-started)
-   🔍 [Supported Platforms](#supported-platforms)
-   🤝 [Issues and Contributing](#issues-and-contributing)

## Rive Overview

[Rive](https://rive.app) is a real-time interactive design and animation tool that helps teams create and run interactive animations anywhere. This lightweight library allows us to load our Rive animations into apps made using [react-native-web].

🏡 [Rive Homepage](https://rive.app/)
📘 [General help docs](https://help.rive.app/)
🛠 [Resources for building in Rive](https://rive.app/resources/)

## Getting Started

Start by installing this package with:

```bash
yarn add rive-rnw
```

Then use it in your app like so:

```jsx
import Rive from "rive-rnw";

function App() {
	return (
		<Rive
			url="https://cdn.rive.app/animations/vehicles.riv"
			style={{ width: 400, height: 400 }}
		/>
	);
}
```

### API Documentation

This API is a superset of the official React Native Runtime API. For a detailed list of props and methods available to you and for more advanced use-cases, refer to this [documentation](https://help.rive.app/runtimes/overview/react-native/props).

🚧 SOME FEATURES ARE STILL UNDER CONTRSUCTION

### Examples

An example project is provided at `/example` of this repo. It works across all platforms specified and is easy to build off of.

-   [ ] TODO: add deployed example link for reference.

## Supported Platforms

Since this library has a dependency on the [Rive React Native](https://github.com/rive-app/rive-react-native/) and [Rive WASM](https://github.com/rive-app/rive-wasm) runtimes, the supported devices align with each of these dependencies minimum supported devices, as well as the minimum device requirements of the React Native framework.

-   iOS: **14.0+**
-   Android:
    -   Minimum SDK version: **21**
    -   Target SDK version: **31**
-   Browsers: All major browsers

## Issues and Contributing

I'm constantly trying to improve this package and plan to use it for work projects at [@headout](https://github.com/headout). Please raise any issues you encounter on the [Issues](https://github.com/clearlysid/rive-rnw/issues) page.

I would also love for more people to start contributing to open-source. Any PRs with improvements, bugfixes or documentation are always welcome!

# Thanks

Thanks to the [Rive team](https://github.com/rive-app) for making a great product!

If you like this project, you should [follow me on Twitter](https://twitter.com/clearlysid)!

## License

MIT Licensed. Copyright (c) Siddharth Jha 2021.

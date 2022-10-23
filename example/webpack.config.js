const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const { presets } = require(`${appDirectory}/babel.config.js`);

const compileNodeModules = [
	// Add every react-native package that needs compiling
	// 'react-native-gesture-handler',
].map((moduleName) => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
	test: /\.js$|tsx?$/,
	// Add every directory that needs to be compiled by Babel during the build.
	include: [
		path.resolve(__dirname, 'index.js'), // Entry to your application
		path.resolve(__dirname, 'App.tsx'), // Change this to your main App file
		...compileNodeModules,
	],
	use: {
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			presets,
			plugins: ['react-native-web'],
		},
	},
};

module.exports = {
	entry: {
		app: path.join(__dirname, 'index.js'),
	},
	output: {
		path: path.resolve(appDirectory, 'dist'),
		publicPath: '/',
		filename: 'example.bundle.js',
	},
	resolve: {
		extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
		alias: {
			'react-native$': path.resolve('./web/react-native')
		},
	},
	module: {
		rules: [
			babelLoaderConfiguration
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html'),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			// See: https://github.com/necolas/react-native-web/issues/349
			__DEV__: JSON.stringify(true),
		}),
	],
};
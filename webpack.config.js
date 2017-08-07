'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./frontend/index",
	output: {
		filename: "bundle.js"
	},
	watch: NODE_ENV == 'development',
	watchOptions: {
		aggregateTimeout: 100
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
	resolve: {
		modules: ['node_modules'],
		extensions: ['*', '.js']
	},
	resolveLoader: {
		modules: ['node_modules'],
		moduleExtensions: ['-loader', '*'],
		extensions: ['*', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({ fallback: 'style', use: 'css!less' })
			}
		]
	}
};

if (NODE_ENV == 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);
}

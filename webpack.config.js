var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'tovia-express/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
	entry: APP_DIR + '/index.jsx',
	devServer: {
		inline: true,
		port: 3000
	},
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
							sourceMap: true,
							importLoaders: 1,
							localIdentName: "[name]--[local]--[hash:base64:8]"
						}
					},
					"postcss-loader" // has separate config, see postcss.config.js nearby
				]
			}
		]
	}
};

module.exports = config;
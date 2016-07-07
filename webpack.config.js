var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	},
	output: {
		path: path.join(_dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		moduleDirectories: ['node_modules', 'src'],
		extensions: ['', '.js']
	},
	modules: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_module/,
			laoder: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
		}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack. NoErrorsPlugin()
		]
};
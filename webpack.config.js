var path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:[
	'./src/app.js'
	],

	output: {
		path: path.join(__dirname),
		filename:'app.js',
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use:['babel-loader'],
			},

			{
				test: /\.(scss|css)$/,
				use:['style-loader','css-loader'],
			},

			{
				test: /\.html$/,
				use:['html-loader'],
			},
		]
	},

	plugins:[
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
}
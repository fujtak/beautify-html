
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: `./src/js/index.js`,
  output: {
    filename: './js/index.js'
  },
  mode: "development",
  plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			filename: 'index.html',
			template: './src/index.html'
		}),
	],
  devtool: 'cheap-module-source-map'
}
const webpack = require( 'webpack' );
const path = require( 'path' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const autoprefixer = require('autoprefixer');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const Promise = require( 'es6-promise' ).Promise;
const SRC = path.resolve( __dirname, 'src/js' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const ES6Promise = require( 'es6-promise' );
ES6Promise.polyfill();

module.exports = {
	devtool: 'source-map',
	entry: {
		main: './src/index.js',
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: '[name].min.js',
		publicPath: '/',
	},
	watch: true,
	devServer: {
		contentBase: path.resolve( __dirname ),
		port: 9000,
		hot: true
	},
	module: {
		rules: [ {
			test: /\.css$/i,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: { importLoaders: 1 },
				},
				{
					loader: "postcss-loader",
					options: {
						postcssOptions: {
							plugins: [
								[
									"autoprefixer",
									{
										// Options
									},
								],
							],
						},
					},
				}
			],
		},
			{
				test: /\.html$/,
				use: 'html-loader',
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(png|jpg|jpeg)/,
				use: [ {
					loader: 'file-loader',
				} ],
			},
		],
	},
	plugins: [
		new MinifyPlugin(),
		new MiniCssExtractPlugin( {
			filename: 'style.min.css',
		} ),
		autoprefixer,
		new webpack.ProvidePlugin( {
			Promise: 'es6-promise-promise',
		} ),
	],
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		],
	},
};


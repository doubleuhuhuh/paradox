var path = require("path");
var autoprefixer = require('autoprefixer');
var webpack = require("webpack");
var webpackEntries = require('./webpack.entries')
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // plugin needed to make a separate CSS file

module.exports = {
    entry: webpackEntries,
    cache: true,
    output: {
  		path: path.join(__dirname, "../dist"),
      publicPath: "dist/",
  		filename: "[name]",
      chunkFilename: "[id].chunk.js"
  	},
    module: {
      loaders: [
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style-loader",
                "raw-loader?sourceMap")
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style-loader",
                "raw-loader?sourceMap!sass-loader?sourceMap"
            )
        }
      ]
    },
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ],
    resolve: {

  	},
    plugins: [
          new webpack.ProvidePlugin({
    			// Automtically detect jQuery and $ as free var in modules
    			// and inject the jquery library
    			// This is required by many jquery plugins
    			jQuery: "jquery",
    			$: "jquery"
    		}),
        new webpack.optimize.CommonsChunkPlugin({
            name: './js/common.js',
            minChunks: 2
        }),
        new ExtractTextPlugin("[name]"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
}

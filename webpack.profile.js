const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin(),
        new Visualizer({
            filename: './stats/circle.html'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: './stats/blocks.html',
            openAnalyzer: false
        })
    ],
    performance: {
         hints: "warning"
    }
});

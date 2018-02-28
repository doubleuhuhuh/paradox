var webpackEntries = require('../webpack.entries')
var webpackConfig = Object.create(require('../webpack.config.js'))
var gulp   = require('gulp')
var gutil = require("gulp-util");
var webpack = require("webpack");

webpackConfig.devtool = "sourcemap";
webpackConfig.debug = true;

var devCompiler = webpack(webpackConfig);//cache

module.exports = function (cb) {

  devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpackDev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
    cb();
	});
};

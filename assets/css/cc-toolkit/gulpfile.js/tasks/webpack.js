var webpackEntries = require('../webpack.entries')
var webpackConfig = Object.create(require('../webpack.config.js'))
var gulp   = require('gulp')
var gutil = require("gulp-util");
var webpack = require("webpack");

module.exports = function (cb) {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    cb();
  });
};

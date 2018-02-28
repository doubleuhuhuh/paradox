var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')

module.exports = function(cb) {
  gulpSequence('default', 'webpackDev', cb);
  gulp.watch(["./js/**/*"], ["webpackDev"]);
  gulp.watch(["./scss/**/*"], ["webpackDev"]);
}

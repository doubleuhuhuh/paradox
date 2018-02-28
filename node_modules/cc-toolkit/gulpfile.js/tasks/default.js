var gulpSequence    = require('gulp-sequence')

module.exports = function(cb){
  gulpSequence('clean', 'webpack', cb);
};

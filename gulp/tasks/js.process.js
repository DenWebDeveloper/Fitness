'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src('./source/js/' + $.config.fileJs)
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};

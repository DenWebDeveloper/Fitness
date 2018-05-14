'use strict';

module.exports = function() {
  $.gulp.task('js:lint', function() {
    return $.gulp.src('./source/style/' + $.config.fileJs)
      .pipe($.gp.eslint())
      .pipe($.gp.eslint.format());
  })
};

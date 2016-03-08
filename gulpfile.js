var gulp = require('gulp'),
  bundle = require('gulp-bundle-assets');
 
gulp.task('bundlecss', function() {
  return gulp.src('./css/css.bundleconfig.js')
    .pipe(bundle())
    .pipe(gulp.dest('./public/stylesheets/'));
});
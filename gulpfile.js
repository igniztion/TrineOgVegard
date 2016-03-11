var gulp = require('gulp'),
  bundle = require('gulp-bundle-assets');
 
gulp.task('bundlecss', function() {
  return gulp.src('./css/css.bundleconfig.js')
    .pipe(bundle())
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('watch', function(){
    gulp.watch('./css/scss/**/*.scss', ['bundlecss'])
});
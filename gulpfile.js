var gulp = require('gulp'),
  bundle = require('gulp-bundle-assets');
 
gulp.task('bundlecss', function() {
  return gulp.src('./css/css.bundleconfig.js')
    .pipe(bundle())
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('bundlejs', function(){
  return gulp.src('./js/js.bundleconfig.js')
  .pipe(bundle())
  .pipe(gulp.dest('./public/javascripts/'))
});

gulp.task('watch', function(){
    gulp.watch('./css/scss/**/*.scss', ['bundlecss']);
    gulp.watch('./js/src/**/*.js', ['bundlejs']);
});
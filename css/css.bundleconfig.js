
var lazypipe = require('lazypipe');
var sass = require('gulp-sass');
var gif = require('gulp-if');

function stringEndsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function isSassFile(file) {
  return stringEndsWith(file.relative, 'scss');
}

var styleTransforms = lazypipe()
  .pipe(function () {
    return gif(isSassFile, sass());
  });

module.exports = {
  bundle: {
    main: {
      styles: [
          './node_modules/milligram/dist/milligram.css',
          './css/scss/main.scss'
      ],
      options: {
          rev: false,
          transforms: {
            styles: styleTransforms
            },
            watch: {
            styles: [
                './styles/legacy.css',
                './styles/**/*.scss'
          ]
        }
      }
    }
  },
//   copy: './content/**/*.{png,svg}'
};

var uglify = require('gulp-uglify');

module.exports = {
  bundle: {
    togv: {
      scripts: [
          './js/src/hamburger.js',
          './js/src/mapsinit.js'
      ],
      options: {
          rev: false,
          uglify: false
      }
    }
  },
//   copy: './content/**/*.{png,svg}'
};
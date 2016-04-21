
var uglify = require('gulp-uglify');

module.exports = {
  bundle: {
    mapsinit: {
      scripts: [
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
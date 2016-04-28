
var uglify = require('gulp-uglify');

module.exports = {
  bundle: {
    togv: {
      scripts: [
          './node_modules/jquery/dist/jquery.js',
          './js/src/hamburger.js',
          './js/src/form.js'
      ],
      options: {
          rev: false,
          uglify: true
      }
    },
    maps:{
      scripts: [
      './js/src/mapsInit.js'
    ],
      options: {
        rev: false,
        uglify: true
      }
    }
  },
//   copy: './content/**/*.{png,svg}'
};
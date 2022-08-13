const gulp = require("gulp");
const terser = require('gulp-terser');

// Обработка js
const es = () => {
  return gulp.src('./src/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('./public/js'));
}

module.exports = es;

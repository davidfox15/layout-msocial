const gulp = require("gulp");

const fonts = () => {
    return gulp
    .src("./src/fonts/**/*.*")
    .pipe(gulp.dest("./public/fonts"));
};

module.exports = fonts;
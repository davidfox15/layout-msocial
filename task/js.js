const gulp = require("gulp");

// Обработка js
const js = () => {
    return gulp
        .src("./src/js/*.js")
        .pipe(gulp.dest("./public/js"));
};

module.exports = js;

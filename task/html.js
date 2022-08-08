const gulp = require("gulp");

//  Плагины
const htmlmin = require("gulp-htmlmin");
const fileInclude = require("gulp-file-include");
const size = require("gulp-size");

// Обработка html
const html = () => {
    return gulp
        .src("./src/html/*.html")
        .pipe(fileInclude())
        .pipe(size({ title: "До сжатия" }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(size({ title: "После сжатия" }))
        .pipe(gulp.dest("./public"));
};

module.exports = html;

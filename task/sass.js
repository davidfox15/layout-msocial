const gulp = require("gulp");

// Плагины
const sass = require("gulp-sass")(require("sass"));

//Обработка SASS
const sassbuilder = () => {
    return gulp
        .src("./src/sass/*.{sass,scss}")
        .pipe((sass({outputStyle: "compressed"})).on('error', sass.logError))
        .pipe(gulp.dest("./public/style"));
};

module.exports = sassbuilder;

const gulp = require("gulp");
const tinypng = require("gulp-tinypng-compress");
const htmlmin = require("gulp-htmlmin");

// Сжатие png, jpg, jpeg, svg
const img = () => {
    return gulp
        .src("./src/img/**/*.{png,jpg,jpeg}")
        .pipe(
            tinypng({
                key: "VHv46kwF4vQTrlTc24tbrtcrthkgn87x",
                sigFile: "./public/img/.tinypng-sigs",
                log: true,
            })
        )
        .pipe(gulp.dest("./public/img"));
};

// Сжатие svg
const svg = () => {
    return gulp
        .src("src/img/svg/**/*.svg")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("public/img/svg"));
};

module.exports = gulp.series(img, svg);

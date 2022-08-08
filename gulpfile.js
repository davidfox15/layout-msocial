const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// Задачи
const clear = require("./task/clear");
const html = require("./task/html");
const sass = require("./task/sass");
const js = require("./task/js");
const compression = require("./task/compression");

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: "./public",
        },
    });
};

// Наблюдатель
const watcher = () => {
    browserSync
        .watch("./src/html/**/*.html", html)
        .on("all", browserSync.reload);
    browserSync
        .watch("./src/sass/**/*.{sass,scss}", sass)
        .on("all", browserSync.reload);
    browserSync
        .watch("./src/js/**/*.js", js)
        .on("all", browserSync.reload);
};

exports.compression = compression;

// Сборка
exports.dev = gulp.series(
    clear,
    html,
    js,
    sass,
    gulp.parallel(watcher, server)
);

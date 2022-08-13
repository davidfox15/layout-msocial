const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// Задачи
const clear = require("./task/clear");
const html = require("./task/html");
const sass = require("./task/sass");
const es = require("./task/es");
const compression = require("./task/compression");
const fonts = require("./task/fonts");

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
        .watch("./src/js/**/*.js", es)
        .on("all", browserSync.reload);
};

exports.compression = compression;

// Сборка
exports.dev = gulp.series(
    clear,
    html,
    fonts,
    es,
    sass,
    compression,
    gulp.parallel(watcher, server)
);

exports.prod = gulp.series(
    clear,
    html,
    fonts,
    es,
    sass,
    compression
);
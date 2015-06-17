var gulp = require('gulp');
//var sass = require('gulp-ruby-sass');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
paths = {
    src: {
        root: './src',
        html_index: './src/index.html',
        html_blocks: './src/assets/html/*.html',
        scss: './src/style/*.scss',
        styl: './src/assets/styl/**',
        styl_main: './src/assets/styl/main.styl',
        js: './src/app/**',
        js_app: './src/app/index.js',
        img: './src/assets/img/**',
        bower: './bower_components/**',
        data: './src/assets/data/**'
    },
    dist: {
        root: './dist',
        css: './dist/css',
        js: './dist/js',
        img: './dist/img',
        vendor: './dist/vendor',
        data: './dist/data'
    }
};

gulp.task('styles', function() {
    return gulp.src(paths.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.dist.css));
});
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

gulp.task('serve', function () {
    browserSync.init({
        server: './'
    });
    gulp.watch('assets/css/*.css').on('change', reload);
    gulp.watch('assets/js/*.js').on('change', reload);
    gulp.watch('*.html').on('change', reload);
});

gulp.task('jshint', function () {
    gulp.src('assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function () {
    gulp.src('assets/js/*.js')
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
    gulp.src('assets/css/*.css')
        .pipe(concat('all.min.css'))
        .pipe(minifyCss({
            keepBreaks: true
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('assets/js/*.js', ['scripts']);
    gulp.watch('assets/css/*.css', ['styles']);
});

gulp.task('build', ['styles', 'scripts', 'jshint']);

gulp.task('default', ['watch']);
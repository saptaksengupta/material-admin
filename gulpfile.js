var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
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

gulp.task('uglifyScripts', function () {
    gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('uglifyStyles', function () {
    gulp.src('assets/css/*.css')
        .pipe(minifyCss({
            keepBreaks: true
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('assets/js/*.js', ['uglifyScripts']);
    gulp.watch('assets/css/*.css', ['uglifyStyles']);
});

gulp.task('build', ['uglifyStyles', 'uglifyScripts', 'jshint']);

gulp.task('default', ['watch']);
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver');

gulp.task('sass', function () {
    gulp.src('src/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/'))

});

gulp.task('default', ['sass'], function(){
    gulp.watch('src/styles/**/*.scss', ['sass']);

   gulp.src('dist')
       .pipe(webserver({
           livereload: {
               enable: true
           },
           open: true,
           port: 8080
       }));
});
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  gulp.watch("scss/**/*.scss", ['sass']);  
});

gulp.task('sass', function () {
  return gulp.src('scss/app.scss')
    .pipe(sass({ 
      errLogToConsole: true,
      includePaths: [
        './bower_components/foundation/scss',
        './bower_components/fontawesome/scss'
      ]
    }))
    .pipe(gulp.dest('css/'));
});
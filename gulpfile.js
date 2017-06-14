let gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    gcmq = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('less', function() {
  gulp.src(['!app/less/modules/*.less', 'app/less/*.less'])
    .pipe(less({
      paths: [ path.join(__dirname, 'app', 'less', 'modules') ]
    }))
    .pipe(gcmq())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', ['less'], function() {
  gulp.watch(['./app/less/*.less', './app/less/modules/*.less'],  ['less'])
})
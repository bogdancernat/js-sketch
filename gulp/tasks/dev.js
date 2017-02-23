import runSequence from 'run-sequence';
import gulp from 'gulp';

gulp.task('dev', ['clean'], function (cb) {
  global.isProd = false;

  runSequence(
    ['styles', 'images', 'fonts', 'views'],
    'browserify',
    'browserSync',
    'watch',
    cb);
});
import config        from '../config';
import gulp          from 'gulp';
import browserSync   from  'browser-sync';
// Views task
gulp.task('views', function() {
  // Put our index.html in the dist folder
  return gulp.src(config.views.index)
    .pipe(gulp.dest(config.buildDir))
    .pipe(browserSync.stream());
});

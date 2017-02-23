'use strict';

import fs from 'fs';
import gulp from 'gulp';
import path from 'path';

const tasks = fs.readdirSync('./gulp/tasks')
  .filter(file => /(\.(js)$)/i.test(path.extname(file)));

// Ensure process ends after all Gulp tasks are finished
gulp.on('stop', function () {
  if (!global.isWatching) {
    process.nextTick(function () {
      process.exit(0);
    });
  }
});

tasks.forEach(task => {
  require('./gulp/tasks/' + task);
});
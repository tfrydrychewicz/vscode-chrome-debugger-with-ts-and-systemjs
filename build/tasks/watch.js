var gulp = require('gulp');
var paths = require('../paths');
var filelog = require('gulp-filelog');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

gulp.task('watch-bs-reload', browserSync.reload);

gulp.task('watch', ['serve'], function(done) {
   
   watch(paths.files.typescript, function() {
       runSequence([
          'build-typescript',
          'watch-bs-reload'
       ]);
   });
   
   watch(paths.files.style, function() {
       runSequence([
          'build-sass',
          'watch-bs-reload'
       ]);
   });
    
   watch(paths.files.html, function() {
       runSequence([          
          'watch-bs-reload'
       ]);
   });
   
   watch(paths.files.json, function() {
       runSequence([
          'build-json',
          'watch-bs-reload'
       ]);
   });
});
var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var ts = require('gulp-typescript');
var filelog = require('gulp-filelog');
var ignore = require('gulp-ignore');
var paths = require('../paths');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var tsConfig = require('../../tsconfig.json');

gulp.task('build-sass', function () {
    gulp.src(paths.files.style)
      .pipe(changed(paths.folder.style, {extension: '.css'}))
      .pipe(sass().on('error', sass.logError))      
      .pipe(filelog('compiling SASS'))
      .pipe(gulp.dest(paths.folder.style));
});

gulp.task('build-typescript', function () {
    return gulp.src(paths.files.typescript)
            .pipe(changed(paths.folder.output, {extension: '.js'}))            
            .pipe(filelog('compiling TypeScript'))                                 
            .pipe(sourcemaps.init())       
            .pipe(ts(tsConfig.compilerOptions))
            .pipe(sourcemaps.write({sourceRoot: '/app'}))
            .pipe(gulp.dest(paths.folder.output));    
});

gulp.task('build-json', function() {
   return gulp.src(paths.files.json)
      .pipe(changed(paths.folder.output))
      .pipe(filelog('copying JSON'))     
      .pipe(gulp.dest(paths.folder.output)); 
});

gulp.task('build', function (callback) {
    return runSequence(      
      ['build-typescript', 'build-sass', 'build-json'],
      callback
    );
});
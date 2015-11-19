var gulp = require('gulp');
var browserSync = require('browser-sync');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9876
gulp.task('serve', ['build'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 9877,    
    server: {
      baseDir: ['./wwwroot'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');        
        next();
      }
    }
  }, done);
});

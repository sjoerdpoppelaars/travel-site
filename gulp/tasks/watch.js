var gulp            = require('gulp'),
    watch           = require('gulp-watch'),
    browserSync     = require('browser-sync').create();

// GULP WATCH TASK //
gulp.task('watch', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    })
    watch('./app/index.html', function() {
       browserSync.reload();
    });
    
    watch('./app/assets/styles/**/*.css', function() {
       gulp.start('cssInject'); 
    });
});

// GULP cssInject TASK //
gulp.task('cssInject', ['styles'], function(){
   return gulp.src('./app/temp/styles/styles.css')
   .pipe(browserSync.stream()); 
});
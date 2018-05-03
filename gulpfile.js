let gulp = require('gulp');
let inlineFonts = require('gulp-inline-fonts');
let rewriteCss = require('gulp-rewrite-css');

gulp.task('orkney', function() {
    return gulp.src(['build/aad-sso-wordpress-mercer.css'])
        .pipe(inlineFonts({ name: 'orkney' }))
        .pipe(gulp.dest('build'));
});

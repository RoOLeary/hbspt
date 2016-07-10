var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var del = require('del');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var ejs = require('gulp-ejs');

gulp.task('test', function() {
  console.log('Hey Ro, all systems go here....');
});

gulp.task('css', function() {
  return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
})

// gulp.task('sass', function() {
//     return sass('src/scss/**/*.scss', {style: 'compressed'})
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('build/css'));
// });

gulp.task('js', function() {
  console.log('Building js');
	return gulp.src('src/js/**/*.js')
	  .pipe(concat('index.js'))
	  .pipe(gulp.dest('build/js'));
});

gulp.task('ejs', function() {
  console.log('Building ejs as html');
 return gulp.src('src/views/**/*.ejs')
   .pipe(ejs({}, {ext:'.html'}))
   .pipe(gulp.dest('build/views/'))
});

gulp.task('html', function() {
  console.log('compile index.html to root');
	gulp.src('build/views/pages/index.html')
    .pipe(gulp.dest('build/')) 
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['css']); 
  gulp.watch('src/js/*.js', ['js']); 
  gulp.watch('src/views/**/*.ejs', ['ejs']);
  gulp.watch('build/views/pages/index.html', ['html']); 
})

module.exports = gulp;
// The default task (called when we run `gulp` from cli)
gulp.task('default', ['ejs', 'js', 'css', 'html'], function() {

});

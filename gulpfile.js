let gulp = require('gulp');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let gutil = require('gulp-util');
let connect = require('gulp-connect');
let babelify = require('babelify');

let dependencies = [
	'react',
  	'react-dom'
];

gulp.task('connect', () => {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('js', ['scripts'], () => {
  gulp.src(['./components/*/*/*.js','./components/*.js'])
    .pipe(connect.reload());
});

gulp.task('scripts', () => {
    bundleApp(false);
});

gulp.task('watch', () => {
	gulp.watch(['js'], ['scripts']);
});

gulp.task('watch', () => {
  gulp.watch(['./components/*.js', './components/*/*/*.js'], ['js', 'watch']);
});

gulp.task('default', ['connect','watch', 'scripts']);

 let bundleApp = (isProduction) => {
	let appBundler = browserify({
    	entries: './components/app.js',
    	debug: true
  	})

  	if (!isProduction){
  		browserify({
			require: dependencies,
			debug: true
		})
			.bundle()
			.on('error', gutil.log)
			.pipe(source('vendors.js'))
			.pipe(gulp.dest('./dist'));
  	}
  	if (!isProduction){
  		dependencies.forEach(function(dep){
  			appBundler.external(dep);
  		})
  	}

  	appBundler
	  	.transform("babelify", {presets: ["es2015", "react"]})
	    .bundle()
	    .on('error',gutil.log)
	    .pipe(source('bundle.js'))
	    .pipe(gulp.dest('./dist'));
}

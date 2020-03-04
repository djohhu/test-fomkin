const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      sourcemaps   = require('gulp-sourcemaps'),
      autoprefixer = require('autoprefixer'),
      cssnano      = require('cssnano'),
      clean        = require('gulp-clean'),
      pngquant     = require('imagemin-pngquant'),
      uglify       = require('gulp-uglify'),
      postcss      = require('gulp-postcss'),
      pxtorem      = require('postcss-pxtorem'),
      mqpacker     = require('css-mqpacker'),
      babel        = require('gulp-babel'),
      plumber      = require('gulp-plumber'),
      browserSync  = require('browser-sync').create();


const _dirname = 'test-fomkin';

const template = {
    build: { //where
        js: '../build/js/',
        css: '../build/css/',
    },
    src: { //from where
        js: '../src/js/main.js',
        scss: '../src/scss/main.scss',
    },
    watch: { //watch
        js: '../src/js/main.js',
        scss: '../src/scss/**/*.scss',
    },
    clean: '../build'
};

// Start browserSync server
// ------------------

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: _dirname
    });
});

// clear folder 'build'
// ------------------

gulp.task('clean', function () {
    return gulp.src([template.clean], {read: false, allowEmpty: true})
        .pipe(clean({force: true}));
});

// Optimization Tasks
// ------------------


gulp.task('css', function () {
    return gulp.src(template.src.scss)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(template.build.css))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts', function () {
    return gulp.src(template.src.js)
        .pipe(plumber())
        .pipe(babel({
            presets: [
                ['@babel/preset-env', {
                    modules: false
                }]
            ]
        }))
        .pipe(uglify())
        .pipe(gulp.dest(template.build.js))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/// Task FINAL
// ------------------


gulp.task('css-final', function () {
    return gulp.src(template.src.scss)
        .pipe(sass())
        .pipe(postcss([
            pxtorem({
                selectorBlackList: ['font']
            }),
            mqpacker(),
            autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false,
                grid: true
            }),
            cssnano('main.css')
        ]))
        .pipe(gulp.dest(template.build.css))
});

// Watchers
// ------------------

gulp.task('watch', function () {
    gulp.watch(template.watch.scss, gulp.series('css'));
    gulp.watch(template.watch.js, gulp.series('scripts'));

});

// Build Dev
// ---------------

gulp.task('build', gulp.parallel([
    'scripts',
    'css',
]));

gulp.task('reload', gulp.parallel([
    'watch',
    'browser-sync'
]));

gulp.task('default', gulp.series(['clean', 'build', 'reload']));

// Build Final
// ------------------

gulp.task('build-final', gulp.parallel([
    'scripts',
    'css-final',
]));

gulp.task('final', gulp.series(['clean', 'build-final']));

"use strict";

const gulp = require("gulp");
const gutil = require("gulp-util");
const sourcemaps = require("gulp-sourcemaps");
const fileinclude = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const bs = require("browser-sync").create();
const rimraf = require("rimraf");
const comments = require("gulp-header-comment");
const jshint = require("gulp-jshint");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");

var path = {
  src: {
    html: "source/*.html",
    others: "source/*.+(php|ico|png)",
    others2: "source/blog/*.html",
    others3: "source/services/*.html",
    others4: "source/blogPage/*.html",
    htminc: "source/partials/**/*.htm",
    incdir: "source/partials/",
    plugins: "source/plugins/**/*.*",
    js: "source/js/*.js",
    css: "source/css/**/*.css",
    images: "source/images/**/*.+(png|jpg|gif|svg|mp4|ogg|webm)",
  },
  build: {
    dirBuild: "theme/",
    dirDev: "theme/",
  },
};

// HTML
gulp.task("html:build", function () {
  return gulp
    .src(path.src.html)
    .pipe(customPlumber("Error Running html-include"))
    .pipe(
      fileinclude({
        basepath: path.src.incdir,
      })
    )
    .pipe(
      comments(`
    WEBSITE: https://MichaelNarvaez.com
    TWITTER: https://twitter.com/MichaelNarvaez
    FACEBOOK: https://www.facebook.com/MichaelNarvaez
    GITHUB: https://github.com/MichaelNarvaez/
    `)
    )
    .pipe(gulp.dest(path.build.dirDev))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});
gulp.task("others4:build", function () {
  return gulp
    .src(path.src.others4)
    .pipe(customPlumber("Error Running html-include"))
    .pipe(
      fileinclude({
        basepath: path.src.others4,
      })
    )
    .pipe(
      comments(`
    WEBSITE: https://MichaelNarvaez.com
    TWITTER: https://twitter.com/MichaelNarvaez
    FACEBOOK: https://www.facebook.com/MichaelNarvaez
    GITHUB: https://github.com/MichaelNarvaez/
    `)
    )
    .pipe(gulp.dest(path.build.dirDev + "blogPage/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

gulp.task("others2:build", function () {
  console.log("Copying blog files...");
  return gulp.src(path.src.others2)
    .pipe(gulp.dest(path.build.dirDev + "blog/")) // Cambiado
    .on('end', function() {
      console.log("Blog files copied successfully!");
    });
});

gulp.task("others3:build", function () {
  console.log("Copying services files...");
  return gulp.src(path.src.others3)
    .pipe(gulp.dest(path.build.dirDev + "services/")) // Cambiado
    .on('end', function() {
      console.log("Services files copied successfully!");
    });
});

gulp.task("others4:build", function () {
  console.log("Copying blogPage files...");
  return gulp.src(path.src.others4)
    .pipe(gulp.dest(path.build.dirDev + "blogPage/")) // Cambiado
    .on('end', function() {
      console.log("BlogPage files copied successfully!");
    });
});


// CSS
gulp.task("css:build", function () {
  return gulp
    .src(path.src.css)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("/"))
    .pipe(
      comments(`
    WEBSITE: https://MichaelNarvaez.com
    TWITTER: https://twitter.com/MichaelNarvaez
    FACEBOOK: https://www.facebook.com/MichaelNarvaez
    GITHUB: https://github.com/MichaelNarvaez/
    `)
    )
    .pipe(gulp.dest(path.build.dirDev + "css/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Javascript
gulp.task("js:build", function () {
  return gulp
    .src(path.src.js)
    .pipe(jshint("./.jshintrc"))
    .pipe(
      notify(function (file) {
        if (!file.jshint.success) {
          return (
            file.relative + " (" + file.jshint.results.length + " errors)\n"
          );
        }
      })
    )
    .pipe(jshint.reporter("jshint-stylish"))
    .on("error", gutil.log)
    .pipe(
      comments(`
  WEBSITE: https://MichaelNarvaez.com
  TWITTER: https://twitter.com/MichaelNarvaez
  FACEBOOK: https://www.facebook.com/MichaelNarvaez
  GITHUB: https://github.com/MichaelNarvaez/
  `)
    )
    .pipe(gulp.dest(path.build.dirDev + "js/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Images
gulp.task("images:build", function () {
  return gulp
    .src(path.src.images)
    .pipe(gulp.dest(path.build.dirDev + "images/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Plugins
gulp.task("plugins:build", function () {
  return gulp
    .src(path.src.plugins)
    .pipe(gulp.dest(path.build.dirDev + "plugins/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Other files like favicon, php, sourcele-icon on root directory
gulp.task("others:build", function () {
  return gulp.src(path.src.others).pipe(gulp.dest(path.build.dirDev));
});


// Clean Build Folder
gulp.task("clean", function (cb) {
  rimraf("./theme", cb);
});

// Error Message Show
function customPlumber(errTitle) {
  return plumber({
    errorHandler: notify.onError({
      // Customizing error title
      title: errTitle || "Error running Gulp",
      message: "Error: <%= error.message %>",
      sound: "Glass",
    }),
  });
}

// Watch Task
gulp.task("watch:build", function () {
  gulp.watch(path.src.html, gulp.series("html:build"));
  gulp.watch(path.src.htminc, gulp.series("html:build"));
  gulp.watch(path.src.css, gulp.series("css:build"));
  gulp.watch(path.src.js, gulp.series("js:build"));
  gulp.watch(path.src.images, gulp.series("images:build"));
  gulp.watch(path.src.plugins, gulp.series("plugins:build"));
  gulp.watch(path.src.others, gulp.series("others:build")); // Agregado
  gulp.watch(path.src.others2, gulp.series("others2:build")); // Agregado
  gulp.watch(path.src.others3, gulp.series("others3:build")); // Agregado
  gulp.watch(path.src.others3, gulp.series("others4:build")); // Agregado
});



// Dev Task
gulp.task(
  "default",
  gulp.series(
    "clean",
    "html:build",
    "js:build",
    "css:build",
    "images:build",
    "plugins:build",
    "others:build",
    "others2:build",
    "others3:build",
    "others4:build",
    gulp.parallel("watch:build", function () {
      bs.init({
        server: {
          baseDir: path.build.dirDev,
        },
      });
    })
  )
);

// Build Task
gulp.task(
  "build",
  gulp.series(
    "html:build",
    "js:build",
    "css:build",
    "images:build",
    "plugins:build",
    "others2:build",
    "others3:build",
    "others4:build"
  )
);

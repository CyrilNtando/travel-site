var gulp = require("gulp"),
  watch = require("gulp-watch"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssimport = require("postcss-import"),
  rename = require("gulp-rename");

gulp.task("default", function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task("html", function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task("styles", function() {
  /***
   * src points to the source file
   * -1. use pipe to autoprifix css styles
   * -2.use pipe to channel content from the src file to dest()
   * dest is the directory or folder were we want our new css file created
   *  */
  return gulp
    .src("./app/assets/styles/styles.pcss")
    .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("./app/temp/styles/"));
});

//watches and execute task if change are made from listed files
gulp.task("watch", function() {
  //gulp.series for sequential execution and gulp.parallel for parallel execution.
  watch("./app/index.html", gulp.series("html"));
  watch("./app/assets/styles/**/*.pcss", gulp.series("styles"));
});

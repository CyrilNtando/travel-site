var gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssimport = require("postcss-import"),
  mixins = require("postcss-mixins"),
  rename = require("gulp-rename");

gulp.task("styles", function() {
  /***
   * src points to the source file
   * -1. use pipe to autoprifix css styles
   * -2.use pipe to channel content from the src file to dest()
   * dest is the directory or folder were we want our new css file created
   *  */
  return gulp
    .src("./app/assets/styles/styles.pcss")
    .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("./app/temp/styles/"));
});

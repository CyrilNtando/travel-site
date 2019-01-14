var gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create();

//watches and execute task if change are made from listed files
gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "app" //tell browser sync mini server to point at app folder
    }
  });

  //gulp.series for sequential execution and gulp.parallel for parallel execution.
  watch("./app/index.html", function() {
    browserSync.reload();
  });
  watch("./app/assets/styles/**/*.pcss", gulp.series("cssInject"));
});

// argument  middle tell gulp before running css must complete the following tasks
gulp.task(
  "cssInject",
  gulp.series("styles", function() {
    return gulp.src("./app/temp/styles/styles.css").pipe(browserSync.stream());
  })
);

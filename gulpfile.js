var gulp = require("gulp")


//压缩js
var minJs=require("gulp-uglify")

var minJs = require("gulp-uglify");
gulp.task("minJs",function(){
	gulp.src("js/**/*")
	.pipe(minJs())
	.pipe(gulp.dest("min-js/js"));
})



//压缩编译 压缩css
var minCss=require("gulp-sass-china")
gulp.task("minCss",function(){
	gulp.src("scss/**/*.scss")
	.pipe(minCss({
		outputStyle:"compressed"
	}))
	.pipe(gulp.dest("css/"))
})

gulp.task("watch",function(){
	gulp.watch("scss/**/*",["minCss"])
})


//编译sass
// var sass=require("gulp-sass")
// gulp.task("sass1",function(){
// 	gulp.src("scss/**/*.scss")
// 	.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
// 	.pipe(gulp.dest("css/"))
// })

// gulp.task("watch",function(){
// 	gulp.watch("scss/**/*.scss",["sass1"])
	
// })


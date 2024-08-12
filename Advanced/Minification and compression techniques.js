/*
Minification and compression are techniques used to optimize JavaScript files for faster loading times and better performance in web applications. Both techniques aim to reduce the size of JavaScript files, but they work in different ways. Here’s an explanation of each:

Minification
Minification is the process of removing all unnecessary characters from the source code without changing its functionality. This includes removing:

Whitespace
Line breaks
Comments
Unused code
Minification also typically involves shortening variable names to further reduce the file size. The goal is to make the code as compact as possible.

Before minification:
*/

function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Call the function
  greet("World");
  

// After minification:
function greet(n){console.log("Hello, "+n+"!");}greet("World");

/*
Many build tools and task runners can automate the minification and compression process:

Webpack: A module bundler that can handle minification using plugins like TerserPlugin.

Webpack is a powerful module bundler primarily used for JavaScript applications. 
Think of it as a tool that takes all the different files and modules in your project (JavaScript, CSS, images, etc.) and bundles them together into a few files (often just one) that can be easily included in your web page.
*/

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};


/*
Gulp: A task runner that can be used with plugins like gulp-terser for minification and gulp-gzip for compression.
Gulp is a task runner that automates repetitive tasks in your development workflow. It’s more about managing tasks like minifying files, compiling SASS/SCSS to CSS, optimizing images, and more. 
Think of it as a tool that helps you automate the boring, repetitive parts of web development.
*/

const gulp = require('gulp');
const terser = require('gulp-terser');
const gzip = require('gulp-gzip');

gulp.task('compress', function () {
  return gulp.src('src/*.js')
    .pipe(terser())
    .pipe(gzip())
    .pipe(gulp.dest('dist'));
});

/*
Webpack is like a chef who bundles and optimizes all your ingredients (code and assets) into a single dish (bundle) ready for serving (deployment).
Gulp is like a kitchen assistant who takes care of repetitive tasks like chopping vegetables (minifying files), cleaning up (optimizing images), and setting the table (browser reloading).
*/


var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");

var watch = require('watch');
var execSync = require('child_process').execSync;

function compile() {
  execSync(
    "(clear; /Users/gelisam/working/js/pong/node_modules/.bin/flow; jsx --strip-types --harmony src build) || true",
    {"stdio": 'inherit'}
  );
  browserify("./src/main.js", { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(fs.createWriteStream("build/main.js"));
}

watch.watchTree('src', compile)

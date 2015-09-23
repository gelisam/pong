var watch = require('watch');
var execSync = require('child_process').execSync;

function compile() {
  execSync(
    "clear; /Users/gelisam/working/js/pong/node_modules/.bin/flow || true",
    {"stdio": 'inherit'}
  );
}

watch.watchTree('src', compile)

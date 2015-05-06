var fs = require('fs');
var file = process.argv[2];

function countNewlines() {
  fs.readFile(file, function(err, fileContents) {
    var lines  = fileContents.toString().split('\n').length - 1;
    console.log(lines);
  });
}

countNewlines();





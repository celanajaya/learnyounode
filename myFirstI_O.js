var fs = require('fs');

var bufStr = fs.readFileSync(process.argv[2]).toString();
var bufArr = bufStr.split('\n');
console.log(bufArr.length - 1);	


  
  

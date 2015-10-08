//Basic I/O
var fs = require('fs');
var filebuf =  fs.readFileSync(args[0]);
var str = filebuf.toString();
var value = str.split("\n").length - 1;
console.log(value);

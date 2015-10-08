var fs = require('fs');
var path = require('path');
var myModule = require('./myModule.js')
var http = require('http');
var bl =  require('bl');
var net = require('net');
var util = require('util');
var map = require('through2-map');
var url = require('url');
    
var args = [];

for(i=2;i<process.argv.length; i++){

	args.push(process.argv[i]);

}

//Hello World Code

//console.log('HELLO WORLD');

//Baby Steps Code

/*
var sum = 0;

for(i=2;i<process.argv.length; i++){

	sum = sum + parseInt(process.argv[i]);
}
console.log(sum);
*/


//Basic I/O

/*
var filebuf =  fs.readFileSync(args[0]);
var str = filebuf.toString();
var value = str.split("\n").length - 1;
console.log(value);

*/


//Basic Async I/O

/*fs.readFile(args[0], function (err, data) {
  if (err) throw err;

	var str = data.toString();
	var value = str.split("\n").length - 1;
	console.log(value);
});
*/


//Filtered LS

/*fs.readdir(args[0], function(err, files){

	if(err) throw err;
	for(i=0;i<files.length;i++){
		if(path.extname(files[i]) === '.' + args[1])
		console.log(files[i]);
	}

});*/

//Make it Modular
/*
myModule(args[0],args[1],function(err,data){

	if(err) throw err;
	for(i=0;i<data.length;i++){
		console.log(data[i]);
	}

})

*/

//HTTP Call

/*http.get(args[0], function(response) {
  response.on("data", function (data) { 
  var result = data.toString();
	console.log(result);}
	);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
  });
*/

//HTTP Collect
/*http.get(args[0], function(response) {
	response.pipe(bl(function (err, data) { 
	var result =  data.toString();
	console.log(result.length);
	console.log(result);

	}))

}).on('error', function(e) {
  console.log("Got error: " + e.message);
 });*/

//JUGGLING ASYNC
/*var results = [];
var counter = 0;
function httpGet(index){

	http.get(args[index], function(response) {
		response.pipe(bl(function (err, data) { 
  		results[index] = data.toString();
  		counter++;
	  	if(counter === 3)
	 		printResults();
	}));

	});
}

for (i = 0; i < 3; i++){

	httpGet(i);

}
	var printResults = function(){


		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);
	}
*/

//Time Server
//console.log(util.inspect(args[0], {showHidden: false, depth: null}));
/*

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "-" + month + "-" + day + " " + hour + ":" + min;

}
var server = net.createServer(function (socket) {
	//console.log('callback is getting called');
	socket.write(getDateTime() + "\n")
	socket.end()  
 });
    server.listen(args[0])
*/

//HTTP File Server
//console.log(util.inspect(args[0], {showHidden: false, depth: null}));
/*
var server = http.createServer(function (request, response) {
	//console.log('callback is getting called');
var stream = fs.createReadStream(args[1]);  
stream.pipe(response);

 });
    server.listen(args[0]);
 */
//UpperCaserer
/*
var server = http.createServer(function (request, response) {
if (request.method != 'POST')
        return res.end('send POST request \n')
request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);

 });
    server.listen(args[0]);

*/

//HTTP Json Server

var server = http.createServer(function (request, response) {
var urlObj = url.parse(request.url, true);
var endpoint =  urlObj.pathname;
var n = urlObj.query.iso.indexOf('=');
var queryString = urlObj.query.toString().substring(n + 1);
console.log(urlObj.query);
var date = new Date(urlObj.query.iso);

if(endpoint == '/api/parsetime'){
	//make json response
	response.writeHead(200, { 'Content-Type': 'application/json' });
	var json = JSON.stringify({ 
    'hour': date.getHours(), 
    'minute': date.getMinutes(), 
    'second': date.getSeconds()
  	});
	 response.end(json);
}
if(endpoint == '/api/unixtime'){
	//make json response
	response.writeHead(200, { 'Content-Type': 'application/json' });
		var json = JSON.stringify({ 
    'unixtime': date.getTime()
 	 });
	 response.end(json);
}
 });

    server.listen(args[0]);




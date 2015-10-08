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




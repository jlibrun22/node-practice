//HTTP File Server
var server = http.createServer(function (request, response) {
	//console.log('callback is getting called');
var stream = fs.createReadStream(args[1]);  
stream.pipe(response);

 });
    server.listen(args[0]);




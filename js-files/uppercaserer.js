//UpperCaserer

var server = http.createServer(function (request, response) {
if (request.method != 'POST')
        return res.end('send POST request \n')
request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);

 });
    server.listen(args[0]);

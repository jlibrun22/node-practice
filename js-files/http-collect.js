//HTTP Collect
http.get(args[0], function(response) {
	response.pipe(bl(function (err, data) { 
	var result =  data.toString();
	console.log(result.length);
	console.log(result);

	}))

}).on('error', function(e) {
  console.log("Got error: " + e.message);
 });

//HTTP Call
http.get(args[0], function(response) {
  response.on("data", function (data) { 
  var result = data.toString();
	console.log(result);}
	);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
  });

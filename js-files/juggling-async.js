//JUGGLING ASYNC
var results = [];
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


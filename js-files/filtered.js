//Filtered LS
var fs = require('fs');
fs.readdir(args[0], function(err, files){

	if(err) throw err;
	for(i=0;i<files.length;i++){
		if(path.extname(files[i]) === '.' + args[1])
		console.log(files[i]);
	}

});

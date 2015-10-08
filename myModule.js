var fs = require('fs');
var path = require('path');

module.exports= function(dir, ext, callback){

	fs.readdir(dir, function(err, files){

		if(err){

			return callback(err);
		} else {

			var data = [];
				for(i=0;i<files.length;i++){
					if(path.extname(files[i]) === '.' + ext)
						data.push(files[i]);
					}
				callback(err,data);

		}
		

	});

}


// we need to import the fs module so we can use the readdir() function
var fs = require('fs');
// require the path module so we can use the path.extname(file) to verify the filename
var path = require('path');

// export the function so we can use it from our main file
// this is what's known as an API

// this API takes a path, an extension, and a callback argument
// 
// module.exports = function (input, ext, callback) {
// 	fs.readdir(input, function (err, files){
// 		if(err)
// 		  return callback(err) // early return
// 		filtered = files.filter(function (e) {
// 		  return path.extname(e) === '.'+ ext;
// 		});
// 		callback(null, filtered);
// 	});
// }

module.exports = function (input, ext, callback) {
	fs.readdir(input, function(err, files){
		if(err)
			return callback(err); // early callback if err
		list = files.filter(function(file){
			return path.extname(file) === '.' + ext;
		});
		callback(null, list);
	});
}
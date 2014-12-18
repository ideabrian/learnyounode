// FILTERED LS Exercise 5 of 13

var fs = require('fs');
var path = require('path');
var input = process.argv[2];
var ext = process.argv[3];

fs.readdir(input, function (err, files){
	if(err)
		throw err;
	var filtered = files.filter(function (e) {
		return path.extname(e) === '.' + ext;
	});
	filtered.forEach( function (file){
		console.log(file);
	});
});

// Learn You Node

var http = require('http');
var bl = require('bl');
var streams = [];
var urls = [process.argv[2], process.argv[3], process.argv[4] ];

input = process.argv[2];

http.get(input, function(response){
	response.setEncoding('utf8');
	console.log("Got response: " + response.statusCode);
}).on('error', function(e) {
		console.log("Get error" + e.message);
	});

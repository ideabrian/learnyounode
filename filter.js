var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extname, callback) {

	foo(function(err,data) {
		if (err)
			return callback(err); //early return

		fs.readFile(dirname, function doneReading(err, fileContents) {

		})
		callback(null,data);
	})
}
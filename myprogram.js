//  MY FIRST ASYNC I/O!
//  Exercise 4 of 13

// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-line argument.

// -------------------------------------------------------------------------------

// # HINTS

// The solution to this problem is almost the same as the previous problem except you must now do it the Node.js way: asynchronous.

// Instead of fs.readFileSync() you will want to use fs.readFile() and instead of using the return value of this method you need to collect the value from a callback function that you pass in as the second argument. To learn more about callbacks, check out: [https://github.com/maxogden/art-of-node#callbacks](https://github.com/maxogden/art-of-node#callbacks).

// Remember that idiomatic Node.js callbacks normally have the signature:

//     function callback (err, data) { /* ... */ }

var fs = require('fs');
var input = process.argv[2];

fs.readFile(input, 'utf8', function(err, data){
	if(err) throw err;
	var lineCount = data.split('\n').length-1;
	console.log(lineCount);
});
// const BufferList = require('bl');

// var bl = new BufferList()
// bl.append(new Buffer('abcd'))
// bl.append(new Buffer('efg'))
// bl.append('hi')
// bl.append(new Buffer('j'))
// bl.append(new Buffer([ 0x3, 0x4 ]))

// console.log(bl.length);

// console.log(bl.slice(0,10).toString('ascii'))
// console.log(bl.slice(3,10).toString('ascii'))
// console.log(bl.slice(3,6).toString('ascii'))

// console.log(bl.toString());
// console.log(bl.toString('ascii', 3, 8));
// console.log(bl.toString('ascii', 5, 10));


const bl = require('bl')
    , http = require('http')

var url = process.argv[2];
// console.log(url);
// fs.createReadStream('README.md')
//   .pipe(bl(function (err, data) {
//   	console.log(data.toString())
//   }))


// http.get(url, function(response) {
// 	response.setEncoding('utf8');
// 	response.on('error', console.error);
// 	response.pipe(bl(function (err, data) {
// 		if(err)
// 			throw err;
// 		console.log(data.length);
// 		console.log(data.toString());
// 	}));
// });

http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
		data = data.toString()
		console.log(data.length);
		console.log(data);
	}))
})
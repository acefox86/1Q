console.log("damn!");

var http = require('http');
var dt = require('./module.js')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Date and time:" + dt.myDateTime);
    res.write(\n);
    res.end('Hello World! And Goodbye!  ');
}).listen(8080);

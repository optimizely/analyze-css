var http = require('http');
var httpPort = process.env.PORT || 7360;

// Make this work in Heroku.
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(httpPort, '127.0.0.1');
console.log('Server running at http://127.0.0.1:' + httpPort + '/');

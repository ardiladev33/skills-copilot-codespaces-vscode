// Create web server
// Create a web server that listens for requests on port 8080. When a request is made to the server, the server responds with the contents of the file comments.html.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('comments.html', function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

server.listen(8080);
// The server should respond to requests with the contents of the file comments.html.
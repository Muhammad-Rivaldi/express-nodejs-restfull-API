var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write('{"message": "Hello World!"}');
    response.end();
}).listen(8000);

console.log("server running on http://localhost:8000");
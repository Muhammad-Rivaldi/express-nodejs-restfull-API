// import modul nodejs
var http = require('http');

// membuat server 
var server = http.createServer(function (request, response) {
    response.end("Hi, selamat datang di nodejs");
});

server.listen(8000);

console.log("server running on http://localhost:8000");
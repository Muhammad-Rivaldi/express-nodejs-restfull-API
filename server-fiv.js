var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(request.url, true).query;
    var txt = 'Kata kunci: ' + q.keyword;
    response.end(txt);
}).listen(8000);

console.log("Server berjalan di http://localhost:8000")
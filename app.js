const http = require('http');

const server = http.createServer((req,res)=> {
    if (req.url === '/') {
        res.write('hello Valdi');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
})

server.listen(5000);

console.log('read dari port 5000 :)')
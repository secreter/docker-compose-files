var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello World");
    response.end();
}).listen(80, '0.0.0.0');

console.log('Server running on port 80.');
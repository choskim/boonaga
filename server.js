var http   = require('http'),
    server = null,
    port   = process.env.PORT || 3000,
    ip     = '127.0.0.1';

var server = http.createServer(function(request, response) {
  response.write("I'm alive!"); 
  response.end();
});

server.listen(port, ip, function() {
  console.log("Server is running on port %d", port);
});
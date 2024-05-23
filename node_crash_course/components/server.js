// how to create a server using node.js

// require http
const http = require('http');
const fs = require('fs');

// create an instance of the server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

// setting header content type
    res.setHeader('Content-Type', 'text/html');
    // sending an html page
    fs.readFile(./)
    res.end();
});

// configure your server to listen to port 3000
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
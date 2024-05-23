
// set up all the code to spin up server
// import http 
const http = require('http');
const app = require('./app')
//assign port for server to run
const port = 3003;
// create a server
const server = http.createServer(app);
//listen on port
server.listen(port)


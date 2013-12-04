var app, express, io, server;

express = require('express');

app = express();

server = require('http').createServer(app).listen(8080);

io = require('socket.io').listen(server);

app.get('/', function(req, res) {
  return console.log('woop');
});

io.sockets.on('connection', function(socket) {
  return console.log('client connected');
});

/*
//@ sourceMappingURL=server.js.map
*/
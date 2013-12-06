var connectHandler, createRoomHandler, disconnectHandler, io, joinRoomHandler, server,
  _this = this;

server = require('http').createServer().listen(1234);

io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  return console.log('client connected');
});

socket.on('connect', function(data) {
  return connectHandler();
});

socket.on('disconnect', function(data) {
  return disconnectHandler();
});

socket.on('createRoom', function(data) {
  return createRoomHandler();
});

socket.on('joinRoom', function(data) {
  return joinRoomHandler();
});

connectHandler = function() {
  return console.log('connectHandler');
};

disconnectHandler = function() {
  return console.log('disconnectHandler');
};

createRoomHandler = function() {
  return console.log('createRoomHandler');
};

joinRoomHandler = function() {
  return console.log('joinRoomHandler');
};

/*
//@ sourceMappingURL=server.js.map
*/
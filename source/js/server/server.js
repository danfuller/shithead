var Game, connectHandler, connectedUsers, createGame, createRoomHandler, disconnectHandler, game, io, joinGame, joinRoomHandler, server,
  _this = this;

server = require('http').createServer().listen(1234);

io = require('socket.io').listen(server);

Game = require('./game').Game;

game = null;

io.sockets.on('connection', function(socket) {
  console.log('client connected');
  socket.on('connect', function(data) {
    connectHandler();
    if (connectedUsers() === 1) {
      createGame(socket);
      return joinGame(socket);
    } else if (connectedUsers() === 2) {
      return joinGame(socket);
    }
  });
  socket.on('disconnect', function(data) {
    return disconnectHandler();
  });
  socket.on('createRoom', function(data) {
    return createRoomHandler();
  });
  return socket.on('joinRoom', function(data) {
    return joinRoomHandler();
  });
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

createGame = function() {
  game = new Game();
  return false;
};

joinGame = function(socket) {
  return game.joinGame(socket);
};

connectedUsers = function() {
  return io.sockets.clients().length;
};

/*
	create new game when 2 players connected
*/


/*
//@ sourceMappingURL=server.js.map
*/
var Game, User, connectHandler, connectedUsers, createGame, createRoomHandler, disconnectHandler, game, io, joinGame, joinRoomHandler, server, users,
  _this = this;

server = require('http').createServer().listen(1234);

io = require('socket.io').listen(server);

Game = require('./game').Game;

User = require('./user').User;

game = null;

users = [];

io.sockets.on('connection', function(socket) {
  console.log('client connected');
  socket.on('connect', function(data) {
    return connectHandler(socket);
    /*		
    		if connectedUsers() is 1
    			createGame(socket)
    			joinGame(socket)
    		else if connectedUsers() is 2
    			joinGame(socket)
    */

  });
  socket.on('disconnect', function(data) {
    return disconnectHandler(socket);
  });
  socket.on('createRoom', function(data) {
    return createRoomHandler();
  });
  return socket.on('joinRoom', function(data) {
    return joinRoomHandler();
  });
});

connectHandler = function(socket) {
  console.log('connectHandler');
  users.push(new User(socket.id));
  return io.sockets.emit('users_updated', users);
};

disconnectHandler = function(socket) {
  var key, user, _i, _len;
  console.log('disconnectHandler');
  console.log(users);
  for (key = _i = 0, _len = users.length; _i < _len; key = ++_i) {
    user = users[key];
    console.log(user, key);
    if (user.id === socket.id) {
      users.splice(key, 1);
      break;
    }
  }
  console.log(users);
  return io.sockets.emit('users_updated', users);
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
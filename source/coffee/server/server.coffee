# Setup
server = require('http').createServer().listen(1234)
io = require('socket.io').listen(server)

Game = require('./game').Game

game = null


# Socket Events
io.sockets.on 'connection', (socket) =>
	console.log 'client connected'

	socket.on 'connect', (data) =>
		connectHandler()
		if connectedUsers() is 1
			createGame(socket)
			joinGame(socket)
		else if connectedUsers() is 2
			joinGame(socket)

	socket.on 'disconnect', (data) =>
		disconnectHandler()

	socket.on 'createRoom', (data) =>
		createRoomHandler()

	socket.on 'joinRoom', (data) =>
		joinRoomHandler()


# Socket Event Handlers
connectHandler = ->
	console.log 'connectHandler'

disconnectHandler = ->
	console.log 'disconnectHandler'

createRoomHandler = ->
	console.log 'createRoomHandler'

joinRoomHandler = ->
	console.log 'joinRoomHandler'


# Game Setup
createGame = ->
	game = new Game()
	#console.log game
	return false

joinGame = (socket) ->
	game.joinGame(socket)


# Misc
connectedUsers = ->
	io.sockets.clients().length


###
	create new game when 2 players connected
###
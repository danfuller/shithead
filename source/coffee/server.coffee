# Setup
server = require('http').createServer().listen(1234)
io = require('socket.io').listen(server)

# Socket Events
io.sockets.on 'connection', (socket) =>
		console.log 'client connected'

	socket.on 'connect', (data) =>
		connectHandler()

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



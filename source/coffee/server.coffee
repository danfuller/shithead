express = require 'express'
app = express()
server = require('http').createServer(app).listen(8080)
io = require('socket.io').listen(server)

app.get '/', (req, res) ->
  console.log 'woop'

io.sockets.on 'connection', (socket) ->
		console.log 'client connected'

define ["jquery","io"], ($,io) ->

	class App

		@USER = {}
		@GAME = {}

		connectedUsers = []

		constructor: ->
			App.USER.socket = io.connect('http://localhost:1234');
			@socketEvents()

			@userConnect()

		userConnect: ->
			App.USER.socket.emit 'connect', { name: 'jimmy' }

		socketEvents: ->
			console.log 'socketEvents'

			App.USER.socket.on 'users_updated', (data) ->
				$('body').html('')
				connectedUsers = data
				$.each connectedUsers, (i,x) ->
					$('body').append('<div>'+i+'__'+x.id+'</div>')
				
				console.log data

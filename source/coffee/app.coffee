define ["jquery","io"], ($,io) ->

	class App

		@USER = {}
		@GAME = {}

		constructor: ->
			App.USER.socket = io.connect('http://localhost:1234');
			@_userConnect()

		_userConnect: ->
			App.USER.socket.emit 'connect', { name: 'jimmy' }

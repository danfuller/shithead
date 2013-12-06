define ["jquery","io"], ($,io) ->

	class App

		@USER = {}
		@GAME = {}

		constructor: ->
			console.log 'constructor', @

			App.USER.socket = io.connect('http://localhost:1234');

			@_userConnect()


		_userConnect: ->
			console.log 'uC'
			console.log @
			App.USER.socket.emit 'connect', { name: 'jimmy' }

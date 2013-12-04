define ["jquery","io"], ($,io) ->

	class App

		@IO = {}

		constructor: ->
			App.IO.socket = io.connect('http://localhost:8080');

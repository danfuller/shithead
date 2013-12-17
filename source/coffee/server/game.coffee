Deck = require('./deck').Deck

class Game

	deck: new Deck()
	board: []
	discard: []

	maxPlayers: 2

	players: []

	direction: true

	constructor: ->
		console.log 'const'

	joinGame: (socket) =>
		@players.push socket

		if @players.length is @maxPlayers
			@dealCards
		
		#console.log @players

	dealCards: ->
		

	###
	magic
		card & behaviour

	players
		under
		overs
		hand
	###




exports.Game = Game
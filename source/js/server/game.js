var Deck, Game,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Deck = require('./deck').Deck;

Game = (function() {
  Game.prototype.deck = new Deck();

  Game.prototype.board = [];

  Game.prototype.discard = [];

  Game.prototype.maxPlayers = 2;

  Game.prototype.players = [];

  Game.prototype.direction = true;

  function Game() {
    this.joinGame = __bind(this.joinGame, this);
    console.log('const');
  }

  Game.prototype.joinGame = function(socket) {
    this.players.push(socket);
    if (this.players.length === this.maxPlayers) {
      return this.dealCards;
    }
  };

  Game.prototype.dealCards = function() {};

  /*
  	magic
  		card & behaviour
  
  	players
  		under
  		overs
  		hand
  */


  return Game;

})();

exports.Game = Game;

/*
//@ sourceMappingURL=game.js.map
*/
define(["jquery", "io"], function($, io) {
  var App;
  return App = (function() {
    App.USER = {};

    App.GAME = {};

    function App() {
      App.USER.socket = io.connect('http://localhost:1234');
      this._userConnect();
    }

    App.prototype._userConnect = function() {
      return App.USER.socket.emit('connect', {
        name: 'jimmy'
      });
    };

    return App;

  })();
});

/*
//@ sourceMappingURL=app.js.map
*/
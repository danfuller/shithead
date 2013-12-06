define(["jquery", "io"], function($, io) {
  var App;
  return App = (function() {
    App.USER = {};

    App.GAME = {};

    function App() {
      console.log('constructor', this);
      App.USER.socket = io.connect('http://localhost:1234');
      this._userConnect();
    }

    App.prototype._userConnect = function() {
      console.log('uC');
      console.log(this);
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
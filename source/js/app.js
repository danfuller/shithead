define(["jquery", "io"], function($, io) {
  var App;
  return App = (function() {
    var connectedUsers;

    App.USER = {};

    App.GAME = {};

    connectedUsers = [];

    function App() {
      App.USER.socket = io.connect('http://localhost:1234');
      this.socketEvents();
      this.userConnect();
    }

    App.prototype.userConnect = function() {
      return App.USER.socket.emit('connect', {
        name: 'jimmy'
      });
    };

    App.prototype.socketEvents = function() {
      console.log('socketEvents');
      return App.USER.socket.on('users_updated', function(data) {
        $('body').html('');
        connectedUsers = data;
        $.each(connectedUsers, function(i, x) {
          return $('body').append('<div>' + i + '__' + x.id + '</div>');
        });
        return console.log(data);
      });
    };

    return App;

  })();
});

/*
//@ sourceMappingURL=app.js.map
*/
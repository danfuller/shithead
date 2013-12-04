define(["jquery", "io"], function($, io) {
  var App;
  return App = (function() {
    App.IO = {};

    function App() {
      App.IO.socket = io.connect('http://localhost:8080');
    }

    return App;

  })();
});

/*
//@ sourceMappingURL=app.js.map
*/
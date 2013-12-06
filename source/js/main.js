require.config({
  paths: {
    "jquery": "../vendor/jquery",
    "ractive": "../vendor/ractive",
    "io": "http://localhost:1234/socket.io/socket.io"
  },
  shim: {
    app: ["jquery"],
    "io": {
      "export": "io"
    }
  }
});

require(["app"], function(App) {
  return new App();
});

/*
//@ sourceMappingURL=main.js.map
*/
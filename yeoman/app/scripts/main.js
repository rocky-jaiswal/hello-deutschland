(function() {
  window.DeutschApp = {
    Model: {},
    Collection: {},
    View: {},
    Router: {},
    Service: {},
    JST: {},
    init: function() {
      new DeutschApp.Router.AppRouter();
      return Backbone.history.start();
    }
  };

  $(function() {
    return DeutschApp.init();
  });

}).call(this);

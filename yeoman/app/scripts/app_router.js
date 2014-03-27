(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  DeutschApp.Router.AppRouter = (function(_super) {
    __extends(AppRouter, _super);

    function AppRouter() {
      return AppRouter.__super__.constructor.apply(this, arguments);
    }

    AppRouter.prototype.routes = {
      "": "main",
      "show/:phrase": "showPhrase"
    };

    AppRouter.prototype.main = function() {
      return new DeutschApp.View.Main();
    };

    AppRouter.prototype.showPhrase = function(phrase) {
      this.phraseView || (this.phraseView = new DeutschApp.View.Phrase());
      return this.phraseView.render(phrase);
    };

    return AppRouter;

  })(Backbone.Router);

}).call(this);

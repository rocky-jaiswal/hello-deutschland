(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  DeutschApp.View.Main = (function(_super) {
    __extends(Main, _super);

    function Main() {
      this.render = __bind(this.render, this);
      return Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.el = "#form-content";

    Main.prototype.events = {
      "submit #main-form": "handleSubmit"
    };

    Main.prototype.template = Handlebars.compile(JST["app/coffee/templates/main.hbs"]());

    Main.prototype.initialize = function() {
      this.suggestionsView = new DeutschApp.View.Suggestions();
      this.clearContent();
      return this.render();
    };

    Main.prototype.clearContent = function() {
      return $("#card-content").html("");
    };

    Main.prototype.render = function() {
      return this.$el.html(this.template);
    };

    Main.prototype.handleSubmit = function(e) {
      e.preventDefault();
      this.clearContent();
      return this.getSuggestions($("#main-form > #phrase").val());
    };

    Main.prototype.getSuggestions = function(phrase) {
      var engine, suggestions;
      if (phrase && phrase.length > 0) {
        engine = new DeutschApp.Service.Engine();
        suggestions = engine.search(phrase);
        if (_.isEmpty(suggestions)) {
          suggestions = ["Not Found"];
        }
        return this.showSuggestions(suggestions);
      }
    };

    Main.prototype.showSuggestions = function(suggestions) {
      return this.suggestionsView.render(suggestions);
    };

    return Main;

  })(Backbone.View);

}).call(this);

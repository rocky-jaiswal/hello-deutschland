(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  DeutschApp.View.Home = (function(_super) {
    __extends(Home, _super);

    function Home() {
      this.render = __bind(this.render, this);
      return Home.__super__.constructor.apply(this, arguments);
    }

    Home.prototype.el = "#form-content";

    Home.prototype.events = {
      "submit #main-form": "handleSubmit"
    };

    Home.prototype.template = Handlebars.compile(JST["app/coffee/templates/main.hbs"]());

    Home.prototype.initialize = function() {
      console.log("init home...");
      return this.render();
    };

    Home.prototype.render = function() {
      return this.$el.html(this.template);
    };

    Home.prototype.handleSubmit = function(e) {
      var phrase;
      e.preventDefault();
      phrase = $("#main-form > #phrase").val();
      return this.getSuggestions(phrase);
    };

    Home.prototype.getSuggestions = function(phrase) {
      return this.showSuggestions(["gut", "gut nacht", "guten morgen", "guten abend", "guten tag"]);
    };

    Home.prototype.showSuggestions = function(suggestions) {
      var suggestionsView;
      suggestionsView = new DeutschApp.View.Suggestions();
      return suggestionsView.render(suggestions);
    };

    return Home;

  })(Backbone.View);

}).call(this);
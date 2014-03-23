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
      this.suggestionsView = new DeutschApp.View.Suggestions();
      this.clearContent();
      return this.render();
    };

    Home.prototype.clearContent = function() {
      $("#card-content").html("");
      return $("#main-content").html("");
    };

    Home.prototype.render = function() {
      return this.$el.html(this.template);
    };

    Home.prototype.handleSubmit = function(e) {
      e.preventDefault();
      this.clearContent();
      return this.getSuggestions($("#main-form > #phrase").val());
    };

    Home.prototype.getSuggestions = function(phrase) {
      var engine;
      engine = new DeutschApp.Service.Engine();
      return this.showSuggestions(engine.search(phrase));
    };

    Home.prototype.showSuggestions = function(suggestions) {
      return this.suggestionsView.render(suggestions);
    };

    return Home;

  })(Backbone.View);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  DeutschApp.View.ShowPhrase = (function(_super) {
    __extends(ShowPhrase, _super);

    function ShowPhrase() {
      return ShowPhrase.__super__.constructor.apply(this, arguments);
    }

    ShowPhrase.prototype.el = "#main-content";

    ShowPhrase.prototype.initialize = function(options) {
      this.options = options;
      return this.render();
    };

    ShowPhrase.prototype.render = function() {
      return this.$el.html(this.template());
    };

    ShowPhrase.prototype.template = function() {
      return Handlebars.compile(JST["app/coffee/templates/phrase.hbs"](_.pick(this.options, 'phrase')));
    };

    return ShowPhrase;

  })(Backbone.View);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  DeutschApp.View.Suggestions = (function(_super) {
    __extends(Suggestions, _super);

    function Suggestions() {
      return Suggestions.__super__.constructor.apply(this, arguments);
    }

    Suggestions.prototype.el = "#card-content";

    Suggestions.prototype.initialize = function() {
      console.log("init suggestions...");
      return this.$el.html("");
    };

    Suggestions.prototype.render = function(items) {
      return this.$el.html(this.template({
        items: items
      }));
    };

    Suggestions.prototype.template = function(items) {
      return Handlebars.compile(JST["app/coffee/templates/suggestions.hbs"](items));
    };

    return Suggestions;

  })(Backbone.View);

}).call(this);

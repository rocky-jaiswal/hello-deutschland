(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  DeutschApp.View.Phrase = (function(_super) {
    __extends(Phrase, _super);

    function Phrase() {
      return Phrase.__super__.constructor.apply(this, arguments);
    }

    Phrase.prototype.el = "#main-content";

    Phrase.prototype.events = {
      "click .close": "hidePopup"
    };

    Phrase.prototype.initialize = function() {
      return this.engine = new DeutschApp.Service.Engine();
    };

    Phrase.prototype.render = function(phrase) {
      this.$el.html(this.template(phrase));
      return this.$el.show();
    };

    Phrase.prototype.template = function(phrase) {
      var obj, translation;
      translation = this.engine.translate(phrase);
      obj = {
        phrase: phrase,
        translation: translation
      };
      return Handlebars.compile(JST["app/coffee/templates/phrase.hbs"](obj));
    };

    Phrase.prototype.hidePopup = function(e) {
      return this.$el.hide();
    };

    return Phrase;

  })(Backbone.View);

}).call(this);

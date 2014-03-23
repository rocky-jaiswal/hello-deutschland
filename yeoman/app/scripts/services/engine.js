(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  DeutschApp.Service.Engine = (function() {
    function Engine() {
      this.matches = __bind(this.matches, this);
    }

    Engine.prototype.german_words = _.keys(translation_data);

    Engine.prototype.english_words = _.values(translation_data);

    Engine.prototype.invert = _.invert(translation_data);

    Engine.prototype.search = function(phrase) {
      this.phrase = phrase;
      return _.union(_.filter(this.german_words, this.matches), _.filter(this.english_words, this.matches));
    };

    Engine.prototype.matches = function(word) {
      var match;
      match = word.toLowerCase().match(this.phrase);
      return match && match.length > 0;
    };

    Engine.prototype.translate = function(phrase) {
      if (_.contains(this.german_words, phrase)) {
        return translation_data[phrase];
      } else {
        return this.invert[phrase];
      }
    };

    return Engine;

  })();

}).call(this);

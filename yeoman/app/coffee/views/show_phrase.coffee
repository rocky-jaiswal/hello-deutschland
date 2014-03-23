class DeutschApp.View.ShowPhrase extends Backbone.View

  el: "#main-content"

  initialize: ->
    console.log "init phrase..."

  render: (phrase) ->
    @$el.html(@template(phrase))
  
  template: (phrase) ->
    engine = new DeutschApp.Service.Engine()
    translation = engine.translate(phrase)
    obj = {phrase: phrase, translation: translation}
    Handlebars.compile(JST["app/coffee/templates/phrase.hbs"](obj))

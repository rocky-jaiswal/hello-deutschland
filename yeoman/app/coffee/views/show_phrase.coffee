class DeutschApp.View.ShowPhrase extends Backbone.View

  el: "#main-content"

  initialize: ->
    console.log "init phrase..."

  render: (phrase) ->
    @$el.html(@template(phrase))
  
  template: (phrase) ->
    #need to get phrase and it's translation
    Handlebars.compile(JST["app/coffee/templates/phrase.hbs"](phrase))

class DeutschApp.Router.AppRouter extends Backbone.Router

  routes:
    "" : "home"
    "show/:phrase" : "showPhrase"

  home: ->
    new DeutschApp.View.Home()

  showPhrase: (phrase) ->
    console.log "show route triggered"
    @phraseView ||= new DeutschApp.View.ShowPhrase()
    @phraseView.render(phrase)
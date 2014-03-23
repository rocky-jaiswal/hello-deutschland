class DeutschApp.Router.AppRouter extends Backbone.Router

  routes:
    "" : "home"
    "show/:phrase" : "showPhrase"

  home: ->
    new DeutschApp.View.Home()

  showPhrase: (phrase) ->
    @phraseView ||= new DeutschApp.View.ShowPhrase()
    @phraseView.render(phrase)
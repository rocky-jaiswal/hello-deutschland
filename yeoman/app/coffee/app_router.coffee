class DeutschApp.Router.AppRouter extends Backbone.Router

  routes:
    "" : "main"
    "show/:phrase" : "showPhrase"

  main: ->
    new DeutschApp.View.Main()

  showPhrase: (phrase) ->
    @phraseView ||= new DeutschApp.View.Phrase()
    @phraseView.render(phrase)
class DeutschApp.Router.AppRouter extends Backbone.Router

  routes:
    "" : "home"
    "show/:phrase" : "showPhrase"

  home: ->
    new DeutschApp.View.Home()

  showPhrase: (phrase) ->
    new DeutschApp.View.ShowPhrase({phrase: phrase, app: @})
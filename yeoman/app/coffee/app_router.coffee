class DeutschApp.Router.AppRouter extends Backbone.Router

  routes:
    "" : "home"

  home: ->
    new DeutschApp.View.Home()
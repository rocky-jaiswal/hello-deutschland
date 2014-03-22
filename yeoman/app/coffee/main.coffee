window.DeutschApp =
  
  Model: {}
  Collection: {}
  View: {}
  Router: {}
  JST: {}
  
  init: ->
    new DeutschApp.Router.AppRouter()
    Backbone.history.start()

$ ->
  DeutschApp.init()
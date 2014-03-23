window.DeutschApp =
  
  Model: {}
  Collection: {}
  View: {}
  Router: {}
  Service: {}
  JST: {}
  
  init: ->
    new DeutschApp.Router.AppRouter()
    Backbone.history.start()

$ ->
  DeutschApp.init()
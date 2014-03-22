class DeutschApp.View.Home extends Backbone.View

  el: "#main-content"

  template:
    Handlebars.compile(JST["app/coffee/templates/main.hbs"]())

  initialize: ->
    @render()

  render: =>
    @$el.html(@template)
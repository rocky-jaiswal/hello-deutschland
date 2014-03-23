class DeutschApp.View.ShowPhrase extends Backbone.View

  el: "#main-content"

  initialize: (@options) ->
    @render()

  render: ->
    @$el.html(@template())
  
  template: ->
    Handlebars.compile(JST["app/coffee/templates/phrase.hbs"](_.pick(@options, 'phrase')))

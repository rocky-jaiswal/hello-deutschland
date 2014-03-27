class DeutschApp.View.Suggestions extends Backbone.View

  el: "#card-content"

  initialize: ->
    

  render: (items) ->
    @$el.html(@template({items: items}))

  template: (items) ->
    Handlebars.compile(JST["app/coffee/templates/suggestions.hbs"](items))

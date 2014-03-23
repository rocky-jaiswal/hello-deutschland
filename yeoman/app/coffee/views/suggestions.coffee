class DeutschApp.View.Suggestions extends Backbone.View

  el: "#card-content"

  initialize: ->
    console.log "init suggestions..."

  render: (items) ->
    @$el.html(@template({items: items}))
  
  template: (items) ->
    Handlebars.compile(JST["app/coffee/templates/suggestions.hbs"](items))

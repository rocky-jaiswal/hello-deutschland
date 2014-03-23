class DeutschApp.View.Home extends Backbone.View

  el: "#form-content"

  events:
    "submit #main-form"  :  "handleSubmit"

  template:
    Handlebars.compile(JST["app/coffee/templates/main.hbs"]())

  initialize: ->
    @suggestionsView = new DeutschApp.View.Suggestions()
    @clearContent()
    @render()

  clearContent: ->
    $("#card-content").html("")
    $("#main-content").html("")

  render: =>
    @$el.html(@template)

  handleSubmit: (e) ->
    e.preventDefault()
    @clearContent()
    @getSuggestions($("#main-form > #phrase").val())
  
  getSuggestions: (phrase) ->
    engine = new DeutschApp.Service.Engine()
    @showSuggestions engine.search(phrase)

  showSuggestions: (suggestions) ->
    # @undelegateEvents()
    @suggestionsView.render(suggestions)
class DeutschApp.View.Main extends Backbone.View

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

  render: =>
    @$el.html(@template)

  handleSubmit: (e) ->
    e.preventDefault()
    @clearContent()
    @getSuggestions($("#main-form > #phrase").val())

  getSuggestions: (phrase) ->
    if phrase && phrase.length > 0
      engine = new DeutschApp.Service.Engine()
      suggestions = engine.search(phrase)
      suggestions = ["not found"] if _.isEmpty suggestions
      @showSuggestions suggestions

  showSuggestions: (suggestions) ->
    # @undelegateEvents()
    @suggestionsView.render(suggestions)

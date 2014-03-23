class DeutschApp.View.Home extends Backbone.View

  el: "#form-content"

  events:
    "submit #main-form"  :  "handleSubmit"

  template:
    Handlebars.compile(JST["app/coffee/templates/main.hbs"]())

  initialize: ->
    console.log "init home..."
    @render()

  render: =>
    @$el.html(@template)

  handleSubmit: (e) ->
    e.preventDefault()
    phrase = $("#main-form > #phrase").val()
    @getSuggestions(phrase)
  
  getSuggestions: (phrase) ->
    @showSuggestions ["gut", "gut nacht", "guten morgen", "guten abend", "guten tag"]

  showSuggestions: (suggestions) ->
    # @undelegateEvents()
    suggestionsView = new DeutschApp.View.Suggestions()
    suggestionsView.render(suggestions)
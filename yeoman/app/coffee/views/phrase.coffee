class DeutschApp.View.Phrase extends Backbone.View

  el: "#main-content"

  events:
    "click .close"  :  "hidePopup"

  initialize: ->
    @engine = new DeutschApp.Service.Engine()

  render: (phrase) ->
    @$el.html(@template(phrase))
    @$el.show()

  template: (phrase) ->
    translation = @engine.translate(phrase)
    obj = {phrase: phrase, translation: translation}
    Handlebars.compile(JST["app/coffee/templates/phrase.hbs"](obj))

  hidePopup: (e)->
    # e.preventDefault()
    @$el.hide()

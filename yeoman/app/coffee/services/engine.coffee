class DeutschApp.Service.Engine

  german_words:
    _.keys(translation_data)

  english_words:
    _.values(translation_data)

  invert:
    _.invert(translation_data)

  search: (@phrase) ->
    _.union(_.filter(@german_words, @matches), _.filter(@english_words, @matches))

  matches: (word) =>
    match =  word.toLowerCase().match(@phrase)
    match && match.length > 0

  translate: (phrase) ->
    if _.contains(@german_words, phrase)
      translation_data[phrase]
    else
      @invert[phrase]
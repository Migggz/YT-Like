export const highlightSearchKeyword = (query, text) => {
  if (query === "") return text
  let regex = new RegExp(query, "gi")
  let newText = text.replace(regex, function(str) {
    return "<b>" + str + "</b>"
  })
  return newText
}

export const serializeParams = params => {
  let serializedParams = ""
  for (var key in params) {
    if (serializedParams !== "") {
      serializedParams += "&"
    }
    serializedParams += key + "=" + params[key]
  }
  return "?" + serializedParams
}


import beautify from "beautify"

const formatHTML = (html) => {
  const formatted = beautify(html, {
    format: 'html'
  })
  return formatted
}

export { formatHTML }
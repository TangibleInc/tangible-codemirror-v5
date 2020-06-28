const CodeMirror = require('./lib/all')
const {
  commonOptions,
  languageOptions
} = require('./options')

module.exports = function createCodeMirror(el, options = {}) {

  const fn = el.tagName==='TEXTAREA' ? CodeMirror.fromTextArea : CodeMirror

  const {
    language = 'html',
    ...passOptions
  } = options

  const codeMirrorOptions = {
    ...commonOptions,
    ...languageOptions[language],
    ...passOptions,
  }

  let editor

  if (language==='html') Object.assign(codeMirrorOptions.extraKeys, {
    Tab: function(cm, ctx) {

      if (CodeMirror.commands.emmetExpandAbbreviation) {
        const result = CodeMirror.commands.emmetExpandAbbreviation(cm, ctx)
        if (!result) return // Returns an object if *not* expanded
      }

      const spaces = Array(editor.getOption("indentUnit") + 1).join(" ")
      editor.replaceSelection(spaces)
    },
  })

  editor = fn(el, codeMirrorOptions)

  return { CodeMirror, editor }
}
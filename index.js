const CodeMirror = require('./lib/all')
const {
  commonOptions,
  languageOptions
} = require('./options')

function createCodeMirror(el, options = {}) {

  const fn = el.tagName==='TEXTAREA' ? CodeMirror.fromTextArea : CodeMirror

  const {
    language = 'html',
    resizable = false,
    ...passOptions
  } = options

  const codeMirrorOptions = {
    ...commonOptions,
    ...languageOptions[language],
    ...passOptions,
    ...(
      // If no vertical resize - .CodeMirror height: auto or 100%
      !resizable || resizable==='horizontal' ?  { viewportMargin: Infinity }
        : {}
    )
  }

  let editor

  codeMirrorOptions.extraKeys = {
    ...codeMirrorOptions.extraKeys,
    Tab: function(cm, ctx) {

      if (CodeMirror.commands.emmetExpandAbbreviation) {
        const result = CodeMirror.commands.emmetExpandAbbreviation(cm, ctx)
        if (!result) return // Returns an object if *not* expanded
      }

      const spaces = Array(editor.getOption("indentUnit") + 1).join(" ")
      editor.replaceSelection(spaces)
    }
  }

  codeMirrorOptions.emmet = passOptions.emmet===false
    ? false
    : {
      ...codeMirrorOptions.emmet,
      ...(passOptions.emmet || {})
    }


  editor = fn(el, codeMirrorOptions)

  const $editor = editor.getWrapperElement()

  if (resizable) {
    $editor.style.resize = resizable===true ? 'vertical' : resizable // horizontal, both, none
  }

  editor.element = $editor

  return editor
}

Object.assign(createCodeMirror, {
  CodeMirror, // For convenient access without calling create
  commonOptions,
  languageOptions
})

module.exports = createCodeMirror
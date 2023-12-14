// Code editor with sensible defaults for HTML templates and common languages
import createCodeEditor from '../index.js' // Was @tangible/codemirror

const {
  CodeMirror, // Direct access to underlying CodeMirror
  commonOptions,
  languageOptions,
} = createCodeEditor

Object.assign(CodeMirror, {
  commonOptions,
  languageOptions,
})

window.Tangible = window.Tangible || {}
window.Tangible.CodeMirror = CodeMirror
window.Tangible.createCodeEditor = createCodeEditor

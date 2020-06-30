import createCodeMirror from '../index'

createCodeMirror(
  document.getElementById('html-editor'),
  {
    language: 'html',
    resizable: 'vertical'
  }
)

createCodeMirror(
  document.getElementById('css-editor'),
  {
    language: 'css',
    resizable: 'both'
  }
)

createCodeMirror(
  document.getElementById('javascript-editor'),
  {
    language: 'javascript'
  }
)

createCodeMirror(
  document.getElementById('json-editor'),
  {
    language: 'json'
  }
)

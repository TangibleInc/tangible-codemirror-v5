import createCodeMirror from '../index'

createCodeMirror(
  document.getElementById('html-editor'),
  {
    language: 'html'
  }
)

createCodeMirror(
  document.getElementById('css-editor'),
  {
    language: 'css'
  }
)

createCodeMirror(
  document.getElementById('javascript-editor'),
  {
    language: 'javascript'
  }
)

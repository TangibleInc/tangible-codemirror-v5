
const commonOptions = {
  theme: 'tangible-light',
  mode: 'text/html',
  value: '',

  tabIndex: 1,
  tabSize: 2,
  indentUnit: 2,
  indentWithTabs: false,

  spellcheck: false,
  //viewportMargin: Infinity, // With .CodeMirror height: auto or 100%
  scrollbarStyle: 'simple',

  //autofocus: true,

  gutters: ["CodeMirror-lint-markers"],
  lineNumbers: true,
  // styleActiveLine: true,

  hint: false,
  lint: true,

  matchBrackets: true,
  matchTags: true,
  autoCloseBrackets: true,
  autoCloseTags: true,

  extraKeys: {
    "Alt-F": 'findPersistent',
    'Ctrl-S': function(cm) {
      console.log('Save')
    },
    'Cmd-S': function(cm) {
      console.log('Save')
    },
    'Enter': 'emmetInsertLineBreak',
    'Ctrl-Space': 'autocomplete'
  },
}

const cssLintOptions ={
  // https://github.com/CSSLint/csslint/wiki/Rules
  rules: {
    'errors'                    : true, // Parsing errors.
    'box-model'                 : true,
    'display-property-grouping' : true,
    'duplicate-properties'      : true,
    'known-properties'          : true,
    'outline-none'              : true,
    'no-important': 0,
    'hex-notation': 0,
    'variable-for-property': 0,
    'no-empty-rulesets': 1,
  }
}

const jsHintOptions = {
  // https://jshint.com/docs/options/
  'asi'      : true,
  'boss'     : true,
  'curly'    : true,
  'eqeqeq'   : true,
  'eqnull'   : true,
  'es3'      : true,
  'expr'     : true,
  'immed'    : true,
  'lastsemic': true,
  'noarg'    : true,
  'nonbsp'   : true,
  'onevar'   : true,
  'quotmark' : 'single',
  'trailing' : true,
  'undef'    : true,
  'unused'   : true,

  'browser'  : true,

  'globals': {
    '_'        : false,
    'Backbone' : false,
    'jQuery'   : false,
    'JSON'     : false,
    'wp'       : false,
  }
}

const languageOptions = {
  html: {
    mode: 'application/x-httpd-php', // 'text/html'
    lint: {
      options: {
        rules: {
          "tagname-lowercase": false,
          "attr-lowercase": true,
          "attr-value-double-quotes": true,
          "doctype-first": false,
          "tag-pair": true,
          "spec-char-escape": true,
          "id-unique": true,
          "src-not-empty": true,
          "attr-no-duplication": true,
          csslint: cssLintOptions,
          jshint: jsHintOptions
        }
      }
    }
  },
  css: {
    mode: 'text/css',
    lint: {
      options: cssLintOptions
    }
  },
  sass: {
    mode: 'text/x-scss',
    lint: {
      options: cssLintOptions
    }
  },
  javascript: {
    mode: 'application/javascript',
    lint: {
      options: jsHintOptions
    }
  },
  json: {
    mode: 'application/json',
  },
  php: {
    mode: 'application/x-httpd-php', // Was text/html
  }
}

module.exports = {
  commonOptions,
  languageOptions
}
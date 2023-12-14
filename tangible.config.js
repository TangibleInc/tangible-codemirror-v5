module.exports = {
  build: [
    // CodeMirror
    {
      src: 'tangible-codemirror/index.js',
      dest: 'build/tangible-codemirror.min.js',
      map: false,
    },
    {
      src: 'tangible-codemirror/index.scss',
      dest: 'build/tangible-codemirror.min.css',
      map: false,
    },
    {
      src: 'themes/light.scss',
      dest: 'build/tangible-codemirror-theme-light.min.css',
      map: false,
    },

    // Minify vendor libraries
    {
      src: 'lib/htmlhint/index.js',
      dest: 'vendor/htmlhint.min.js',
      map: false
    },
    {
      src: 'lib/csslint.js',
      dest: 'vendor/csslint.min.js',
      map: false
    },
    {
      src: 'lib/jshint.js',
      dest: 'vendor/jshint.min.js',
      map: false,
    },
    {
      src: 'lib/jsonlint.js',
      dest: 'vendor/jsonlint.min.js',
      map: false,
    },
    {
      src: 'lib/scsslint.js',
      dest: 'vendor/scsslint.min.js',
      map: false,
    },

    // Test page
    {
      src: 'test/index.js',
      dest: 'build/index.min.js',
    },
    {
      src: 'test/index.scss',
      dest: 'build/index.min.css',
    },
    {
      src: 'test/index.html',
      dest: 'build',
    },
  ],
  serve: {
    dir: 'build',
    port: 3000
  }
}
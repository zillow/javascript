/**
 * Custom overrides
 */

module.exports = {
  rules: {
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          // allow triple-slashed directives
          markers: ['/'],
        },
      },
    ],

    // pretty disastrous with type imports and whatnot
    // TODO: maybe fix?
    'import/first': 'off',

    /**
     * Root Plugin Overrides
     */

    // TSX is JSX, too!
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],

    // typescript parser doesn't play nicely with react plugin
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': 'off',
  },
};

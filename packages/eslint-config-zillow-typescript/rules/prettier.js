const prettierConfig = require('../prettier.config');

const amendedPrettierConfig = {
  ...prettierConfig,
  ...prettierConfig.overrides[2].options,
  overrides: undefined,
};

module.exports = {
  plugins: ['prettier'],

  rules: {
    /**
     * Override prettier rules because prettier overrides aren't eslint overrides
     */
    'prettier/prettier': [
      'error',
      amendedPrettierConfig,
      {
        usePrettierrc: false,
      },
    ],

    /**
     * Prettier overrides
     * @see https://github.com/prettier/eslint-config-prettier/blob/7cad28d0/%40typescript-eslint.js#L5-L17
     */
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',

    // v4.0+
    '@typescript-eslint/comma-dangle': 'off',
  },
};

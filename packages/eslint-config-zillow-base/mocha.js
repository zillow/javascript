module.exports = {
  env: {
    mocha: true
  },
  plugins: [
    'mocha',
  ],

  rules: {
    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/handle-done-callback.md
    'mocha/handle-done-callback': 'error',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/max-top-level-suites.md
    'mocha/max-top-level-suites': 'off',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-async-describe.md
    'mocha/no-async-describe': 'error',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md
    'mocha/no-exclusive-tests': 'error',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-global-tests.md
    'mocha/no-global-tests': 'off',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-hooks-for-single-case.md
    'mocha/no-hooks-for-single-case': 'off',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-hooks.md
    'mocha/no-hooks': 'off',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-identical-title.md
    'mocha/no-identical-title': 'error',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-mocha-arrows.md
    'mocha/no-mocha-arrows': 'warn',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-nested-tests.md
    'mocha/no-nested-tests': 'error',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-pending-tests.md
    'mocha/no-pending-tests': 'warn',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-return-and-callback.md
    'mocha/no-return-and-callback': 'error',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-setup-in-describe.md
    'mocha/no-setup-in-describe': 'off',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-sibling-hooks.md
    'mocha/no-sibling-hooks': 'off',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-skipped-tests.md
    'mocha/no-skipped-tests': 'warn',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-synchronous-tests.md
    'mocha/no-synchronous-tests': 'off',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-top-level-hooks.md
    'mocha/no-top-level-hooks': 'off',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/prefer-arrow-callback.md
    'mocha/prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/valid-suite-description.md
    'mocha/valid-suite-description': 'off',

    // https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/valid-test-description.md
    'mocha/valid-test-description': 'off',
  },
};

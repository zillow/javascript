/**
 * Overrides of eslint-recommended (alphabetized)
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/39c45f3/packages/eslint-plugin/src/configs/eslint-recommended.ts#L11-L31
 */

module.exports = {
  rules: {
    // ts(2335) & ts(2377)
    'constructor-super': 'off',

    // ts(2378)
    'getter-return': 'off',

    // ts(2588)
    'no-const-assign': 'off',

    // ts(2300)
    'no-dupe-args': 'off',

    // ts(2393) & ts(2300)
    'no-dupe-class-members': 'off',

    // ts(1117)
    'no-dupe-keys': 'off',

    // ts(2539)
    'no-func-assign': 'off',

    // ts(2539) & ts(2540)
    'no-import-assign': 'off',

    // ts(2588)
    'no-new-symbol': 'off',

    // ts(2349)
    'no-obj-calls': 'off',

    // ts(2451)
    'no-redeclare': 'off',

    // ts(2408)
    'no-setter-return': 'off',

    // ts(2376)
    'no-this-before-super': 'off',

    // ts(2304)
    'no-undef': 'off',

    // ts(7027)
    'no-unreachable': 'off',

    // ts(2365) & ts(2360) & ts(2358)
    'no-unsafe-negation': 'off',

    // ts transpiles let/const to var, so no need for vars any more
    'no-var': 'error',

    // ts provides better types with const
    'prefer-const': 'error',

    // ts provides better types with rest args over arguments
    'prefer-rest-params': 'error',

    // ts transpiles spread to apply, so no need for manual apply
    'prefer-spread': 'error',

    // ts(2367)
    'valid-typeof': 'off',
  },
};

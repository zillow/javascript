module.exports = {
  extends: [
    './rules/prettier',
    './rules/eslint-recommended',
    './rules/recommended',
    './rules/recommended-requiring-type-checking',
    './rules/all-remaining',
    './rules/other-plugin-overrides',
  ].map(require.resolve),

  parser: require.resolve('@typescript-eslint/parser'),

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },

  plugins: ['@typescript-eslint'],

  rules: {},
};

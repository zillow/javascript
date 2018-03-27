module.exports = {
  extends: [
    'eslint-config-zillow-base',
    'eslint-config-zillow-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};

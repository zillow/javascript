const config = require('../prettier.config');

module.exports = {
  plugins: [
    'prettier'
  ],

  rules: {
    'prettier/prettier': ['error', config, {
      usePrettierrc: false
    }]
  }
};

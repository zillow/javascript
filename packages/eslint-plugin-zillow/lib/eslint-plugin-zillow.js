'use strict';

const getPluginRules = require('./get-plugin-rules');
const recommended = require('./configs/recommended.json');

module.exports = {
    configs: {
        recommended,
    },
    rules: getPluginRules(),
};

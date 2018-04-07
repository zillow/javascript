'use strict';

const { getPluginProcessors, getPluginRules } = require('./plugins');
const jestConfig = require('./configs/jest.json');
const recommendedConfig = require('./configs/recommended.json');

module.exports = {
    configs: {
        jest: jestConfig,
        recommended: recommendedConfig,
    },
    processors: getPluginProcessors(),
    rules: getPluginRules(),
};

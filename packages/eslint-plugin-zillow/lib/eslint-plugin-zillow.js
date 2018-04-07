'use strict';

const { getPluginProcessors, getPluginRules } = require('./plugins');
const jestConfig = require('./configs/jest.json');
const mochaConfig = require('./configs/mocha.json');
const recommendedConfig = require('./configs/recommended.json');

module.exports = {
    configs: {
        jest: jestConfig,
        mocha: mochaConfig,
        recommended: recommendedConfig,
    },
    processors: getPluginProcessors(),
    rules: getPluginRules(),
};

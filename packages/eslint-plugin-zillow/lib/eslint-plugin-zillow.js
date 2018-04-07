'use strict';

const { getPluginProcessors, getPluginRules } = require('./plugins');
const recommendedConfig = require('./configs/recommended.json');

module.exports = {
    configs: {
        recommended: recommendedConfig,
    },
    processors: getPluginProcessors(),
    rules: getPluginRules(),
};

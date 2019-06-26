'use strict';

const { getPluginProcessors, getPluginRules } = require('./plugins');
const jestConfig = require('./configs/jest.json');
const mochaConfig = require('./configs/mocha.json');
const recommendedConfig = require('./configs/recommended.json');

// resolve parser to support pnpm strict linking
recommendedConfig.parser = require.resolve(recommendedConfig.parser);

// ditto, but for import plugin resolver
recommendedConfig.settings['import/resolver'] = {
    [require.resolve('eslint-import-resolver-node')]: recommendedConfig.settings['import/resolver']
        .node,
};

module.exports = {
    configs: {
        jest: jestConfig,
        mocha: mochaConfig,
        recommended: recommendedConfig,
    },
    // TODO: environments
    processors: getPluginProcessors(),
    rules: getPluginRules(),
};

'use strict';

const { CLIEngine } = require('eslint');

module.exports = getComputedConfig;

function getComputedConfig(baseConfig) {
    const cli = new CLIEngine({
        useEslintrc: false,
        allowInlineConfig: false,
        baseConfig,
    });

    const computed = cli.getConfigForFile('index.js');

    // remove unnecessary fields
    delete computed.filePath;
    delete computed.baseDirectory;

    // FIXME: Propagate environments correctly
    delete computed.env;

    return computed;
}

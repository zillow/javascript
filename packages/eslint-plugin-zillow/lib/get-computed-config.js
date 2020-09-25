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

    // un-resolve parser (re-resolved during re-export)
    if (computed.parser && baseConfig.parser && computed.parser !== baseConfig.parser) {
        computed.parser = baseConfig.parser;
    }

    return computed;
}

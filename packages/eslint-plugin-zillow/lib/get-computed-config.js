'use strict';

const { ESLint } = require('eslint');

module.exports = getComputedConfig;

async function getComputedConfig(baseConfig) {
    const engine = new ESLint({
        useEslintrc: false,
        allowInlineConfig: false,
        baseConfig,
    });

    const computed = await engine.calculateConfigForFile('index.js');

    // remove unnecessary fields
    delete computed.filePath;
    delete computed.baseDirectory;

    // un-resolve parser (re-resolved during re-export)
    if (computed.parser && baseConfig.parser && computed.parser !== baseConfig.parser) {
        computed.parser = baseConfig.parser;
    }

    return computed;
}

#!/usr/bin/env node

/**
 * Generate the computed JSON config during 'prepare'
 */

const fs = require('fs');
const path = require('path');
const getComputedConfig = require('./get-computed-config');
const wrapInPlugin = require('./wrap-in-plugin');

renderConfig('jest', { extends: ['zillow/jest'] }, [
    // prettier-ignore
    '**/*{-,.}test.js',
    '**/*.stories.js',
    '**/__tests__/**/*.js',
    '**/test/**/*.js',
]);

renderConfig('mocha', { extends: ['zillow/mocha'] }, [
    // prettier-ignore
    '**/*-test.js',
    '**/test/**/*.js',
]);

renderConfig('recommended', {
    extends: ['zillow'],
});

function renderConfig(name, config, overrides) {
    const computedConfig = getComputedConfig(config);
    const wrappedConfig = wrapInPlugin(computedConfig, overrides);
    const targetPath = path.join(__dirname, `configs/${name}.json`);

    if (process.env.NODE_ENV !== 'test') {
        // eslint-disable-next-line no-console
        console.log(`writing ${path.relative('.', targetPath)}`);
    }

    fs.writeFileSync(targetPath, JSON.stringify(wrappedConfig, null, 2));
}

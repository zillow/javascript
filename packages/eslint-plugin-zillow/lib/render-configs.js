#!/usr/bin/env node

/**
 * Generate the computed JSON config during 'prepare'
 */

const fs = require('fs');
const path = require('path');
const getComputedConfig = require('./get-computed-config');
const wrapInPlugin = require('./wrap-in-plugin');

const configs = {
    jest: {
        extends: [/* 'zillow', */ 'zillow/jest'],
    },
    recommended: {
        extends: ['zillow'],
    },
};

Object.keys(configs).forEach(name => {
    const config = configs[name];
    const computedConfig = getComputedConfig(config);
    const wrappedConfig = wrapInPlugin(computedConfig);
    const targetPath = path.join(__dirname, `configs/${name}.json`);

    if (process.env.NODE_ENV !== 'test') {
        // eslint-disable-next-line no-console
        console.log(`writing ${path.relative('.', targetPath)}`);
    }

    fs.writeFileSync(targetPath, JSON.stringify(wrappedConfig, null, 2));
});

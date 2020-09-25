#!/usr/bin/env node

/**
 * Generate the computed JSON config during 'prepare'
 */

const fs = require('fs');
const path = require('path');
const writeFile = require('util').promisify(fs.writeFile);
const getComputedConfig = require('./get-computed-config');
const wrapInPlugin = require('./wrap-in-plugin');

async function main() {
    const jestTask = renderConfig('jest', { extends: ['zillow/jest'] }, [
        // prettier-ignore
        '**/*{-,.}test.js',
        '**/*.stories.js',
        '**/__tests__/**/*.js',
        '**/__mocks__/**/*.js',
        '**/test/**/*.js',
    ]);

    const mochaTask = renderConfig(
        'mocha',
        {
            extends: ['zillow/mocha'],
            rules: {
                // mocha does fancy things with test case scope,
                // and this conflicts with mocha/no-mocha-arrow
                'prefer-arrow-callback': 'off',
                'func-names': 'off',
            },
        },
        [
            // prettier-ignore
            '**/*-test.js',
            '**/test/**/*.js',
        ]
    );

    const recommendedTask = renderConfig('recommended', {
        extends: ['zillow'],
        parser: 'babel-eslint',
    });

    const typescriptTask = renderConfig(
        'typescript',
        {
            extends: ['zillow-typescript'],
            parser: '@typescript-eslint/parser',
        },
        ['**/*.ts?(x)']
    );

    return Promise.all([jestTask, mochaTask, recommendedTask, typescriptTask]);
}

async function renderConfig(name, config, overrides) {
    const computedConfig = await getComputedConfig(config);
    const wrappedConfig = wrapInPlugin(computedConfig, overrides);
    const targetPath = path.join(__dirname, `configs/${name}.json`);

    if (process.env.NODE_ENV !== 'test') {
        // eslint-disable-next-line no-console
        console.log(`writing ${path.relative('.', targetPath)}`);
    }

    await writeFile(targetPath, JSON.stringify(wrappedConfig, null, 2));
}

if (require.main === module) {
    // node lib/render-configs.js
    main();
} else {
    module.exports = main;
}

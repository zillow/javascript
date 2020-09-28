#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const writeFile = require('util').promisify(fs.writeFile);
/* eslint-disable import/no-extraneous-dependencies */
const { ESLint } = require('eslint');
const ConfigValidator = require('@eslint/eslintrc/lib/shared/config-validator');
const BuiltInEnvironments = require('@eslint/eslintrc/conf/environments');
/* eslint-enable import/no-extraneous-dependencies */
const { getPluginEnvironments } = require('./plugins');

const PLUGIN_ENVIRONMENTS = new Map(Object.entries(getPluginEnvironments()));

async function main() {
    const jestTask = renderConfig(
        'jest',
        {
            extends: ['zillow/jest'],
            rules: {
                // plugin-specific rules that hamper effective testing
            },
        },
        [
            // prettier-ignore
            '**/*{-,.}test.js',
            '**/*.stories.js',
            '**/__tests__/**/*.js',
            '**/__mocks__/**/*.js',
            '**/test/**/*.js',
        ]
    );

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
        rules: {
            // TODO: re-enable when https://github.com/yannickcr/eslint-plugin-react/commit/2b0d70c is released
            'react/prop-types': ['off'],
        },
    });

    const typescriptTask = renderConfig(
        'typescript',
        {
            extends: ['zillow-typescript'],
            parser: '@typescript-eslint/parser',
        },
        ['**/*.ts?(x)']
    );

    /* istanbul ignore next (catch doesn't need coverage) */
    try {
        await Promise.all([jestTask, mochaTask, recommendedTask, typescriptTask]);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        process.exitCode = 1;
    }
}

/**
 * Render specified ESLint config to JSON file
 * @param {string} name
 * @param {{ extends: string[], rules?: { [k: string]: any }}} config
 * @param {string[]} [overrides] List of override file globs
 */
async function renderConfig(name, config, overrides) {
    const validator = new ConfigValidator();
    const computedConfig = await getComputedConfig(config);
    const wrappedConfig = wrapInPlugin(computedConfig, overrides);
    const targetPath = path.resolve(__dirname, `./configs/${name}.json`);

    validator.validate(
        wrappedConfig,
        config.extends[0],
        () => {},
        // (slightly less) horrible cheese to avoid exploding
        envName => PLUGIN_ENVIRONMENTS.get(envName.replace('zillow/', ''))
    );

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'test') {
        // eslint-disable-next-line no-console
        console.log(`writing ${path.relative('.', targetPath)}`);
    }

    await writeFile(targetPath, JSON.stringify(wrappedConfig, null, 2));
}

/**
 * Generate ESLint config object from specified baseConfig
 * @param {{ extends: string[], rules?: { [k: string]: any }}} baseConfig
 */
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

function wrapInPlugin(config, files) {
    // if files passed, this whole block will be moved to overrides[0]
    const pluginConfig = {
        files,
        // We expose a config already computed from the whole extends chain, so no extends here.
        ...config,
        extends: [],
        // Plugins appear to come from this plugin, so it's the only one externally visible.
        plugins: ['zillow'],
        // The rules from third-party plugins need to be prefixed so they reference our namespace.
        rules: prefixRuleConfigs('zillow', config.rules),
    };

    // if non-builtin envs are passed, make sure they're properly prefixed
    if (pluginConfig.env) {
        const ourEnv = {};

        // eslint-disable-next-line no-restricted-syntax
        for (const envName of Object.keys(pluginConfig.env)) {
            if (BuiltInEnvironments.has(envName)) {
                // pass through builtin environments
                ourEnv[envName] = pluginConfig.env[envName];
            } else {
                // needs prefix to find our wrapper
                ourEnv[`zillow/${envName}`] = pluginConfig.env[envName];
            }
        }

        pluginConfig.env = ourEnv;
    }

    if (files) {
        // https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns
        delete pluginConfig.extends;
        delete pluginConfig.ignorePatterns;
        delete pluginConfig.overrides;
        delete pluginConfig.root;

        if (pluginConfig.parserOptions && Object.keys(pluginConfig.parserOptions).length === 0) {
            delete pluginConfig.parserOptions;
        }

        return { overrides: [pluginConfig] };
    }

    // "files" only valid in overrides
    delete pluginConfig.files;

    return pluginConfig;
}

/**
 * Adds a prefix to rules that come from plugins.
 */
function prefixRuleConfigs(prefix, rules) {
    return Object.keys(rules).reduce((acc, name) => {
        // Plugin rules always have a slash in the name
        if (name.indexOf('/') !== -1) {
            acc[`${prefix}/${name}`] = rules[name];
        } else {
            acc[name] = rules[name];
        }

        return acc;
    }, {});
}

/* istanbul ignore if */
if (require.main === module) {
    // node lib/render-configs.js
    main();
} else {
    module.exports = main;
}

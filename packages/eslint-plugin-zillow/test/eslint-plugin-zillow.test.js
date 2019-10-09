'use strict';

// ensure up-to-date JSON
require('../lib/render-configs');

const { configs, processors, rules } = require('..');

describe('eslint-plugin-zillow', () => {
    test('configs', () => {
        expect(configs).toMatchObject({
            jest: {
                overrides: [
                    {
                        files: [
                            '**/*{-,.}test.js',
                            '**/*.stories.js',
                            '**/__tests__/**/*.js',
                            '**/__mocks__/**/*.js',
                            '**/test/**/*.js',
                        ],
                        globals: {
                            it: false,
                            jest: false,
                        },
                        plugins: ['zillow'],
                        rules: {
                            'zillow/jest/no-focused-tests': 'error',
                        },
                    },
                ],
            },
            mocha: {
                overrides: [
                    {
                        files: [
                            // prettier-ignore
                            '**/*-test.js',
                            '**/test/**/*.js',
                        ],
                        globals: {
                            it: false,
                            mocha: false,
                        },
                        plugins: ['zillow'],
                        rules: {
                            'zillow/mocha/no-exclusive-tests': 'error',
                            'prefer-arrow-callback': 'off',
                            'func-names': 'off',
                        },
                    },
                ],
            },
            recommended: {
                parser: expect.stringContaining('babel-eslint'),
                rules: {
                    'zillow/react/jsx-indent': ['off', 4],
                    'max-len': ['warn', 100, 4, { ignoreComments: false }],
                    'zillow/import/prefer-default-export': 'off',
                },
            },
        });

        const importResolverConfig = configs.recommended.settings['import/resolver'];
        const resolverConfigKeys = Object.keys(importResolverConfig);

        expect(resolverConfigKeys).toEqual([
            expect.stringMatching(/eslint-import-resolver-node/),
            'node',
        ]);
        expect(importResolverConfig[resolverConfigKeys[0]]).toStrictEqual({
            extensions: ['.js', '.jsx', '.json'],
        });
        expect(importResolverConfig[resolverConfigKeys[0]]).toStrictEqual(
            importResolverConfig.node
        );
    });

    test('processors', () => {
        expect(processors).toMatchObject({
            '.snap': {},
        });
    });

    test('rules', () => {
        expect(rules).toMatchObject({
            'import/prefer-default-export': {
                meta: {},
                create: expect.any(Function),
            },
            'react/sort-prop-types': {
                meta: {},
                create: expect.any(Function),
            },
        });
    });
});

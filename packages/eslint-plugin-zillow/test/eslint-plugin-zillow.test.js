'use strict';

/* eslint-disable global-require -- awaiting global beforeAll() */

// ensure up-to-date JSON
beforeAll(() => require('../lib/render-configs')());

describe('eslint-plugin-zillow', () => {
    test('configs', () => {
        const { configs } = require('..');

        expect(configs).toMatchObject({
            jest: {
                overrides: [
                    {
                        env: {
                            'jest/globals': true,
                        },
                        files: [
                            '**/*{-,.}test.js',
                            '**/*.stories.js',
                            '**/__tests__/**/*.js',
                            '**/__mocks__/**/*.js',
                            '**/test/**/*.js',
                        ],
                        plugins: ['zillow'],
                        rules: {
                            'zillow/jest/no-focused-tests': ['error'],
                        },
                    },
                ],
            },
            mocha: {
                overrides: [
                    {
                        env: {
                            mocha: true,
                        },
                        files: [
                            // prettier-ignore
                            '**/*-test.js',
                            '**/test/**/*.js',
                        ],
                        plugins: ['zillow'],
                        rules: {
                            'zillow/mocha/no-exclusive-tests': ['error'],
                            'prefer-arrow-callback': ['off'],
                            'func-names': ['off'],
                        },
                    },
                ],
            },
            recommended: {
                parser: require.resolve('babel-eslint'),
                rules: {
                    'zillow/react/jsx-indent': ['off', 4],
                    'max-len': ['warn', 100, 4, { ignoreComments: false }],
                    'zillow/import/prefer-default-export': ['off'],
                },
            },
            typescript: {
                overrides: [
                    {
                        files: ['**/*.ts?(x)'],
                        parser: require.resolve('@typescript-eslint/parser'),
                        plugins: ['zillow'],
                        rules: {
                            'zillow/@typescript-eslint/await-thenable': ['error'],
                        },
                    },
                ],
            },
        });

        const importResolverConfig = configs.recommended.settings['import/resolver'];
        const resolverConfigKeys = Object.keys(importResolverConfig);

        expect(resolverConfigKeys).toEqual([
            expect.stringMatching(/eslint-import-resolver-node/),
            'node',
        ]);
        expect(importResolverConfig[resolverConfigKeys[0]]).toStrictEqual({
            extensions: [
                // first three match react's override
                '.js',
                '.jsx',
                '.json',
                // the remainder from base imports spec
                '.ts',
                '.tsx',
                '.d.ts',
                '.cjs',
                '.mjs',
            ],
        });
        expect(importResolverConfig[resolverConfigKeys[0]]).toStrictEqual(
            importResolverConfig.node
        );
    });

    test('processors', () => {
        const { processors } = require('..');

        expect(processors).toMatchObject({
            '.snap': {},
        });
    });

    test('rules', () => {
        const { rules } = require('..');

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

describe('rendered config', () => {
    // module entry mutates required JSON :P
    beforeAll(() => {
        jest.resetModules();
    });

    describe('recommended.json', () => {
        let renderedConfigRecommended;

        beforeAll(() => {
            renderedConfigRecommended = require('../lib/configs/recommended.json');
        });

        it('has unresolved parser', () => {
            expect(renderedConfigRecommended).toHaveProperty('parser', 'babel-eslint');
        });
    });

    describe('typescript.json', () => {
        let renderedConfigTypescript;

        beforeAll(() => {
            renderedConfigTypescript = require('../lib/configs/typescript.json');
        });

        it('has unresolved parser', () => {
            expect(renderedConfigTypescript.overrides[0]).toHaveProperty(
                'parser',
                '@typescript-eslint/parser'
            );
        });
    });
});

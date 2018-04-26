'use strict';

// ensure up-to-date JSON
require('../lib/render-configs');

const { configs, processors, rules } = require('..');

describe('eslint-plugin-zillow', () => {
    test('configs', () => {
        expect(configs).toMatchObject({
            jest: {
                // TODO: re-enable
                // env: {},
                globals: {
                    it: false,
                },
                plugins: ['zillow'],
                rules: {
                    'zillow/jest/no-focused-tests': 'error',
                },
            },
            recommended: {
                rules: {
                    'zillow/react/jsx-indent': ['off', 4],
                    'max-len': ['warn', 100, 4, { ignoreComments: false }],
                    'zillow/import/prefer-default-export': 'error',
                    'zillow/jsx-a11y/label-has-for': ['error', { components: ['label'] }],
                },
            },
        });
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

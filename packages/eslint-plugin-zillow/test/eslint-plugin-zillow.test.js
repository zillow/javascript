'use strict';

require('../lib/render-configs'); // ensure up-to-date JSON
const { configs, rules } = require('..');

describe('eslint-plugin-zillow', () => {
    test('configs', () => {
        expect(configs).toMatchObject({
            recommended: {
                rules: {
                    'zillow/react/jsx-indent': ['off', 4],
                    'max-len': ['error', 100, 4, { ignoreComments: false }],
                    'zillow/import/prefer-default-export': 'error',
                    'zillow/jsx-a11y/label-has-for': ['error', { components: ['label'] }],
                },
            },
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

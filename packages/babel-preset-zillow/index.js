'use strict';

const { declare } = require('@babel/helper-plugin-utils');

const defaultTargets = {
    android: 62,
    and_uc: 11,
    and_chr: 64,
    chrome: 64,
    edge: 16,
    explorer: 11,
    firefox: 58,
    ios_saf: 10,
    safari: 10,
    samsung: 6,
};

function buildTargets({ additionalTargets }) {
    return Object.assign({}, defaultTargets, additionalTargets);
}

module.exports = declare((api, options) => {
    // see docs about api at https://babeljs.io/docs/en/config-files#apicache
    api.assertVersion('^7.0.0');

    const env = api.env();
    const {
        modules,
        targets = buildTargets(options),
        removeDataTestId = env !== 'test',
        removePropTypes = true,
        looseClasses = true,
        looseComputedProperties = true,
        looseParameters = true,
        looseTemplateLiterals = true,
    } = options;

    if (typeof modules !== 'undefined' && typeof modules !== 'boolean' && modules !== 'auto') {
        throw new TypeError(
            'babel-preset-zillow only accepts `true`, `false`, or `"auto"` as the value of the "modules" option'
        );
    }

    const debug = typeof options.debug === 'boolean' ? options.debug : false;
    const development =
        typeof options.development === 'boolean' ? options.development : env === 'development';
    const production = !development && env === 'production';

    /* eslint global-require: off */
    return {
        presets: [
            [
                require('@babel/preset-env'),
                {
                    debug,
                    exclude: [
                        '@babel/plugin-proposal-async-generator-functions',
                        '@babel/plugin-transform-async-to-generator',
                        '@babel/plugin-transform-regenerator',
                    ],
                    modules: modules === false ? false : 'auto',
                    targets,
                },
            ],
            [require('@babel/preset-react'), { development }],
        ],
        plugins: [
            [
                // this plugin _always_ needs to be loaded first
                require('babel-plugin-styled-components'),
                production
                    ? {
                          // help bundlers tree-shake
                          pure: true,
                          // remove dev-mode noise
                          displayName: false,
                      }
                    : {
                          // use defaults
                      },
            ],

            require('@babel/plugin-syntax-dynamic-import'),
            // TODO: Remove this when Jest supports dynamic import() "natively"
            env === 'test' && require('babel-plugin-dynamic-import-node'),

            // need to hoist this above class transformer, otherwise it explodes
            [require('@babel/plugin-proposal-class-properties'), { loose: true }],

            // prettier-ignore
            looseClasses
                ? [require('@babel/plugin-transform-classes'), { loose: true }]
                : null,
            looseComputedProperties
                ? [require('@babel/plugin-transform-computed-properties'), { loose: true }]
                : null,
            looseParameters
                ? [require('@babel/plugin-transform-parameters'), { loose: true }]
                : null,
            looseTemplateLiterals
                ? [require('@babel/plugin-transform-template-literals'), { loose: true }]
                : null,

            removeDataTestId
                ? [
                      require('babel-plugin-jsx-remove-data-test-id'),
                      Object.assign(
                          {
                              attributes: ['data-testid', 'data-test-id'],
                          },
                          removePropTypes
                      ),
                  ]
                : null,
            removePropTypes
                ? [
                      require('babel-plugin-transform-react-remove-prop-types'),
                      Object.assign(
                          {
                              mode: 'wrap',
                              additionalLibraries: ['airbnb-prop-types'],
                              ignoreFilenames: ['node_modules'],
                          },
                          removePropTypes
                      ),
                  ]
                : null,

            [require('@babel/plugin-proposal-object-rest-spread'), { useBuiltIns: true }],
            [require('fast-async'), { spec: true }],
            require('babel-plugin-lodash'),
        ].filter(Boolean),
    };
});

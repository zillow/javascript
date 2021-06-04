'use strict';

const { declare } = require('@babel/helper-plugin-utils');

const defaultExcludes = [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-regenerator',
];

function buildExcludes({ additionalExcludes = [] }) {
    return [...defaultExcludes, ...additionalExcludes];
}

const defaultTargets = {
    android: 62,
    chrome: 64,
    edge: 16,
    ie: 11,
    firefox: 58,
    ios: 10,
    safari: 10,
};

function buildTargets({ additionalTargets }) {
    return Object.assign({}, defaultTargets, additionalTargets);
}

module.exports = declare((api, options) => {
    // see docs about api at https://babeljs.io/docs/en/config-files#apicache
    api.assertVersion('^7.0.0');

    const env = api.env();
    const {
        corejs,
        modules,
        targets = buildTargets(options),
        useBuiltIns,
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

    // we assume that those opting into node env know what they're doing,
    // and don't need a significant number of plugins or exclusions
    const isNode = 'node' in targets;

    // use a Set to streamline plugin conditionals
    const excluding = new Set(isNode ? [] : buildExcludes(options));

    /* eslint global-require: off */
    return {
        presets: [
            [
                require('@babel/preset-env'),
                {
                    corejs,
                    debug,
                    exclude: Array.from(excluding),
                    modules: modules === false ? false : 'auto',
                    targets,
                    useBuiltIns,
                    ...options['preset-env'],
                },
            ],
            [
                require('@babel/preset-react'),
                {
                    development,
                    ...options['preset-react'],
                },
            ],
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
                          ...options['styled-components'],
                      }
                    : {
                          // use defaults
                          ...options['styled-components'],
                      },
            ],

            require('@babel/plugin-syntax-dynamic-import'),
            // TODO: Remove env test when Jest supports dynamic import() "natively"
            isNode || env === 'test' ? require('babel-plugin-dynamic-import-node') : null,

            // need to hoist this above (possible) class transformer, otherwise it explodes
            [require('@babel/plugin-proposal-class-properties'), { loose: true }],
            // class-properties and private-methods must have the same "loose" value
            [require('@babel/plugin-proposal-private-methods'), { loose: true }],

            // prettier-ignore
            !isNode &&
            looseClasses &&
            !excluding.has('@babel/plugin-transform-classes')
                ? [require('@babel/plugin-transform-classes'), { loose: true }]
                : null,

            !isNode &&
            looseComputedProperties &&
            !excluding.has('@babel/plugin-transform-computed-properties')
                ? [require('@babel/plugin-transform-computed-properties'), { loose: true }]
                : null,

            // prettier-ignore
            !isNode &&
            looseParameters &&
            !excluding.has('@babel/plugin-transform-parameters')
                ? [require('@babel/plugin-transform-parameters'), { loose: true }]
                : null,

            !isNode &&
            looseTemplateLiterals &&
            !excluding.has('@babel/plugin-transform-template-literals')
                ? [require('@babel/plugin-transform-template-literals'), { loose: true }]
                : null,

            removeDataTestId
                ? [
                      require('babel-plugin-jsx-remove-data-test-id'),
                      Object.assign(
                          {
                              attributes: ['data-testid', 'data-test-id'],
                          },
                          removeDataTestId
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

            isNode
                ? null
                : [
                      require('@babel/plugin-proposal-object-rest-spread'),
                      {
                          loose: true,
                          useBuiltIns: true,
                          ...options['object-rest-spread'],
                      },
                  ],

            isNode ? null : [require('fast-async'), { spec: true }],
            // avoid corrupting istanbul coverage during tests
            // https://github.com/istanbuljs/babel-plugin-istanbul/issues/116
            env !== 'test' ? require('babel-plugin-lodash') : null,
        ].filter(Boolean),
    };
});

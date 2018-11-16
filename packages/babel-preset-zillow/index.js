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
    api.assertVersion(7);

    const { modules, targets = buildTargets(options), removePropTypes = true } = options;

    if (typeof modules !== 'undefined' && typeof modules !== 'boolean' && modules !== 'auto') {
        throw new TypeError(
            'babel-preset-zillow only accepts `true`, `false`, or `"auto"` as the value of the "modules" option'
        );
    }

    const debug = typeof options.debug === 'boolean' ? options.debug : false;
    const development =
        typeof options.development === 'boolean'
            ? options.development
            : api.cache.using(() => process.env.NODE_ENV === 'development');

    /* eslint global-require: off */
    return {
        presets: [
            [
                require('@babel/preset-env'),
                {
                    debug,
                    exclude: [
                        'transform-async-to-generator',
                        'transform-template-literals',
                        'transform-regenerator',
                    ],
                    modules: modules === false ? false : 'auto',
                    targets,
                },
            ],
            [require('@babel/preset-react'), { development }],
        ],
        plugins: [
            require('@babel/plugin-syntax-dynamic-import'),
            // TODO: Remove this when Jest supports dynamic import() "natively"
            api.env('test') && require('babel-plugin-dynamic-import-node'),
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

            [require('@babel/plugin-transform-template-literals'), { loose: true }],
            require('@babel/plugin-transform-property-mutators'),
            require('@babel/plugin-transform-member-expression-literals'),
            require('@babel/plugin-transform-property-literals'),
            [require('@babel/plugin-proposal-object-rest-spread'), { useBuiltIns: true }],
            [require('@babel/plugin-proposal-class-properties'), { loose: true }],
            [require('fast-async'), { spec: true }],
            require('babel-plugin-lodash'),
        ].filter(Boolean),
    };
});

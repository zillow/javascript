'use strict';

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

function buildTargets(options) {
    return Object.assign({}, defaultTargets, options.additionalTargets);
}

module.exports = function babelPresetZillow(context, options) {
    const envIsDev =
        (process.env.BABEL_ENV || process.env.NODE_ENV || 'development') === 'development';
    const targets = (options && options.targets) || buildTargets(options);
    const debug = options && typeof options.debug === 'boolean' ? !!options.debug : false;

    /* eslint global-require: off */
    const presets = [
        [
            require('babel-preset-env'),
            {
                debug,
                exclude: [
                    'transform-async-to-generator',
                    'transform-es2015-block-scoping',
                    'transform-es2015-template-literals',
                    'transform-regenerator',
                ],
                modules: false,
                targets,
            },
        ],
        require('babel-preset-react'),
    ];

    const plugins = [
        options && options.modules === false
            ? null
            : [require('babel-plugin-transform-es2015-modules-commonjs'), { strict: false }],
        require('babel-plugin-transform-class-properties'),
        [require('fast-async'), { spec: true }],
        [require('babel-plugin-transform-es2015-block-scoping'), { throwIfClosureRequired: true }],
        [require('babel-plugin-transform-es2015-template-literals'), { spec: true }],
        [require('babel-plugin-transform-object-rest-spread'), { useBuiltIns: true }],
        require('babel-plugin-lodash'),
        envIsDev && require('babel-plugin-transform-react-jsx-source'),
        envIsDev && require('babel-plugin-transform-react-jsx-self'),
    ].filter(Boolean);

    return {
        presets,
        plugins,
    };
};

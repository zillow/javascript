'use strict';

/* eslint indent: [error, 2], global-require: off */

const modules = [require('babel-plugin-transform-es2015-modules-commonjs'), {
  strict: false,
}];

const defaultTargets = {
  android: 62,
  chrome: 62,
  edge: 15,
  explorer: 11,
  firefox: 57,
  safari: 9,
};

function buildTargets(options) {
  return Object.assign({}, defaultTargets, options.additionalTargets);
}

module.exports = function babelPresetZillow(context, options) {
  const transpileTargets = (options && options.targets) || buildTargets(options);
  const enableDebug = (options && typeof options.debug === 'boolean') ? !!options.debug : false;

  return {
    presets: [
      [require('babel-preset-env'), {
        debug: enableDebug,
        exclude: [
          'transform-async-to-generator',
          'transform-es2015-template-literals',
          'transform-regenerator',
        ],
        modules: false,
        targets: transpileTargets,
      }],
      require('babel-preset-react'),
    ],
    plugins: [
      options && options.modules === false ? null : modules,
      require('babel-plugin-transform-class-properties'),
      [require('fast-async'), {
        spec: true,
      }],
      [require('babel-plugin-transform-es2015-template-literals'), {
        spec: true,
      }],
      [require('babel-plugin-transform-object-rest-spread'), {
        useBuiltIns: true,
      }],
      require('babel-plugin-lodash'),
    ].filter(Boolean),
  };
};

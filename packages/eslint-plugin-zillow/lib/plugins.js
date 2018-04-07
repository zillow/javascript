'use strict';

exports.getPluginProcessors = getPluginProcessors;
exports.getPluginRules = getPluginRules;

const plugins = new Map();

plugins.set('import', require('eslint-plugin-import'));
plugins.set('jest', require('eslint-plugin-jest'));
plugins.set('jsx-a11y', require('eslint-plugin-jsx-a11y'));
plugins.set('mocha', require('eslint-plugin-mocha'));
plugins.set('react', require('eslint-plugin-react'));
plugins.set('prettier', require('eslint-plugin-prettier'));

/**
 * Create a processors object from plugin processors.
 */
function getPluginProcessors() {
    const result = {};

    plugins.forEach(({ processors = {} }) => {
        Object.assign(result, processors);
    });

    return result;
}

/**
 * Create a rules object from plugin rules.
 * Each rule is prefixed by the name of the plugin it comes from.
 */
function getPluginRules() {
    const result = {};

    plugins.forEach(({ rules }, namespace) => {
        Object.keys(rules).forEach(rule => {
            result[`${namespace}/${rule}`] = rules[rule];
        });
    });

    return result;
}

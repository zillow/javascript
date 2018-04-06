'use strict';

const importPlugin = require('eslint-plugin-import');
const jsxA11YPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = getPluginRules;

const plugins = {
    import: importPlugin,
    'jsx-a11y': jsxA11YPlugin,
    react: reactPlugin,
    prettier: prettierPlugin,
};

/**
 * Create a rules object from plugin rules.
 * Each rule is prefixed by the name of the plugin it comes from.
 */
function getPluginRules() {
    return Object.keys(plugins).reduce((acc, plugin) => {
        const { rules } = plugins[plugin];

        Object.keys(rules).forEach(rule => {
            acc[`${plugin}/${rule}`] = rules[rule];
        });

        return acc;
    }, {});
}

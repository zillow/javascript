'use strict';

const prefixRuleConfigs = require('./prefix-rule-configs');

module.exports = wrapInPlugin;

function wrapInPlugin(config) {
    return Object.assign({}, config, {
        // parser: 'babel-eslint',
        // We expose a config already computed from the whole extends chain, so no extends here.
        extends: [],
        // Plugins appear to come from this plugin, so it's the only one externally visible.
        plugins: ['zillow'],
        // The rules from third-party plugins need to be prefixed so they reference our namespace.
        rules: prefixRuleConfigs('zillow', config.rules),
    });
}

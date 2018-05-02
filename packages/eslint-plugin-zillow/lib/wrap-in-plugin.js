'use strict';

const prefixRuleConfigs = require('./prefix-rule-configs');

module.exports = wrapInPlugin;

function wrapInPlugin(config, files) {
    // if files passed, this whole block will be moved to overrides[0]
    const pluginConfig = Object.assign({}, { files }, config, {
        // We expose a config already computed from the whole extends chain, so no extends here.
        extends: [],
        // Plugins appear to come from this plugin, so it's the only one externally visible.
        plugins: ['zillow'],
        // The rules from third-party plugins need to be prefixed so they reference our namespace.
        rules: prefixRuleConfigs('zillow', config.rules),
    });

    if (files) {
        // https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns
        delete pluginConfig.extends;
        delete pluginConfig.overrides;
        delete pluginConfig.root;

        if (pluginConfig.parserOptions && Object.keys(pluginConfig.parserOptions).length === 0) {
            delete pluginConfig.parserOptions;
        }

        return { overrides: [pluginConfig] };
    }

    return pluginConfig;
}

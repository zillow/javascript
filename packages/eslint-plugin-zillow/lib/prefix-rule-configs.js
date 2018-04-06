'use strict';

module.exports = prefixRuleConfigs;

/**
 * Adds a prefix to rules that come from plugins.
 */
function prefixRuleConfigs(prefix, rules) {
    return Object.keys(rules).reduce((acc, name) => {
        // Plugin rules always have a slash in the name
        if (name.indexOf('/') !== -1) {
            acc[`${prefix}/${name}`] = rules[name];
        } else {
            acc[name] = rules[name];
        }

        return acc;
    }, {});
}

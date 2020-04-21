'use strict';

module.exports = {
    $schema: 'http://json.schemastore.org/prettierrc',

    // defaults
    // TODO: (major) match v2 "arrowParens" default "always"
    arrowParens: 'avoid',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    htmlWhitespaceSensitivity: 'css',
    requirePragma: false,
    insertPragma: false,
    proseWrap: 'preserve',
    semi: true,
    useTabs: false,

    // customized
    endOfLine: 'lf',
    printWidth: 100,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    quoteProps: 'consistent',

    overrides: [
        // explicitly keep output consistent with npm
        {
            files: [
                '.eslintrc.json',
                'lerna.json',
                'package.json',
                'package-lock.json',
                'npm-shrinkwrap.json',
            ],
            options: {
                parser: 'json-stringify',
                tabWidth: 2,
                trailingComma: 'none',
            },
        },
        {
            files: ['*.yaml', '*.yml'],
            options: {
                tabWidth: 2,
            },
        },
        {
            /**
             * Prettier v2 changed the default of arrowParens to "always".
             * This is very nice for TypeScript,but would cause dramatic diffs
             * with JS(X), so we're gonna avoid that for now.
             */
            files: ['*.ts', '*.tsx'],
            options: {
                arrowParens: 'always',
            },
        },
    ],
};

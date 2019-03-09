module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    // TODO: enable? semver-major
    // object option alternative: { multiline: true, minItems: 3 }
    'array-bracket-newline': ['off', 'consistent'],

    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    // TODO: enable? semver-major
    'array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // enforce spacing inside array brackets
    'array-bracket-spacing': ['off'/* prettier */, 'never'],

    // enforce spacing inside single-line blocks
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['off'/* prettier */, 'always'],

    // enforce one true brace style
    'brace-style': ['off'/* prettier */, '1tbs', { allowSingleLine: true }],

    // require camel case names
    // https://eslint.org/docs/rules/camelcase
    camelcase: ['error', {
      properties: 'never',
      ignoreDestructuring: true,
      allow: [
        // Deprecated React lifecycles
        '^UNSAFE_',
      ],
    }],

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    // require trailing commas in multiline object literals
    'comma-dangle': ['off'/* prettier */, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // enforce spacing before and after comma
    'comma-spacing': ['off'/* prettier */, { before: false, after: true }],

    // enforce one true comma style
    'comma-style': ['off'/* prettier */, 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    }],

    // disallow padding inside computed properties
    'computed-property-spacing': ['off'/* prettier */, 'never'],

    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['off'/* prettier */, 'always'],

    // enforce spacing between functions and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['off'/* prettier */, 'never'],

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['error', 'always', {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: false
    }],

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    // TODO: enable
    'func-style': ['off', 'expression'],

    // enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['off'/* prettier */, 'multiline'],

    // Blacklist certain identifiers to prevent them being used
    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    'id-match': 'off',

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['off'/* prettier */, 'beside'],

    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    indent: ['off'/* prettier */, 4, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false
    }],

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['off'/* prettier */, 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['off'/* prettier */, { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    'keyword-spacing': ['off'/* prettier */, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': ['warn', {
      position: 'above',
      ignorePattern: '',
      applyDefaultIgnorePatterns: true,
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['off'/* prettier */, 'unix'],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // enforces empty lines around comments
    // https://github.com/prettier/eslint-config-prettier#lines-around-comment
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],

    // specify the maximum depth that blocks can be nested
    'max-depth': ['off', 4],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    // https://github.com/prettier/eslint-config-prettier#max-len
    'max-len': ['warn', 100, 4, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': ['off', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',

    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],

    // specify the maximum number of statement allowed in a function
    'max-statements': ['off', 10],

    // restrict the number of statements per line
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['off', { max: 1 }],

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['off', 'starred-block'],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    'multiline-ternary': ['off', 'never'],

    // require a capital letter for constructors
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'off'/* prettier */,

    // allow/disallow an empty newline after var statement
    'newline-after-var': 'off',

    // https://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'off',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['off'/* prettier */, { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // disallow comments inline after code
    'no-inline-comments': 'off',

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // disallow un-paren'd mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    // https://github.com/prettier/eslint-config-prettier#no-mixed-operators
    'no-mixed-operators': ['warn'/* prettier */, {
      // the list of arthmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'off'/* prettier */,

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error'],

    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['off'/* prettier */, { max: 2, maxEOF: 1 }],

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow use of the Object constructor
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // disallow space between function identifier and application
    'no-spaced-func': 'off'/* prettier */,

    // disallow tab characters entirely
    // https://github.com/prettier/eslint-config-prettier#no-tabs
    'no-tabs': 'warn'/* prettier */,

    // disallow the use of ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': ['off'/* prettier */, {
      skipBlankLines: false,
      ignoreComments: false,
    }],

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: false,
    }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'off'/* prettier */,

    // enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['off'/* prettier */, 'beside', { overrides: {} }],

    // require padding inside curly braces
    'object-curly-spacing': ['off'/* prettier */, 'always'],

    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['off'/* prettier */, {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['off'/* prettier */, {
      allowAllPropertiesOnSameLine: true,
    }],

    // allow just one var statement per function
    'one-var': ['error', 'never'],

    // require a newline around variable declaration
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['off'/* prettier */, 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['off'/* prettier */, 'before', { overrides: { '=': 'none' } }],

    // disallow padding within blocks
    'padded-blocks': ['off'/* prettier */, {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
      // allowSingleLineBlocks: true,
    }],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    // TODO: semver-major (eslint 5): enable
    'prefer-object-spread': 'off',

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': ['off'/* prettier */, 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    // https://github.com/prettier/eslint-config-prettier#quotes
    quotes: ['off'/* prettier */, 'single', { avoidEscape: true }],

    // do not require jsdoc
    // https://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // require or disallow use of semicolons instead of ASI
    semi: ['off'/* prettier */, 'always'],

    // enforce spacing before and after semicolons
    'semi-spacing': ['off'/* prettier */, { before: false, after: true }],

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['off'/* prettier */, 'last'],

    // requires object keys to be sorted
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    'sort-vars': 'off',

    // require or disallow space before blocks
    'space-before-blocks': 'off'/* prettier */,

    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['off'/* prettier */, {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    // require or disallow spaces inside parentheses
    'space-in-parens': ['off'/* prettier */, 'never'],

    // require spaces around operators
    'space-infix-ops': 'off'/* prettier */,

    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['off'/* prettier */, {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        // space here to support sprockets directives
        markers: ['=', '!'],
      },
      block: {
        exceptions: ['-', '+'],
        // space here to support sprockets directives
        markers: ['=', '!'],
        balanced: true,
      }
    }],

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': ['off'/* prettier */, { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['off'/* prettier */, 'never'],

    // require or disallow the Unicode Byte Order Mark
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['off'/* prettier */, 'never'],

    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off'
  }
};

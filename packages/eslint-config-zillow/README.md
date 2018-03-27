# eslint-config-zillow

[![npm version](https://badge.fury.io/js/eslint-config-zillow.svg)](http://badge.fury.io/js/eslint-config-zillow)

This package provides Zillow's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-zillow

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`. If you don't need React, see [eslint-config-zillow-base](https://npmjs.com/eslint-config-zillow-base).

If you use yarn, run `npm info "eslint-config-zillow@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency. See below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-zillow@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-zillow
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-zillow;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-zillow eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-zillow
  ```
  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-zillow eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "zillow"` to your .eslintrc

### eslint-config-zillow/whitespace

This entry point that only warns on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/zillow/javascript/blob/master/packages/eslint-config-zillow/whitespace.js).

### eslint-config-zillow/base

This entry point is deprecated. See [eslint-config-zillow-base](https://npmjs.com/eslint-config-zillow-base).

### eslint-config-zillow/legacy

This entry point is deprecated. See [eslint-config-zillow-base](https://npmjs.com/eslint-config-zillow-base).

See [Zillow's Javascript styleguide](https://github.com/zillow/javascript) and
the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

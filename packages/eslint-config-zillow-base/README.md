# eslint-config-zillow-base

> Zillow's base ESLint config (without React plugins), following our code conventions

[![npm version](https://img.shields.io/npm/v/eslint-config-zillow-base.svg)](https://www.npmjs.com/package/eslint-config-zillow-base)
[![Build Status](https://travis-ci.org/zillow/javascript.svg?branch=latest)](https://travis-ci.org/zillow/javascript)

## Usage

To install with all necessary `peerDependencies`, use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps#usage):

```sh
npx install-peerdeps --dev eslint-config-zillow-base
```

All exported configs should be added to your [ESlint configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) `extends`.
For example, in a JSON `.eslintrc`:

```json
{
  "extends": "zillow-base"
}
```

### `"extends": "zillow-base"`

Our default export contains all of our ESLint rules, including ECMAScript 6+ and Prettier.

### `prettier` Editor Plugin Integration

Unfortunately, super-useful editor plugins like `prettier-atom` and `prettier-vscode` do not load Prettier settings from ESLint config, which is where we load our Prettier options from. To workaround this, add a `.prettierrc.js` or `prettier.config.js` file to your repo root with the following content:

```js
module.exports = require('eslint-config-zillow-base/prettier.config');
```

## Related

- [Zillow's overarching ESLint config](https://npmjs.com/eslint-config-zillow)
- [Zillow's Javascript code conventions](https://github.com/zillow/javascript)

## Development

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests (from the repo root) with `npm test`.

You can make sure this module lints with itself using `npm run lint` (from the repo root).

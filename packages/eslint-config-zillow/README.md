# eslint-config-zillow

> Zillow's ESLint config, following our code conventions

[![npm version](https://img.shields.io/npm/v/eslint-config-zillow.svg)](https://www.npmjs.com/package/eslint-config-zillow)
[![Build Status](https://travis-ci.org/zillow/javascript.svg?branch=latest)](https://travis-ci.org/zillow/javascript)

## Usage

To install with all necessary `peerDependencies`, use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps#usage):

```sh
npx install-peerdeps --dev eslint-config-zillow
```

All exported configs should be added to your [ESlint configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) `extends`.
For example, in a JSON `.eslintrc`:

```json
{
  "extends": "zillow"
}
```

### `"extends": "zillow"`

Lint all the things, including ECMAScript 6+, React, and Prettier.

If you don't need React, use [eslint-config-zillow-base](https://npmjs.com/eslint-config-zillow-base).

### `"extends": ["zillow", "zillow/jest]`

Jest-specific rules and environment added to the default export.

### `"extends": ["zillow", "zillow/mocha]`

Mocha-specific rules and environment added to the default export.

### `"extends": ["zillow", "zillow/typescript]`

TypeScript-specific rules and environment added to the default export.

This config expects your `tsconfig.json` to be in the current working directory (relative to your eslint config), which is extremely common. If it is elsewhere (say, a monorepo leaf), you will need to override varios [`parserOptions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md):

```js
// .eslintrc.js
module.exports = {
  extends: ['zillow', 'zillow/typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  },
};
```

### `prettier` Editor Plugin Integration

Unfortunately, super-useful editor plugins like `prettier-atom` and `prettier-vscode` do not load Prettier settings from ESLint config, which is where we load our Prettier options from. To workaround this, add a `.prettierrc.js` or `prettier.config.js` file to your root with the following content:

```js
module.exports = require('prettier-config-zillow');
```

## Related

  - [Zillow's Prettier config](https://npmjs.com/prettier-config-zillow)
  - [Zillow's Javascript code conventions](https://github.com/zillow/javascript)

## Development

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests (from the repo root) with `npm test`.

You can make sure this module lints with itself using `npm run lint` (from the repo root).

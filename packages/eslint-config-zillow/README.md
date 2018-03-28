# eslint-config-zillow

[![npm version](https://img.shields.io/npm/v/eslint-config-zillow.svg)](https://www.npmjs.com/package/eslint-config-zillow)
[![Build Status](https://travis-ci.org/zillow/javascript.svg?branch=latest)](https://travis-ci.org/zillow/javascript)

This package provides Zillow's .eslintrc as an extensible shared config.

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

Lint all the things, including ECMAScript 6+ and React.

If you don't need React, use [eslint-config-zillow-base](https://npmjs.com/eslint-config-zillow-base).

## Related

- [Zillow's Javascript styleguide](https://github.com/zillow/javascript)

## Development

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests (from the repo root) with `npm test`.

You can make sure this module lints with itself using `npm run lint` (from the repo root).
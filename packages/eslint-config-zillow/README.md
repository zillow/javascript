# eslint-config-zillow

[![npm version](https://badge.fury.io/js/eslint-config-zillow.svg)](http://badge.fury.io/js/eslint-config-zillow)

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

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React.

If you don't need React, use [eslint-config-zillow-base](https://npmjs.com/eslint-config-zillow-base).

### `"extends": "zillow/whitespace"`

Only error on whitespace rules and warn on all other rules.
View the list of whitespace rules [here](https://github.com/zillow/javascript/blob/master/packages/eslint-config-zillow/whitespace.js).

## Related

- [Zillow's Javascript styleguide](https://github.com/zillow/javascript)

## Development

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests (from the repo root) with `npm test`.

You can make sure this module lints with itself using `npm run lint` (from the repo root).

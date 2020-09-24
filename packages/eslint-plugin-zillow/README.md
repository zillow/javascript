# eslint-plugin-zillow

> Zillow's ESLint config bundled into a "zero-conf" plugin

[![npm version](https://img.shields.io/npm/v/eslint-plugin-zillow.svg)](https://www.npmjs.com/package/eslint-plugin-zillow)
[![Build Status](https://travis-ci.org/zillow/javascript.svg?branch=latest)](https://travis-ci.org/zillow/javascript)

## Why

We want shareable configs to have as low of an overhead as possible. Users shouldn't have to know exactly what plugins are required by the config, install them and manage their versions manually. This plugin exposes [`eslint-config-zillow`](https://github.com/zillow/javascript/tree/latest/packages/eslint-config-zillow#readme) for reuse, with plugins automatically installed.

> See [https://github.com/eslint/eslint/issues/3458](https://github.com/eslint/eslint/issues/3458) for further discussion on this topic. Approach inspired by [`eslint-plugin-react-app`](https://github.com/mmazzarolo/eslint-plugin-react-app) and [`eslint-plugin-springload`](https://github.com/springload/eslint-plugin-springload).

## Usage

Install the plugin and its minimal peer dependencies:

```sh
npm i -D eslint prettier eslint-plugin-zillow
```

Configure ESLint to use this config. For example, in your package.json, this would be:

```json
  "eslintConfig": {
    "extends": "plugin:zillow/recommended"
  },
```

### Jest

Jest-specific rules and environment added to the default export.

```json
  "eslintConfig": {
    "extends": ["plugin:zillow/recommended", "plugin:zillow/jest"]
  },
```

### Mocha

Mocha-specific rules and environment added to the default export.

```json
  "eslintConfig": {
    "extends": ["plugin:zillow/recommended", "plugin:zillow/mocha"]
  },
```

### TypeScript

Enable TypeScript-specific linting rules.

```json
  "eslintConfig": {
    "extends": ["plugin:zillow/recommended", "plugin:zillow/typescript"]
  },
```

This config expects your `tsconfig.json` to be in the current working directory (relative to your eslint config), which is extremely common. If it is elsewhere (say, a monorepo leaf), you will need to override various [`parserOptions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md):

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:zillow/recommended', 'plugin:zillow/typescript'],
  overrides: [
    {
      test: '**/*.ts?(x)',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
      },
    },
  ],
};
```

### Customizing Rules

You can configure the rules like every other `eslint` plugin.
Just keep in mind that if you want to change a rule of an included plugin (for example, `eslint-plugin-react`) you must prefix the rule with `zillow/` (necessary to prevent namespace collisions).

For example:

```json
{
  "extends": [
    "plugin:zillow/recommended"
  ],
  "rules": {
    "zillow/react/react-in-jsx-scope": ["warn"]
  }
}
```

### `prettier` Editor Plugin Integration

Unfortunately, super-useful editor plugins like `prettier-atom` and `prettier-vscode` do not load Prettier settings from ESLint config, which is where we load our Prettier options from. To workaround this, add a `.prettierrc.js` or `prettier.config.js` file to your root with the following content:

```js
module.exports = require('prettier-config-zillow');
```

## "Bundled" Plugins

We currently encapsulate the following plugins:

  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest#readme)
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [eslint-plugin-mocha](https://github.com/lo1tuma/eslint-plugin-mocha)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-react-hooks](https://reactjs.org/docs/hooks-rules.html)
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#readme)

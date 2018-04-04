# `babel-preset-zillow`

> A Babel preset for transpiling JavaScript following our styleguide

Currently contains transforms for all standard syntax that is [stage 4](https://tc39.github.io/ecma262/) (ES2017) or [stage 3](https://github.com/tc39/proposals#active-proposals), except for the following:
  - generators: `regenerator-runtime` is too heavyweight for our use.
  - `SIMD`: this is a performance feature, so is pretty pointless to polyfill/transpile.
  - lifted template literal restrictions: we do not use tagged template literals, nor implement custom DSLs, otherwise we would enable this.

Additionally, we also transpile the following:
  - [async/await](https://www.npmjs.com/package/fast-async)
  - [class properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties)
  - [lodash](https://www.npmjs.com/package/babel-plugin-lodash)

## Install

```sh
npm install --save-dev babel-preset-zillow
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["zillow"]
}
```

### Via CLI

```sh
babel script.js --presets zillow
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["zillow"]
});
```

### Targeting Environments

This module uses `babel-preset-env` to target specific environments.

Please refer to [babel-preset-env#targets](https://github.com/babel/babel-preset-env#targets) for a list of available options.

For a list of browsers please see [browserlist](https://github.com/ai/browserslist).

You may override our default list of targets by providing your own `targets` key.

```json
{
  "presets": [["zillow", {
    "targets": {
      "chrome": 50,
      "explorer": 11,
      "firefox": 45
    }
  }]]
}
```

The following transpiles only for Node v8.

```json
{
  "presets": [["zillow", {
    "targets": {
      "node": 8
    }
  }]]
}
```

If you wish, you can also inherit our default list of browsers and extend them using `additionalTargets`.

```json
{
  "presets": [["zillow", {
    "additionalTargets": {
      "chrome": 42,
      "explorer": 8
    }
  }]]
}
```

### Debugging

You may override our default debug option by providing your own `debug` key.

```json
{
  "presets": [["zillow", {
    "debug": true
  }]]
}
```
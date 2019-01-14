# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.3](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@2.1.2...eslint-config-zillow-base@2.1.3) (2019-01-14)


### Bug Fixes

* **prettier:** Add lerna.json and .eslintrc.json to json-stringify overrides ([ec46f69](https://github.com/zillow/javascript/commit/ec46f69))
* **prettier:** YAML always uses 2-space indent ([967a1f5](https://github.com/zillow/javascript/commit/967a1f5))





## [2.1.2](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@2.1.1...eslint-config-zillow-base@2.1.2) (2019-01-14)


### Bug Fixes

* **base:** Add disabled no-useless-catch config ([26b1398](https://github.com/zillow/javascript/commit/26b1398))
* **prettier:** Explicitly preserve npm default formatting for manifests and lockfiles ([50c54dc](https://github.com/zillow/javascript/commit/50c54dc))





## [2.1.1](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@2.1.0...eslint-config-zillow-base@2.1.1) (2018-11-08)


### Bug Fixes

* **jest:** Disable `prefer-spy-on`, it is buggy ([c3b5c53](https://github.com/zillow/javascript/commit/c3b5c53))





# [2.1.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@2.0.0...eslint-config-zillow-base@2.1.0) (2018-11-08)


### Features

* **base:** Expand eslint-plugin-jest peer range ([8e1f24c](https://github.com/zillow/javascript/commit/8e1f24c))
* **jest:** Update rules, error all fixable rules ([7bb2d8a](https://github.com/zillow/javascript/commit/7bb2d8a))





# [2.0.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@1.0.0...eslint-config-zillow-base@2.0.0) (2018-11-06)


### Features

* Loosen prettier peer to >= 1.13.0 ([24c5fcb](https://github.com/zillow/javascript/commit/24c5fcb))
* Raise floor of eslint peer to >= 5.0.0 ([5b8abfc](https://github.com/zillow/javascript/commit/5b8abfc))
* Upgrade eslint-plugin-prettier to ^3.0.0 ([d636689](https://github.com/zillow/javascript/commit/d636689))


### BREAKING CHANGES

* eslint v4 is no longer supported





<a name="1.0.0"></a>
# [1.0.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@1.0.0-rc.0...eslint-config-zillow-base@1.0.0) (2018-08-15)


### Bug Fixes

* **base:** Add import/no-relative-parent-imports rule ([c94f162](https://github.com/zillow/javascript/commit/c94f162))
* **base:** Update ecmaVersion to 2018, remove deprecated experimentalObjectRestSpread ecmaFeature ([0a34930](https://github.com/zillow/javascript/commit/0a34930))
* **pkg:** Correct homepage URL ([1b5e7f0](https://github.com/zillow/javascript/commit/1b5e7f0))


### Features

* Add eslint v5 support ([a52862a](https://github.com/zillow/javascript/commit/a52862a))
* Raise floor of peer dependency ranges ([3d6bbfd](https://github.com/zillow/javascript/commit/3d6bbfd))





<a name="1.0.0-rc.0"></a>
# [1.0.0-rc.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@1.0.0-beta.0...eslint-config-zillow-base@1.0.0-rc.0) (2018-06-05)


### Features

* Sync upstream eslint plugins ([5e42578](https://github.com/zillow/javascript/commit/5e42578))
* **prettier:** Remove explicit parser from config ([ce6a740](https://github.com/zillow/javascript/commit/ce6a740))





<a name="1.0.0-beta.0"></a>
# [1.0.0-beta.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@1.0.0-alpha.5...eslint-config-zillow-base@1.0.0-beta.0) (2018-04-26)


### Bug Fixes

* **base:** Demote 'special' prettier rules to warnings ([0f0dca0](https://github.com/zillow/javascript/commit/0f0dca0))
* **base:** Demote max-len to a warning, super-long comments should not break builds ([e09a582](https://github.com/zillow/javascript/commit/e09a582))
* **base:** Demote prefer-destructuring to a warning, as it is not auto-fixable ([307647f](https://github.com/zillow/javascript/commit/307647f))





<a name="1.0.0-alpha.5"></a>
# [1.0.0-alpha.5](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@1.0.0-alpha.4...eslint-config-zillow-base@1.0.0-alpha.5) (2018-04-10)


### Features

* **eslint-config-zillow-base:** Enable line-comment-position warning ([057102a](https://github.com/zillow/javascript/commit/057102a))





<a name="1.0.0-alpha.4"></a>
# [1.0.0-alpha.4](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@1.0.0-alpha.3...eslint-config-zillow-base@1.0.0-alpha.4) (2018-04-07)


### Bug Fixes

* **eslint-config-zillow-base:** Avoid extraneous import warnings under __mocks__ ([442a517](https://github.com/zillow/javascript/commit/442a517))


### Features

* Add Jest subpath config/plugin ([b639c7e](https://github.com/zillow/javascript/commit/b639c7e))
* Add Mocha subpath config/plugin ([9ddfa68](https://github.com/zillow/javascript/commit/9ddfa68))





<a name="1.0.0-alpha.3"></a>
# [1.0.0-alpha.3](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@1.0.0-alpha.2...eslint-config-zillow-base@1.0.0-alpha.3) (2018-04-06)


### Bug Fixes

* **styles:** Correct indent arg of max-len rule ([6e14aaf](https://github.com/zillow/javascript/commit/6e14aaf))
* **variables:** Allow function declarations to hoist ([17a8e64](https://github.com/zillow/javascript/commit/17a8e64))
* Normalize author metadata ([bdcab0c](https://github.com/zillow/javascript/commit/bdcab0c))
* Sync eslint peer dependency to ^4.19.1 ([c5d5220](https://github.com/zillow/javascript/commit/c5d5220))


### BREAKING CHANGES

* This updates the eslint peer's lower bound one minor version higher, from 4.18.1 to 4.19.1.





<a name="1.0.0-alpha.2"></a>
# [1.0.0-alpha.2](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@1.0.0-alpha.1...eslint-config-zillow-base@1.0.0-alpha.2) (2018-04-05)


### Features

* Replace stylistic rules with prettier ([d50a4d1](https://github.com/zillow/javascript/commit/d50a4d1))





<a name="1.0.0-alpha.1"></a>
# [1.0.0-alpha.1](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@1.0.0-alpha.0...eslint-config-zillow-base@1.0.0-alpha.1) (2018-04-04)


### Bug Fixes

* **base:** Add import/no-cycle ([ce6a719](https://github.com/zillow/javascript/commit/ce6a719))





<a name="1.0.0-alpha.0"></a>
# 1.0.0-alpha.0 (2018-03-28)


### Features

* Indent 4 spaces ([f50dae1](https://github.com/zillow/javascript/commit/f50dae1))
* s/airbnb/zillow/gi ([b2ad2ca](https://github.com/zillow/javascript/commit/b2ad2ca))

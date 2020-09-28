# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0-alpha.1](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@4.0.0-alpha.0...eslint-config-zillow-base@4.0.0-alpha.1) (2020-09-28)

**Note:** Version bump only for package eslint-config-zillow-base





# [4.0.0-alpha.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.8.0...eslint-config-zillow-base@4.0.0-alpha.0) (2020-09-25)


### Features

* Drop support for Node v8.x ([0121df0](https://github.com/zillow/javascript/commit/0121df05ca213ccd82022ebd673b080b3e513753))
* **peer:** Drop support for prettier@1 ([64ed709](https://github.com/zillow/javascript/commit/64ed70992d63764eff1e2501b87686ea259fefb3))
* Remove typescript re-export & peer ([284dcdd](https://github.com/zillow/javascript/commit/284dcdd3507e63081435dabd0754a698c01ad6b0))
* Support eslint v7 ([6f3e765](https://github.com/zillow/javascript/commit/6f3e7655bb1dbaae345a19dcb2b6addf2f90cee9))
* Upgrade eslint-plugin-jest to ^24.0.2 ([dd3462b](https://github.com/zillow/javascript/commit/dd3462b21570f3d4caf426e61de18c0267991482))
* Upgrade eslint-plugin-mocha to ^8.0.0 ([127d636](https://github.com/zillow/javascript/commit/127d63672740d923feec13a3e41765fff9875f4e))
* **peer:** Update minimum version ranges ([4dd1ae4](https://github.com/zillow/javascript/commit/4dd1ae48172983462f1403f43b0731f0ff2554fa))


### BREAKING CHANGES

* **peer:** The minimum version range of all peerDependencies have been bumped to their latest versions. Technically a breaking change, you only need re-install the peers to receive compatible updates.
* eslint v7 is now the minimum peer. Please upgrade.
* The version of eslint-plugin-mocha has been bumped two majors (6 -> 8), there are very likely new errors exposed. See https://github.com/lo1tuma/eslint-plugin-mocha/releases for details.
* The version of eslint-plugin-jest has been bumped two majors (22 -> 24), there are very likely new errors exposed. See https://github.com/jest-community/eslint-plugin-jest/releases/tag/v23.0.0 and https://github.com/jest-community/eslint-plugin-jest/releases/tag/v24.0.0 for details.
* TypeScript config is no longer provided by this module, please switch to eslint-config-zillow-typescript.
* **peer:** The minimum peer range for prettier is now ^2.1.2.
* The minimum supported version of Node is now v10.17.0 (v10 LTS).





# [3.8.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.7.8...eslint-config-zillow-base@3.8.0) (2020-09-23)


### Features

* **base:** Add new Jest rules ([2b1f25a](https://github.com/zillow/javascript/commit/2b1f25a7d5610db5525e68b63010b3779ef665bb))
* **base:** Add new TypeScript rules ([5ab97fc](https://github.com/zillow/javascript/commit/5ab97fc8953c92937f2ed075260fa4f1cea199be))





## [3.7.8](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.7.7...eslint-config-zillow-base@3.7.8) (2020-06-03)


### Bug Fixes

* **typescript:** Use correct prettier options in eslint-plugin-prettier rule ([d7562b2](https://github.com/zillow/javascript/commit/d7562b2d31f07af5cb7c72140882e1033cf77cc5))





## [3.7.7](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.7.6...eslint-config-zillow-base@3.7.7) (2020-05-18)


### Bug Fixes

* **typescript:** Allow TODO methods, too ([b2e5b4e](https://github.com/zillow/javascript/commit/b2e5b4e0ae816766c0a7ba899ab40b5ca45961ef))





## [3.7.6](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.7.5...eslint-config-zillow-base@3.7.6) (2020-05-18)


### Bug Fixes

* **typescript:** Allow 'TODO' properties ([b534a5e](https://github.com/zillow/javascript/commit/b534a5ed6985dd8980bf53be34f81c5b955e2617))





## [3.7.5](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.7.4...eslint-config-zillow-base@3.7.5) (2020-05-16)


### Bug Fixes

* **typescript:** Allow callbacks in type aliases ([aac8344](https://github.com/zillow/javascript/commit/aac8344bc9144a896c462b8ae230e5b64efbb674))
* **typescript:** Allow function expressions to use PascalCase ([409939a](https://github.com/zillow/javascript/commit/409939a77f8ca048d75ed0c9bfd5c05cae6e2119))
* **typescript:** Allow Next.js context properties to be PascalCase ([730fa7d](https://github.com/zillow/javascript/commit/730fa7d539a2d235fbb50c97b15c8028ff73be4f))
* **typescript:** Only prevent I- prefix on interfaces, allow acronyms that start with I ([a389036](https://github.com/zillow/javascript/commit/a389036111899e66babe415e9503152028c632a8))
* **typescript:** Turn off no-magic-numbers rule (but flesh out config) ([020cd54](https://github.com/zillow/javascript/commit/020cd54321b24fbd7f6b7e0c54984e2a88967e9f))





## [3.7.4](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.7.3...eslint-config-zillow-base@3.7.4) (2020-05-08)


### Bug Fixes

* **base:** Add typescript peer, docs ([f577ee5](https://github.com/zillow/javascript/commit/f577ee5afc123b63f3125d8f0415ddb8fc5207a5))





## [3.7.3](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.7.2...eslint-config-zillow-base@3.7.3) (2020-04-24)


### Bug Fixes

* **typescript:** Configure explicit-member-accessibility rule to omit public modifiers ([201bc36](https://github.com/zillow/javascript/commit/201bc36ad6722b87479aaa5ca619b1f37175f257))
* **typescript:** Replace deprecated rules with fully-configured naming-convention ([e824145](https://github.com/zillow/javascript/commit/e82414591ab796afa0dd2894782c51a25d286007))
* **typescript:** Turn off react/sort-comp in TSX files, it doesn't cooperate with class properties ([46c8ecc](https://github.com/zillow/javascript/commit/46c8ecc9bc4f745e967b42e57bd5a8c05ceb8d78))





## [3.7.2](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.7.1...eslint-config-zillow-base@3.7.2) (2020-04-24)


### Bug Fixes

* **typescript:** Add missing rule config ([89085b1](https://github.com/zillow/javascript/commit/89085b1617b139e0a7607f8abd3e8ec4a5b65737))





## [3.7.1](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.7.0...eslint-config-zillow-base@3.7.1) (2020-04-23)


### Bug Fixes

* **typescript:** Add missing entry to pkg.files ([03c72d0](https://github.com/zillow/javascript/commit/03c72d0d212c84278919eee8a921afc22ba8d236))





# [3.7.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.6.0...eslint-config-zillow-base@3.7.0) (2020-04-23)


### Features

* Support TypeScript ([a41c747](https://github.com/zillow/javascript/commit/a41c7476d10ad01ce99947033230a9b98f36e55a))





# [3.6.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.5.0...eslint-config-zillow-base@3.6.0) (2020-04-21)


### Features

* Expand peer range of prettier to 2.x ([07ddbef](https://github.com/zillow/javascript/commit/07ddbef53cd636f2dd459227c09577fa4d366259))





# [3.5.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.4.0...eslint-config-zillow-base@3.5.0) (2019-10-10)


### Features

* **base:** Add config for `jest/require-top-level-describe` ([36d46f1](https://github.com/zillow/javascript/commit/36d46f1dae0f600ecc5d8763204309b1244b4fb5))
* **base:** Add config for `mocha/no-return-from-async` ([9781e8c](https://github.com/zillow/javascript/commit/9781e8c409acf4ea6a5b5da8a3b8f16f2fcef69e))
* **base:** Expand peer range of eslint-plugin-mocha to 6.x ([ac32540](https://github.com/zillow/javascript/commit/ac325405e3f65a43f338aa83d0f00102b8f87711))
* **config:** Turn off `import/prefer-default-export` ([#6](https://github.com/zillow/javascript/issues/6)) ([f662ddc](https://github.com/zillow/javascript/commit/f662ddce0d870a6edf0ce78c296127d8c606e0eb))





# [3.4.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.3.1...eslint-config-zillow-base@3.4.0) (2019-08-07)


### Features

* **base:** Add new `eslint-plugin-jest` rules ([cb7fc1c](https://github.com/zillow/javascript/commit/cb7fc1c))





## [3.3.1](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.3.0...eslint-config-zillow-base@3.3.1) (2019-06-26)

**Note:** Version bump only for package eslint-config-zillow-base





# [3.3.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.2.0...eslint-config-zillow-base@3.3.0) (2019-06-26)


### Features

* **plugin:** Bump eslint-plugin-jest ([0a795b4](https://github.com/zillow/javascript/commit/0a795b4))





# [3.2.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.1.0...eslint-config-zillow-base@3.2.0) (2019-04-22)


### Bug Fixes

* **base:** Add import/no-unused-modules config ([486e9f3](https://github.com/zillow/javascript/commit/486e9f3))


### Features

* **base:** Consume prettier-config-zillow ([7df1a55](https://github.com/zillow/javascript/commit/7df1a55))
* **prettier:** Add `quoteProps: 'consistent'` config ([#4](https://github.com/zillow/javascript/issues/4)) ([4f49447](https://github.com/zillow/javascript/commit/4f49447))





# [3.1.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@3.0.0...eslint-config-zillow-base@3.1.0) (2019-03-21)


### Features

* **base:** Enforce jest/no-empty-title ([cc76f49](https://github.com/zillow/javascript/commit/cc76f49))





# [3.0.0](https://github.com/zillow/javascript/compare/eslint-config-zillow-base@2.1.3...eslint-config-zillow-base@3.0.0) (2019-03-09)


### Bug Fixes

* **base:** Disable 'line-break-style' in favor of prettier ([101af2d](https://github.com/zillow/javascript/commit/101af2d))
* **base:** Lint jest plugin rules, add missing ([ef87358](https://github.com/zillow/javascript/commit/ef87358))
* **base:** Lint mocha plugin rules, add missing ([f3f2096](https://github.com/zillow/javascript/commit/f3f2096))
* **base:** Switch to confusing-browser-globals ([e2a129b](https://github.com/zillow/javascript/commit/e2a129b))
* **peer:** Tighten prettier range to ^1.16.4 ([3d0bd89](https://github.com/zillow/javascript/commit/3d0bd89))
* **style:** Allow non-camelCase when destructuring ([ebb6a3c](https://github.com/zillow/javascript/commit/ebb6a3c))


### Features

* **base:** Add explicit prettier config defaults ([e4b5717](https://github.com/zillow/javascript/commit/e4b5717))
* **best-practices:** Enforce `max-classes-per-file` ([9274049](https://github.com/zillow/javascript/commit/9274049))
* **best-practices:** Enforce `no-self-assign` for properties ([0eb3505](https://github.com/zillow/javascript/commit/0eb3505))
* **best-practices:** Enforce `no-useless-catch` ([487ffdf](https://github.com/zillow/javascript/commit/487ffdf))
* **errors:** Enforce `no-async-promise-executor` ([5612fc4](https://github.com/zillow/javascript/commit/5612fc4))
* **errors:** Enforce `no-misleading-character-class` ([50b936a](https://github.com/zillow/javascript/commit/50b936a))
* **errors:** Enforce `require-atomic-updates` ([206f0ac](https://github.com/zillow/javascript/commit/206f0ac))
* **jest:** Enforce `jest/expect-expect` ([d80cc09](https://github.com/zillow/javascript/commit/d80cc09))
* **jest:** Enforce `jest/no-jasmine-globals` ([40e9087](https://github.com/zillow/javascript/commit/40e9087))
* **jest:** Enforce `jest/no-test-return-statement` ([8f8af38](https://github.com/zillow/javascript/commit/8f8af38))
* **jest:** Enforce `jest/no-truthy-falsy` ([69bcd05](https://github.com/zillow/javascript/commit/69bcd05))
* **jest:** Enforce `jest/prefer-todo` ([d7d29fd](https://github.com/zillow/javascript/commit/d7d29fd))
* **meta:** Sync latest upstream changes ([e6e463e](https://github.com/zillow/javascript/commit/e6e463e))
* **mocha:** Enforce mocha/no-mocha-arrows ([a58e1d8](https://github.com/zillow/javascript/commit/a58e1d8))
* **peer:** Bump lower range of peerDependencies ([a83ca95](https://github.com/zillow/javascript/commit/a83ca95))
* **style:** Enforce `func-name-matching` ([dc07745](https://github.com/zillow/javascript/commit/dc07745))
* **style:** Enforce `prefer-object-spread` ([0b5347c](https://github.com/zillow/javascript/commit/0b5347c))


### BREAKING CHANGES

* **peer:** The peer dependency on `prettier` has been tightened to encompass React Hooks-related features and bugfixes, as well as to explicitly disclaim support for _all_ versions 2.x and above.
* **mocha:** Passing an arrow function to a Mocha test case is now an error.
* **style:** Prefer object spread instead of `Object.assign()`. This rule is fixable.
* **style:** Function names must match the name of the variable or property to which they are assigned.
* **style:** `camelcase` no longer errors when (predominantly) Python APIs insist on returning JSON with `snake_case` keys.
* **errors:** Assignments that can lead to race conditions due to usage of `await` or `yield` are not allowed.
* **errors:** Misleading character classes in regular expressions are not allowed.
* **errors:** Passing an `async` function to the `Promise` constructor is not allowed.
* **peer:** Several new rules require a higher minimum version of various peer plugins.
* **best-practices:** Self-assigning properties is not allowed.
* **best-practices:** Only one class per-file is allowed.
* **jest:** Emtpy test cases are no longer allowed. This rule is fixable.
* **jest:** The `toBeTruthy()` and `toBeFalsy()` assertions are no longer allowed. There are several assertions available with greater clarity.
* **jest:** Returning values from test cases is not allowed. Tests with Promise return values should be converted to async/await.
* **jest:** Jasmine globals are no longer allowed. This rule is fixable.
* **jest:** Test cases without a call to `expect()` will now error. If you use a different assertion function, you will need to extend the [assertionFunctionNames](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md#assertfunctionnames) rule option.
* **best-practices:** Empty `catch` statements are not allowed.





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

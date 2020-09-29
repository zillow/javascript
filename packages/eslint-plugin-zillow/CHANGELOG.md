# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0-alpha.6](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@4.0.0-alpha.5...eslint-plugin-zillow@4.0.0-alpha.6) (2020-09-29)


### Bug Fixes

* **errors:** Move no-restricted-exports to es6 rules, enable ([b9845de](https://github.com/zillow/javascript/commit/b9845de293732b01d8c9c6221deccbcdd700fd42))
* **errors:** Turn off require-atomic-updates, it is very buggy ([abb2346](https://github.com/zillow/javascript/commit/abb23464c22aeb83236775501629c3f7dd2a5d36))
* **jest:** Turn off TypeScript no-invalid-void-type rule in tests ([91fb3ba](https://github.com/zillow/javascript/commit/91fb3bae4b79443820370730474bad9e27961206))
* **rules:** Turn off default-param-last until it is configurable ([c05d872](https://github.com/zillow/javascript/commit/c05d872f553c368b571f9babd82764a21189019a))
* **typescript:** Enable auto-fix for ban-types 'object' case ([bb70eb9](https://github.com/zillow/javascript/commit/bb70eb9d014a6c276e0446f6b09055023dc065e3))
* **typescript:** Extend no-shadow allow list to accommodate common patterns ([5e4013e](https://github.com/zillow/javascript/commit/5e4013e9697f2d28229bf964894941903f003d28))
* **typescript:** Flesh out no-empty-function allow list ([1d9438a](https://github.com/zillow/javascript/commit/1d9438acdef5e61dee9c78c16a7690654ab8668a))
* **typescript:** Turn off explicit-module-boundary-types, too much noise ([25ac226](https://github.com/zillow/javascript/commit/25ac226ffc2af781089f78f12fabb47255b0f308))
* **typescript:** Turn off no-implicit-any-catch, too much noise ([4e1ac62](https://github.com/zillow/javascript/commit/4e1ac62d1219b7380f984d429385e5e6134996b8))
* **typescript:** Turn off react/prop-types in TSX files ([6249318](https://github.com/zillow/javascript/commit/6249318bdc5b0250161d7a34070b4a104b7657c5))


### Features

* **peer:** eslint >= 7.4.0 ([828ce5a](https://github.com/zillow/javascript/commit/828ce5a7fa03d72e84976f679d8c582a77a4b987))


### BREAKING CHANGES

* **peer:** The minimum peer version of eslint is now 7.4.0.





# [4.0.0-alpha.5](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@4.0.0-alpha.4...eslint-plugin-zillow@4.0.0-alpha.5) (2020-09-28)


### Bug Fixes

* **react:** Revert silly workaround, it didn't work ([10542c7](https://github.com/zillow/javascript/commit/10542c71deb66ab6702ea8bf6d2c3307069a2c13))
* **react:** Turn off react/prop-types until upstream bug is fixed ([3ba39d5](https://github.com/zillow/javascript/commit/3ba39d5204fe7bee86780cda342d687da295fe30))


### Features

* **prettier:** Add embeddedLanguageFormatting default to config ([99708d0](https://github.com/zillow/javascript/commit/99708d0df097e455897583a9a17a907e8671a0d9))





# [4.0.0-alpha.4](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@4.0.0-alpha.3...eslint-plugin-zillow@4.0.0-alpha.4) (2020-09-28)

**Note:** Version bump only for package eslint-plugin-zillow





# [4.0.0-alpha.3](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@4.0.0-alpha.2...eslint-plugin-zillow@4.0.0-alpha.3) (2020-09-28)


### Bug Fixes

* **deps:** Hard-pin eslint-plugin-zillow@7.21.0 to workaround destructured prop-types bug ([1d7c002](https://github.com/zillow/javascript/commit/1d7c00275d39f88f0e50e5245de8ff34e7081e6b))


### Features

* **deps:** eslint-plugin-import@^2.22.1 ([c6bd7ff](https://github.com/zillow/javascript/commit/c6bd7ff283bed6f526f576d118d536d5c00bf805))





# [4.0.0-alpha.2](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@4.0.0-alpha.1...eslint-plugin-zillow@4.0.0-alpha.2) (2020-09-25)


### Bug Fixes

* Prefix nested plugin env configs, make proxied environments work ([ebdc70f](https://github.com/zillow/javascript/commit/ebdc70fcc42d0207972cbad3f142fbb94c5ddf16))





# [4.0.0-alpha.1](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@4.0.0-alpha.0...eslint-plugin-zillow@4.0.0-alpha.1) (2020-09-25)


### Bug Fixes

* **plugin:** Expose environments from nested plugins ([ca16099](https://github.com/zillow/javascript/commit/ca160992910afaf7250628d0c712fd3b76091998))
* **plugin:** Validate config during generation ([8f02325](https://github.com/zillow/javascript/commit/8f02325cb99fa3797bd14cfb94cba3a6bbe2e8e9))





# [4.0.0-alpha.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.8.0...eslint-plugin-zillow@4.0.0-alpha.0) (2020-09-25)


### Bug Fixes

* **plugin:** Ensure rendered configs do not contain context-dependent paths ([12a9f40](https://github.com/zillow/javascript/commit/12a9f405ce3bcab67420d8069e9a89c00e5bf85f))


### Features

* **deps:** eslint-plugin-react@^7.21.2 ([b998ea9](https://github.com/zillow/javascript/commit/b998ea9fe36482d7226b47fd79ac9d0a89600c11))
* Drop support for Node v8.x ([0121df0](https://github.com/zillow/javascript/commit/0121df05ca213ccd82022ebd673b080b3e513753))
* **deps:** Remove TypeScript 3 from dependency version range ([bd97258](https://github.com/zillow/javascript/commit/bd97258659860d194ec8e6193c871e205829b518))
* **deps:** Upgrade typescript-eslint dependencies to ^4.2.0 ([eaf9bf0](https://github.com/zillow/javascript/commit/eaf9bf0b00a7171382685a37054d4725950663a6))
* **peer:** Drop support for prettier@1 ([64ed709](https://github.com/zillow/javascript/commit/64ed70992d63764eff1e2501b87686ea259fefb3))
* **plugin:** Migrate deprecated CLIEngine -> ESLint constructor ([e8c14e3](https://github.com/zillow/javascript/commit/e8c14e34dd9c4b58c940449b4e9752fcba73b541))
* **plugin:** Switch typescript target to eslint-config-zillow-typescript ([7d18652](https://github.com/zillow/javascript/commit/7d1865263d74ad7fefc63d9e7dc8adf989a151f5))
* Support eslint v7 ([6f3e765](https://github.com/zillow/javascript/commit/6f3e7655bb1dbaae345a19dcb2b6addf2f90cee9))
* Upgrade eslint-plugin-jest to ^24.0.2 ([dd3462b](https://github.com/zillow/javascript/commit/dd3462b21570f3d4caf426e61de18c0267991482))
* Upgrade eslint-plugin-mocha to ^8.0.0 ([127d636](https://github.com/zillow/javascript/commit/127d63672740d923feec13a3e41765fff9875f4e))
* Upgrade eslint-plugin-react-hooks to ^4.1.2 ([016257b](https://github.com/zillow/javascript/commit/016257b963172c37ffe31dab178f506e80ef751d))


### BREAKING CHANGES

* **deps:** TypeScript 3 is no longer supported, please upgrade.
* eslint v7 is now the minimum peer. Please upgrade.
* The version of eslint-plugin-mocha has been bumped two majors (6 -> 8), there are very likely new errors exposed. See https://github.com/lo1tuma/eslint-plugin-mocha/releases for details.
* The version of eslint-plugin-jest has been bumped two majors (22 -> 24), there are very likely new errors exposed. See https://github.com/jest-community/eslint-plugin-jest/releases/tag/v23.0.0 and https://github.com/jest-community/eslint-plugin-jest/releases/tag/v24.0.0 for details.
* The version of eslint-plugin-react-hooks has been bumped two majors (2 -> 4), there are many new validations that may expose new lint errors. See https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/CHANGELOG.md for details.
* **peer:** The minimum peer range for prettier is now ^2.1.2.
* The minimum supported version of Node is now v10.17.0 (v10 LTS).





# [3.8.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.7.8...eslint-plugin-zillow@3.8.0) (2020-09-23)


### Features

* **plugin:** Bump dependencies ([f2992b7](https://github.com/zillow/javascript/commit/f2992b7b8b1ec3a5cbbd5c29c6b78b87cb5b5e88))
* **plugin:** Expand dependency range of TypeScript to encompass ^4.0.2 ([bf56011](https://github.com/zillow/javascript/commit/bf56011530042f5527bd005dd8f2ae55182df051))





## [3.7.8](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.7.7...eslint-plugin-zillow@3.7.8) (2020-06-03)

**Note:** Version bump only for package eslint-plugin-zillow





## [3.7.7](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.7.6...eslint-plugin-zillow@3.7.7) (2020-05-18)

**Note:** Version bump only for package eslint-plugin-zillow





## [3.7.6](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.7.5...eslint-plugin-zillow@3.7.6) (2020-05-18)

**Note:** Version bump only for package eslint-plugin-zillow





## [3.7.5](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.7.4...eslint-plugin-zillow@3.7.5) (2020-05-16)

**Note:** Version bump only for package eslint-plugin-zillow





## [3.7.4](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.7.3...eslint-plugin-zillow@3.7.4) (2020-05-08)


### Bug Fixes

* **plugin:** Add typescript dependency, docs ([5f338ae](https://github.com/zillow/javascript/commit/5f338aea5ca49dd5b4f44fb48b94ef1dc0eb9616))





## [3.7.3](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.7.2...eslint-plugin-zillow@3.7.3) (2020-04-24)

**Note:** Version bump only for package eslint-plugin-zillow





## [3.7.2](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.7.1...eslint-plugin-zillow@3.7.2) (2020-04-24)

**Note:** Version bump only for package eslint-plugin-zillow





## [3.7.1](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.7.0...eslint-plugin-zillow@3.7.1) (2020-04-23)

**Note:** Version bump only for package eslint-plugin-zillow





# [3.7.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.6.0...eslint-plugin-zillow@3.7.0) (2020-04-23)


### Features

* Support TypeScript ([a41c747](https://github.com/zillow/javascript/commit/a41c7476d10ad01ce99947033230a9b98f36e55a))





# [3.6.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.5.1...eslint-plugin-zillow@3.6.0) (2020-04-21)


### Features

* Expand peer range of prettier to 2.x ([07ddbef](https://github.com/zillow/javascript/commit/07ddbef53cd636f2dd459227c09577fa4d366259))





## [3.5.1](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.5.0...eslint-plugin-zillow@3.5.1) (2019-10-17)

**Note:** Version bump only for package eslint-plugin-zillow





# [3.5.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.4.1...eslint-plugin-zillow@3.5.0) (2019-10-10)


### Features

* **config:** Turn off `import/prefer-default-export` ([#6](https://github.com/zillow/javascript/issues/6)) ([f662ddc](https://github.com/zillow/javascript/commit/f662ddce0d870a6edf0ce78c296127d8c606e0eb))
* **plugin:** Bump eslint-plugin-jest ([b8506fd](https://github.com/zillow/javascript/commit/b8506fdcd547fec222320ba042056160dc51369c))
* **plugin:** Bump eslint-plugin-prettier ([75a9011](https://github.com/zillow/javascript/commit/75a90111f9d0d5550539ca72ebcb16ea05f19737))
* **plugin:** Bump eslint-plugin-react ([de7d07c](https://github.com/zillow/javascript/commit/de7d07cc7a7896e1ce99e20eaea1954177148736))
* **plugin:** Upgrade eslint-plugin-mocha to 6.x ([ffa6a08](https://github.com/zillow/javascript/commit/ffa6a08893f408d34fb32116bf883267e70dee3e))
* **plugin:** Upgrade eslint-plugin-react-hooks to 2.x ([ea2e964](https://github.com/zillow/javascript/commit/ea2e9643bc8fdb3e8aa911157524e884c1e9f682))





## [3.4.1](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.4.0...eslint-plugin-zillow@3.4.1) (2019-10-09)


### Bug Fixes

* **config:** Remove deprecated `jsx-a11y/label-has-for` ([#5](https://github.com/zillow/javascript/issues/5)) ([f035d57](https://github.com/zillow/javascript/commit/f035d57))





# [3.4.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.3.2...eslint-plugin-zillow@3.4.0) (2019-08-07)


### Features

* **plugin:** Update dependencies ([79d71c9](https://github.com/zillow/javascript/commit/79d71c9))





## [3.3.2](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.3.1...eslint-plugin-zillow@3.3.2) (2019-07-03)


### Bug Fixes

* **plugin:** Ensure pnpm-compatible resolver settings do not break eslint v5 when JSX files are present ([3dab597](https://github.com/zillow/javascript/commit/3dab597))





## [3.3.1](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.3.0...eslint-plugin-zillow@3.3.1) (2019-06-26)

**Note:** Version bump only for package eslint-plugin-zillow





# [3.3.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.2.0...eslint-plugin-zillow@3.3.0) (2019-06-26)


### Bug Fixes

* **plugin:** Support stricter pnpm installation ([3628fb8](https://github.com/zillow/javascript/commit/3628fb8))


### Features

* **plugin:** Bump eslint-plugin-import ([83f0699](https://github.com/zillow/javascript/commit/83f0699))
* **plugin:** Bump eslint-plugin-jest ([0a795b4](https://github.com/zillow/javascript/commit/0a795b4))
* **plugin:** Bump eslint-plugin-prettier ([4c0786b](https://github.com/zillow/javascript/commit/4c0786b))
* **plugin:** Bump eslint-plugin-react{,-hooks} ([0ae77c0](https://github.com/zillow/javascript/commit/0ae77c0))





# [3.2.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.1.0...eslint-plugin-zillow@3.2.0) (2019-04-22)


### Features

* **plugin:** Bump dependencies ([3f10738](https://github.com/zillow/javascript/commit/3f10738))
* **plugin:** Consume prettier-config-zillow ([ff5f5ae](https://github.com/zillow/javascript/commit/ff5f5ae))





# [3.1.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@3.0.0...eslint-plugin-zillow@3.1.0) (2019-03-21)


### Features

* **plugin:** Bump eslint-plugin-jest ([29ffc7c](https://github.com/zillow/javascript/commit/29ffc7c))
* **plugin:** Bump eslint-plugin-react-hooks ([7554db3](https://github.com/zillow/javascript/commit/7554db3))





# [3.0.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@2.2.1...eslint-plugin-zillow@3.0.0) (2019-03-09)


### Bug Fixes

* **peer:** Tighten prettier range to ^1.16.4 ([3d0bd89](https://github.com/zillow/javascript/commit/3d0bd89))


### Features

* **plugin:** Add rules of React Hooks ([#2](https://github.com/zillow/javascript/issues/2)) ([abf05c5](https://github.com/zillow/javascript/commit/abf05c5))
* **plugin:** bump lower range of dependencies ([de44db2](https://github.com/zillow/javascript/commit/de44db2))


### BREAKING CHANGES

* **peer:** The peer dependency on `prettier` has been tightened to encompass React Hooks-related features and bugfixes, as well as to explicitly disclaim support for _all_ versions 2.x and above.





## [2.2.1](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@2.2.0...eslint-plugin-zillow@2.2.1) (2019-01-14)

**Note:** Version bump only for package eslint-plugin-zillow





# [2.2.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@2.1.2...eslint-plugin-zillow@2.2.0) (2019-01-14)


### Features

* **plugin:** Upgrade dependencies ([b972505](https://github.com/zillow/javascript/commit/b972505))





## [2.1.2](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@2.1.1...eslint-plugin-zillow@2.1.2) (2018-11-08)

**Note:** Version bump only for package eslint-plugin-zillow





## [2.1.1](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@2.1.0...eslint-plugin-zillow@2.1.1) (2018-11-08)

**Note:** Version bump only for package eslint-plugin-zillow





# [2.1.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@2.0.0...eslint-plugin-zillow@2.1.0) (2018-11-08)


### Features

* **plugin:** Upgrade eslint-plugin-jest to v22 ([dd450d6](https://github.com/zillow/javascript/commit/dd450d6))





# [2.0.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0...eslint-plugin-zillow@2.0.0) (2018-11-06)


### Features

* Loosen prettier peer to >= 1.13.0 ([24c5fcb](https://github.com/zillow/javascript/commit/24c5fcb))
* Raise floor of babel-eslint peer to ^10.0.1 ([45c5376](https://github.com/zillow/javascript/commit/45c5376))
* Raise floor of eslint peer to >= 5.0.0 ([5b8abfc](https://github.com/zillow/javascript/commit/5b8abfc))
* Upgrade eslint-plugin-prettier to ^3.0.0 ([d636689](https://github.com/zillow/javascript/commit/d636689))
* Upgrade to Babel 7 ([23bba84](https://github.com/zillow/javascript/commit/23bba84))


### BREAKING CHANGES

* babel-eslint <= 10.0.1 is no longer supported
* eslint v4 is no longer supported
* Babel 6 is no longer supported.





<a name="1.0.0"></a>
# [1.0.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0-rc.1...eslint-plugin-zillow@1.0.0) (2018-08-15)


### Bug Fixes

* **pkg:** Correct homepage URL ([1b5e7f0](https://github.com/zillow/javascript/commit/1b5e7f0))


### Features

* Add eslint v5 support ([a52862a](https://github.com/zillow/javascript/commit/a52862a))
* **deps:** Bump eslint plugins ([c134c45](https://github.com/zillow/javascript/commit/c134c45))
* **plugin:** Bump eslint plugins ([19d2fae](https://github.com/zillow/javascript/commit/19d2fae))
* Raise floor of peer dependency ranges ([3d6bbfd](https://github.com/zillow/javascript/commit/3d6bbfd))





<a name="1.0.0-rc.1"></a>
# [1.0.0-rc.1](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0-rc.0...eslint-plugin-zillow@1.0.0-rc.1) (2018-06-15)


### Features

* Allow babel-eslint@8 peers ([5a01115](https://github.com/zillow/javascript/commit/5a01115))





<a name="1.0.0-rc.0"></a>
# [1.0.0-rc.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0-beta.3...eslint-plugin-zillow@1.0.0-rc.0) (2018-06-05)


### Features

* Sync upstream eslint plugins ([5e42578](https://github.com/zillow/javascript/commit/5e42578))
* **prettier:** Remove explicit parser from config ([ce6a740](https://github.com/zillow/javascript/commit/ce6a740))





<a name="1.0.0-beta.3"></a>
# [1.0.0-beta.3](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0-beta.2...eslint-plugin-zillow@1.0.0-beta.3) (2018-05-04)


### Bug Fixes

* **plugin:** Don't prefer-arrow-callback inside mocha tests ([4d0829b](https://github.com/zillow/javascript/commit/4d0829b))





<a name="1.0.0-beta.2"></a>
# [1.0.0-beta.2](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0-beta.1...eslint-plugin-zillow@1.0.0-beta.2) (2018-05-02)


### Features

* Add babel-eslint parser ([290fbea](https://github.com/zillow/javascript/commit/290fbea))





<a name="1.0.0-beta.1"></a>
# [1.0.0-beta.1](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0-beta.0...eslint-plugin-zillow@1.0.0-beta.1) (2018-05-01)


### Bug Fixes

* **plugin:** Add __mocks__ to jest glob overrides ([0cbf4d5](https://github.com/zillow/javascript/commit/0cbf4d5))





<a name="1.0.0-beta.0"></a>
# [1.0.0-beta.0](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0-alpha.6...eslint-plugin-zillow@1.0.0-beta.0) (2018-04-26)


### Bug Fixes

* **base:** Demote max-len to a warning, super-long comments should not break builds ([e09a582](https://github.com/zillow/javascript/commit/e09a582))
* **plugin:** Bump dependencies ([8665212](https://github.com/zillow/javascript/commit/8665212))


### Features

* **plugin:** Scope jest & mocha configs to globs ([5c28e8c](https://github.com/zillow/javascript/commit/5c28e8c))





<a name="1.0.0-alpha.6"></a>
# [1.0.0-alpha.6](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0-alpha.5...eslint-plugin-zillow@1.0.0-alpha.6) (2018-04-11)


### Bug Fixes

* Don't expose computed env for now, it's broken ([9f253f7](https://github.com/zillow/javascript/commit/9f253f7))





<a name="1.0.0-alpha.5"></a>
# [1.0.0-alpha.5](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0-alpha.4...eslint-plugin-zillow@1.0.0-alpha.5) (2018-04-10)

**Note:** Version bump only for package eslint-plugin-zillow





<a name="1.0.0-alpha.4"></a>
# [1.0.0-alpha.4](https://github.com/zillow/javascript/compare/eslint-plugin-zillow@1.0.0-alpha.3...eslint-plugin-zillow@1.0.0-alpha.4) (2018-04-07)


### Features

* **eslint-plugin-zillow:** Propagate plugin processors ([c1004cb](https://github.com/zillow/javascript/commit/c1004cb))
* Add Jest subpath config/plugin ([b639c7e](https://github.com/zillow/javascript/commit/b639c7e))
* Add Mocha subpath config/plugin ([9ddfa68](https://github.com/zillow/javascript/commit/9ddfa68))





<a name="1.0.0-alpha.3"></a>
# 1.0.0-alpha.3 (2018-04-06)


### Bug Fixes

* Normalize author metadata ([bdcab0c](https://github.com/zillow/javascript/commit/bdcab0c))


### Features

* Add eslint-plugin-zillow ([9af5782](https://github.com/zillow/javascript/commit/9af5782))

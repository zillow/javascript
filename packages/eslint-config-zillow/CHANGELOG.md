# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@4.0.0-alpha.3...eslint-config-zillow@4.0.0) (2020-09-30)

**Note:** Version bump only for package eslint-config-zillow





# [4.0.0-alpha.3](https://github.com/zillow/javascript/compare/eslint-config-zillow@4.0.0-alpha.2...eslint-config-zillow@4.0.0-alpha.3) (2020-09-29)


### Features

* **peer:** eslint >= 7.4.0 ([828ce5a](https://github.com/zillow/javascript/commit/828ce5a7fa03d72e84976f679d8c582a77a4b987))


### BREAKING CHANGES

* **peer:** The minimum peer version of eslint is now 7.4.0.





# [4.0.0-alpha.2](https://github.com/zillow/javascript/compare/eslint-config-zillow@4.0.0-alpha.1...eslint-config-zillow@4.0.0-alpha.2) (2020-09-28)


### Bug Fixes

* **react:** Revert silly workaround, it didn't work ([10542c7](https://github.com/zillow/javascript/commit/10542c71deb66ab6702ea8bf6d2c3307069a2c13))





# [4.0.0-alpha.1](https://github.com/zillow/javascript/compare/eslint-config-zillow@4.0.0-alpha.0...eslint-config-zillow@4.0.0-alpha.1) (2020-09-28)


### Bug Fixes

* **peer:** Loosen eslint-plugin-react range to allow for silly workaround ([069f822](https://github.com/zillow/javascript/commit/069f822da44bc867e1a8c9a1994a1d3ce9339eb3))





# [4.0.0-alpha.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.6.0...eslint-config-zillow@4.0.0-alpha.0) (2020-09-25)


### Features

* Drop support for Node v8.x ([0121df0](https://github.com/zillow/javascript/commit/0121df05ca213ccd82022ebd673b080b3e513753))
* **peer:** Drop support for prettier@1 ([64ed709](https://github.com/zillow/javascript/commit/64ed70992d63764eff1e2501b87686ea259fefb3))
* Remove typescript re-export & peer ([284dcdd](https://github.com/zillow/javascript/commit/284dcdd3507e63081435dabd0754a698c01ad6b0))
* Support eslint v7 ([6f3e765](https://github.com/zillow/javascript/commit/6f3e7655bb1dbaae345a19dcb2b6addf2f90cee9))
* Upgrade eslint-plugin-jest to ^24.0.2 ([dd3462b](https://github.com/zillow/javascript/commit/dd3462b21570f3d4caf426e61de18c0267991482))
* Upgrade eslint-plugin-mocha to ^8.0.0 ([127d636](https://github.com/zillow/javascript/commit/127d63672740d923feec13a3e41765fff9875f4e))
* Upgrade eslint-plugin-react-hooks to ^4.1.2 ([016257b](https://github.com/zillow/javascript/commit/016257b963172c37ffe31dab178f506e80ef751d))
* **peer:** Update minimum version ranges ([4dd1ae4](https://github.com/zillow/javascript/commit/4dd1ae48172983462f1403f43b0731f0ff2554fa))


### BREAKING CHANGES

* **peer:** The minimum version range of all peerDependencies have been bumped to their latest versions. Technically a breaking change, you only need re-install the peers to receive compatible updates.
* eslint v7 is now the minimum peer. Please upgrade.
* The version of eslint-plugin-mocha has been bumped two majors (6 -> 8), there are very likely new errors exposed. See https://github.com/lo1tuma/eslint-plugin-mocha/releases for details.
* The version of eslint-plugin-jest has been bumped two majors (22 -> 24), there are very likely new errors exposed. See https://github.com/jest-community/eslint-plugin-jest/releases/tag/v23.0.0 and https://github.com/jest-community/eslint-plugin-jest/releases/tag/v24.0.0 for details.
* The version of eslint-plugin-react-hooks has been bumped two majors (2 -> 4), there are many new validations that may expose new lint errors. See https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/CHANGELOG.md for details.
* TypeScript config is no longer provided by this module, please switch to eslint-config-zillow-typescript.
* **peer:** The minimum peer range for prettier is now ^2.1.2.
* The minimum supported version of Node is now v10.17.0 (v10 LTS).





# [3.6.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.5.8...eslint-config-zillow@3.6.0) (2020-09-23)


### Features

* **config:** Add new React A11y rules ([a20ca45](https://github.com/zillow/javascript/commit/a20ca4520c17a802fcf256b6040420face2069dc))
* **config:** Add new React rules ([3b038ca](https://github.com/zillow/javascript/commit/3b038ca8ca8ec293f5ba90c254e8bed73618b8c3))





## [3.5.8](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.5.7...eslint-config-zillow@3.5.8) (2020-06-03)

**Note:** Version bump only for package eslint-config-zillow





## [3.5.7](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.5.6...eslint-config-zillow@3.5.7) (2020-05-18)

**Note:** Version bump only for package eslint-config-zillow





## [3.5.6](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.5.5...eslint-config-zillow@3.5.6) (2020-05-18)

**Note:** Version bump only for package eslint-config-zillow





## [3.5.5](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.5.4...eslint-config-zillow@3.5.5) (2020-05-16)

**Note:** Version bump only for package eslint-config-zillow





## [3.5.4](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.5.3...eslint-config-zillow@3.5.4) (2020-05-08)


### Bug Fixes

* **config:** Add typescript peer, docs ([8d701ab](https://github.com/zillow/javascript/commit/8d701abc03455dce039bd31626ba9da7bb713d3f))





## [3.5.3](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.5.2...eslint-config-zillow@3.5.3) (2020-04-24)

**Note:** Version bump only for package eslint-config-zillow





## [3.5.2](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.5.1...eslint-config-zillow@3.5.2) (2020-04-24)

**Note:** Version bump only for package eslint-config-zillow





## [3.5.1](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.5.0...eslint-config-zillow@3.5.1) (2020-04-23)


### Bug Fixes

* **typescript:** Add missing entry to pkg.files ([03c72d0](https://github.com/zillow/javascript/commit/03c72d0d212c84278919eee8a921afc22ba8d236))





# [3.5.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.4.0...eslint-config-zillow@3.5.0) (2020-04-23)


### Features

* Support TypeScript ([a41c747](https://github.com/zillow/javascript/commit/a41c7476d10ad01ce99947033230a9b98f36e55a))





# [3.4.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.3.1...eslint-config-zillow@3.4.0) (2020-04-21)


### Features

* Expand peer range of prettier to 2.x ([07ddbef](https://github.com/zillow/javascript/commit/07ddbef53cd636f2dd459227c09577fa4d366259))





## [3.3.1](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.3.0...eslint-config-zillow@3.3.1) (2019-10-17)


### Bug Fixes

* **config:** Updates the jsx-a11y/label-has-associated-control ([#7](https://github.com/zillow/javascript/issues/7)) ([bb947fb](https://github.com/zillow/javascript/commit/bb947fb7131f85d35e10fad841728ada8a8ffcb5))





# [3.3.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.2.3...eslint-config-zillow@3.3.0) (2019-10-10)


### Features

* **config:** Add config for `react/jsx-no-useless-fragment` ([d0a7baf](https://github.com/zillow/javascript/commit/d0a7baf013b299fbf4165754eb9ef7cebdf63a38))
* **config:** Expand peer range of eslint-plugin-mocha to 6.x ([40f5654](https://github.com/zillow/javascript/commit/40f5654e61d2f022208d948a801eb243829f92ee))
* **config:** Expand peer range of eslint-plugin-react-hooks to 2.x ([79cf046](https://github.com/zillow/javascript/commit/79cf046d762fe1a6a348096ef58becf336b537b4))





## [3.2.3](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.2.2...eslint-config-zillow@3.2.3) (2019-10-09)


### Bug Fixes

* **config:** Remove deprecated `jsx-a11y/label-has-for` ([#5](https://github.com/zillow/javascript/issues/5)) ([f035d57](https://github.com/zillow/javascript/commit/f035d57))





## [3.2.2](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.2.1...eslint-config-zillow@3.2.2) (2019-08-07)

**Note:** Version bump only for package eslint-config-zillow





## [3.2.1](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.2.0...eslint-config-zillow@3.2.1) (2019-06-26)

**Note:** Version bump only for package eslint-config-zillow





# [3.2.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.1.0...eslint-config-zillow@3.2.0) (2019-06-26)


### Features

* **plugin:** Bump eslint-plugin-react{,-hooks} ([0ae77c0](https://github.com/zillow/javascript/commit/0ae77c0))





# [3.1.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.0.1...eslint-config-zillow@3.1.0) (2019-04-22)


### Features

* **config:** Consume prettier-config-zillow ([2883116](https://github.com/zillow/javascript/commit/2883116))





## [3.0.1](https://github.com/zillow/javascript/compare/eslint-config-zillow@3.0.0...eslint-config-zillow@3.0.1) (2019-03-21)

**Note:** Version bump only for package eslint-config-zillow





# [3.0.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@2.0.5...eslint-config-zillow@3.0.0) (2019-03-09)


### Bug Fixes

* **config:** Add React 16.3+ lifecycle methods to react/sort-comp ([c1a1224](https://github.com/zillow/javascript/commit/c1a1224))
* **config:** Disable 'react/self-closing-comp' in favor of prettier ([6466da3](https://github.com/zillow/javascript/commit/6466da3))
* **config:** Enforce 'react/forbid-foreign-prop-types', stripping propTypes in production is very common ([4a53beb](https://github.com/zillow/javascript/commit/4a53beb))
* **config:** Enforce jsx-a11y/control-has-associated-label ([9cb6334](https://github.com/zillow/javascript/commit/9cb6334))
* **peer:** Tighten prettier range to ^1.16.4 ([3d0bd89](https://github.com/zillow/javascript/commit/3d0bd89))


### Features

* **config:** Enforce 'react/jsx-fragments' non-shorthand ([c7338f1](https://github.com/zillow/javascript/commit/c7338f1))
* **config:** Update settings.react.version to 16.8 ([bf49ccc](https://github.com/zillow/javascript/commit/bf49ccc))
* **meta:** Sync latest upstream changes ([e6e463e](https://github.com/zillow/javascript/commit/e6e463e))
* **peer:** Bump lower range of peerDependencies ([a83ca95](https://github.com/zillow/javascript/commit/a83ca95))
* **plugin:** Add rules of React Hooks ([#2](https://github.com/zillow/javascript/issues/2)) ([abf05c5](https://github.com/zillow/javascript/commit/abf05c5))


### BREAKING CHANGES

* **peer:** The peer dependency on `prettier` has been tightened to encompass React Hooks-related features and bugfixes, as well as to explicitly disclaim support for _all_ versions 2.x and above.
* **peer:** Several new rules require a higher minimum version of various peer plugins.
* **config:** If you are not on React 16.8 yet, you will need to override this setting locally.





## [2.0.5](https://github.com/zillow/javascript/compare/eslint-config-zillow@2.0.4...eslint-config-zillow@2.0.5) (2019-01-14)

**Note:** Version bump only for package eslint-config-zillow





## [2.0.4](https://github.com/zillow/javascript/compare/eslint-config-zillow@2.0.3...eslint-config-zillow@2.0.4) (2019-01-14)


### Bug Fixes

* **config:** Add disabled react/jsx-fragments config ([a631ab9](https://github.com/zillow/javascript/commit/a631ab9))
* **config:** Add missing config to react/jsx-no-bind ([b1ce606](https://github.com/zillow/javascript/commit/b1ce606))





## [2.0.3](https://github.com/zillow/javascript/compare/eslint-config-zillow@2.0.2...eslint-config-zillow@2.0.3) (2018-11-08)

**Note:** Version bump only for package eslint-config-zillow





## [2.0.2](https://github.com/zillow/javascript/compare/eslint-config-zillow@2.0.1...eslint-config-zillow@2.0.2) (2018-11-08)


### Bug Fixes

* **config:** Sync eslint-plugin-jest peer range with base ([c98e781](https://github.com/zillow/javascript/commit/c98e781))





## [2.0.1](https://github.com/zillow/javascript/compare/eslint-config-zillow@2.0.0...eslint-config-zillow@2.0.1) (2018-11-08)

**Note:** Version bump only for package eslint-config-zillow





# [2.0.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0...eslint-config-zillow@2.0.0) (2018-11-06)


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
# [1.0.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0-rc.1...eslint-config-zillow@1.0.0) (2018-08-15)


### Bug Fixes

* **config:** Add jsx-a11y/label-has-associated-control rule ([7a9b73d](https://github.com/zillow/javascript/commit/7a9b73d))
* **config:** Add new methods in React 16.3+ to class-methods-use-this ([7b39fa2](https://github.com/zillow/javascript/commit/7b39fa2))
* **config:** Add react/no-unsafe rule ([5103478](https://github.com/zillow/javascript/commit/5103478))
* **config:** Set `forbid-foreign-prop-types` to "warn" ([8c677a5](https://github.com/zillow/javascript/commit/8c677a5))
* **pkg:** Correct homepage URL ([1b5e7f0](https://github.com/zillow/javascript/commit/1b5e7f0))


### Features

* Add eslint v5 support ([a52862a](https://github.com/zillow/javascript/commit/a52862a))
* **deps:** Bump eslint plugins ([c134c45](https://github.com/zillow/javascript/commit/c134c45))
* Raise floor of peer dependency ranges ([3d6bbfd](https://github.com/zillow/javascript/commit/3d6bbfd))





<a name="1.0.0-rc.1"></a>
# [1.0.0-rc.1](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0-rc.0...eslint-config-zillow@1.0.0-rc.1) (2018-06-15)


### Features

* Allow babel-eslint@8 peers ([5a01115](https://github.com/zillow/javascript/commit/5a01115))





<a name="1.0.0-rc.0"></a>
# [1.0.0-rc.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0-beta.1...eslint-config-zillow@1.0.0-rc.0) (2018-06-05)


### Features

* Sync upstream eslint plugins ([5e42578](https://github.com/zillow/javascript/commit/5e42578))
* **prettier:** Remove explicit parser from config ([ce6a740](https://github.com/zillow/javascript/commit/ce6a740))





<a name="1.0.0-beta.1"></a>
# [1.0.0-beta.1](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0-beta.0...eslint-config-zillow@1.0.0-beta.1) (2018-05-02)


### Features

* Add babel-eslint parser ([290fbea](https://github.com/zillow/javascript/commit/290fbea))





<a name="1.0.0-beta.0"></a>
# [1.0.0-beta.0](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0-alpha.5...eslint-config-zillow@1.0.0-beta.0) (2018-04-26)

**Note:** Version bump only for package eslint-config-zillow





<a name="1.0.0-alpha.5"></a>
# [1.0.0-alpha.5](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0-alpha.4...eslint-config-zillow@1.0.0-alpha.5) (2018-04-10)

**Note:** Version bump only for package eslint-config-zillow





<a name="1.0.0-alpha.4"></a>
# [1.0.0-alpha.4](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0-alpha.3...eslint-config-zillow@1.0.0-alpha.4) (2018-04-07)


### Bug Fixes

* **eslint-config-zillow:** Disable jsx-a11y/media-has-caption until upstream 'muted' fix is released ([5c65fa0](https://github.com/zillow/javascript/commit/5c65fa0))


### Features

* Add Jest subpath config/plugin ([b639c7e](https://github.com/zillow/javascript/commit/b639c7e))
* Add Mocha subpath config/plugin ([9ddfa68](https://github.com/zillow/javascript/commit/9ddfa68))





<a name="1.0.0-alpha.3"></a>
# [1.0.0-alpha.3](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0-alpha.2...eslint-config-zillow@1.0.0-alpha.3) (2018-04-06)


### Bug Fixes

* **react:** Disable react/destructuring-assignment as it is too naïve to be useful ([2b0f735](https://github.com/zillow/javascript/commit/2b0f735))
* Normalize author metadata ([bdcab0c](https://github.com/zillow/javascript/commit/bdcab0c))
* Sync eslint peer dependency to ^4.19.1 ([c5d5220](https://github.com/zillow/javascript/commit/c5d5220))


### BREAKING CHANGES

* This updates the eslint peer's lower bound one minor version higher, from 4.18.1 to 4.19.1.





<a name="1.0.0-alpha.2"></a>
# [1.0.0-alpha.2](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0-alpha.1...eslint-config-zillow@1.0.0-alpha.2) (2018-04-05)


### Features

* Replace stylistic rules with prettier ([d50a4d1](https://github.com/zillow/javascript/commit/d50a4d1))





<a name="1.0.0-alpha.1"></a>
# [1.0.0-alpha.1](https://github.com/zillow/javascript/compare/eslint-config-zillow@1.0.0-alpha.0...eslint-config-zillow@1.0.0-alpha.1) (2018-04-04)

**Note:** Version bump only for package eslint-config-zillow





<a name="1.0.0-alpha.0"></a>
# 1.0.0-alpha.0 (2018-03-28)


### Features

* Allow '.js' extension for React components ([20c2087](https://github.com/zillow/javascript/commit/20c2087))
* Indent 4 spaces ([f50dae1](https://github.com/zillow/javascript/commit/f50dae1))
* Only warn react/require-default-props ([1275799](https://github.com/zillow/javascript/commit/1275799))
* s/airbnb/zillow/gi ([b2ad2ca](https://github.com/zillow/javascript/commit/b2ad2ca))

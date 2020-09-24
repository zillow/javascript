# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.4.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@4.3.0...babel-preset-zillow@4.4.0) (2020-09-24)


### Bug Fixes

* **preset:** Do not transform lodash during tests ([a41af7d](https://github.com/zillow/javascript/commit/a41af7db49c7917f0da939c4ea79d2ce18428e73))


### Features

* **preset:** Update dependencies ([1bb9030](https://github.com/zillow/javascript/commit/1bb9030c79bc6b5f58a192acca261106339341d4))





# [4.3.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@4.2.0...babel-preset-zillow@4.3.0) (2020-04-28)


### Features

* **preset:** Pass loose:true to object-rest-spread plugin ([6413205](https://github.com/zillow/javascript/commit/6413205bb92b681477333cd6009145cdaa65c054))
* **preset:** Support nested configuration overrides ([51d9130](https://github.com/zillow/javascript/commit/51d913092105f985ea039cb5ef4544b6da4f2e3b))
* **preset:** Update dependencies ([c1a856f](https://github.com/zillow/javascript/commit/c1a856f12e3c6a4933b1bc32c1995c9069deb53e))





# [4.2.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@4.1.0...babel-preset-zillow@4.2.0) (2019-08-07)


### Bug Fixes

* **preset:** Restore customizability of `removeDataTestId` attributes ([c18c49c](https://github.com/zillow/javascript/commit/c18c49c))


### Features

* **preset:** Add `additionalExcludes` config for advanced plugin exclusion ([a04c389](https://github.com/zillow/javascript/commit/a04c389))
* **preset:** Update dependencies ([feb9349](https://github.com/zillow/javascript/commit/feb9349))





# [4.1.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@4.0.3...babel-preset-zillow@4.1.0) (2019-05-06)


### Features

* **preset:** Add `useBuiltIns` and `corejs` options, proxied directly to `@babel/preset-env` ([007eb00](https://github.com/zillow/javascript/commit/007eb00))





## [4.0.3](https://github.com/zillow/javascript/compare/babel-preset-zillow@4.0.2...babel-preset-zillow@4.0.3) (2019-03-22)


### Bug Fixes

* **preset:** Don't use full plugin names in exclude list, it's not backward-compatible ([7463ad4](https://github.com/zillow/javascript/commit/7463ad4))





## [4.0.2](https://github.com/zillow/javascript/compare/babel-preset-zillow@4.0.1...babel-preset-zillow@4.0.2) (2019-03-22)


### Bug Fixes

* **preset:** Relax babel plugin dependency ranges back to ^7.0.0 ([741ea9c](https://github.com/zillow/javascript/commit/741ea9c))





## [4.0.1](https://github.com/zillow/javascript/compare/babel-preset-zillow@4.0.0...babel-preset-zillow@4.0.1) (2019-03-21)


### Bug Fixes

* **babel-preset-zillow:** Remove browser targets that were removed in a silently-breaking minor release ([a50c64f](https://github.com/zillow/javascript/commit/a50c64f))





# [4.0.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@3.0.0...babel-preset-zillow@4.0.0) (2019-03-15)


### Features

* **babel-preset-zillow:** Omit many plugins when `targets.node` option is present ([adcfeb8](https://github.com/zillow/javascript/commit/adcfeb8))
* **babel-preset-zillow:** Remove ES3 and ES5 plugins ([ce6ce75](https://github.com/zillow/javascript/commit/ce6ce75))


### BREAKING CHANGES

* **babel-preset-zillow:** Ancient browsers such as IE 8 are no longer supported.





# [3.0.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@2.2.0...babel-preset-zillow@3.0.0) (2019-03-13)


### Features

* **babel-preset-zillow:** Opt-out of loose mode ([0cb59e7](https://github.com/zillow/javascript/commit/0cb59e7))


### BREAKING CHANGES

* **babel-preset-zillow:** Formerly opt-in, the loose mode configuration is now opt-out.





# [2.2.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@2.1.2...babel-preset-zillow@2.2.0) (2019-03-13)


### Features

* **babel-preset-zillow:** Add opt-in loose mode options ([262d55b](https://github.com/zillow/javascript/commit/262d55b))
* **babel-preset-zillow:** Add opt-out removal of JSX data-testid attributes ([8184c46](https://github.com/zillow/javascript/commit/8184c46))
* **babel-preset-zillow:** Add styled-components plugin ([29b391d](https://github.com/zillow/javascript/commit/29b391d))





## [2.1.2](https://github.com/zillow/javascript/compare/babel-preset-zillow@2.1.1...babel-preset-zillow@2.1.2) (2019-03-13)


### Bug Fixes

* **babel-preset-zillow:** Sync upstream changes ([a79abb4](https://github.com/zillow/javascript/commit/a79abb4))





## [2.1.1](https://github.com/zillow/javascript/compare/babel-preset-zillow@2.1.0...babel-preset-zillow@2.1.1) (2018-11-16)


### Bug Fixes

* **babel-preset-zillow:** Wrap `propTypes` by default with explicit opt-out ([606be92](https://github.com/zillow/javascript/commit/606be92))





# [2.1.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@2.0.0...babel-preset-zillow@2.1.0) (2018-11-12)


### Features

* **babel-preset-zillow:** Support dynamic import() with test fallback ([2a120ca](https://github.com/zillow/javascript/commit/2a120ca))





# [2.0.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@1.0.0...babel-preset-zillow@2.0.0) (2018-11-06)


### Features

* Upgrade to Babel 7 ([23bba84](https://github.com/zillow/javascript/commit/23bba84))


### BREAKING CHANGES

* Babel 6 is no longer supported.





<a name="1.0.0"></a>
# [1.0.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@1.0.0-rc.2...babel-preset-zillow@1.0.0) (2018-08-15)


### Bug Fixes

* **pkg:** Correct homepage URL ([1b5e7f0](https://github.com/zillow/javascript/commit/1b5e7f0))





<a name="1.0.0-rc.2"></a>
# [1.0.0-rc.2](https://github.com/zillow/javascript/compare/babel-preset-zillow@1.0.0-rc.0...babel-preset-zillow@1.0.0-rc.2) (2018-07-26)


### Bug Fixes

* **babel-preset-zillow:** Preserve buildTargets when no options are passed ([#1](https://github.com/zillow/javascript/issues/1)) ([8138568](https://github.com/zillow/javascript/commit/8138568))





<a name="1.0.0-rc.1"></a>
# [1.0.0-rc.1](https://github.com/zillow/javascript/compare/babel-preset-zillow@1.0.0-rc.0...babel-preset-zillow@1.0.0-rc.1) (2018-07-26)


### Bug Fixes

* **babel-preset-zillow:** Preserve buildTargets when no options are passed ([#1](https://github.com/zillow/javascript/issues/1)) ([8138568](https://github.com/zillow/javascript/commit/8138568))





<a name="1.0.0-rc.0"></a>
# [1.0.0-rc.0](https://github.com/zillow/javascript/compare/babel-preset-zillow@1.0.0-alpha.4...babel-preset-zillow@1.0.0-rc.0) (2018-06-05)

**Note:** Version bump only for package babel-preset-zillow





<a name="1.0.0-alpha.4"></a>
# [1.0.0-alpha.4](https://github.com/zillow/javascript/compare/babel-preset-zillow@1.0.0-alpha.3...babel-preset-zillow@1.0.0-alpha.4) (2018-04-10)


### Features

* **babel-preset-zillow:** Update browser targets ([41ac056](https://github.com/zillow/javascript/commit/41ac056))





<a name="1.0.0-alpha.3"></a>
# [1.0.0-alpha.3](https://github.com/zillow/javascript/compare/babel-preset-zillow@1.0.0-alpha.2...babel-preset-zillow@1.0.0-alpha.3) (2018-04-06)


### Bug Fixes

* Normalize author metadata ([bdcab0c](https://github.com/zillow/javascript/commit/bdcab0c))





<a name="1.0.0-alpha.2"></a>
# [1.0.0-alpha.2](https://github.com/zillow/javascript/compare/babel-preset-zillow@1.0.0-alpha.1...babel-preset-zillow@1.0.0-alpha.2) (2018-04-05)


### Features

* **babel-preset-zillow:** Add dev-mode transforms react-jsx-self + react-jsx-source ([7e5712a](https://github.com/zillow/javascript/commit/7e5712a))
* **babel-preset-zillow:** Enable throwIfClosureRequired in transform-es2015-block-scoping ([1d6bc02](https://github.com/zillow/javascript/commit/1d6bc02))





<a name="1.0.0-alpha.1"></a>
# 1.0.0-alpha.1 (2018-04-04)


### Features

* Add babel-preset-zillow ([88b0bb4](https://github.com/zillow/javascript/commit/88b0bb4))

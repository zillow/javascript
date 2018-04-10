# zillow-browser-shims <sup>[![Version Badge][2]][1]</sup>

> Browser and JS language shims used by Zillow

Just require/import `zillow-browser-shims`, and the environment will be shimmed.

```js
import 'zillow-browser-shims';
```

## Included shims

  - JS language shims from [zillow-js-shims](https://www.npmjs.com/package/zillow-js-shims)
  - [document.contains](https://developer.mozilla.org/en/docs/Web/API/Node/contains)
  - [classlist-polyfill](https://www.npmjs.com/package/classlist-polyfill) - Element.prototype.classList polyfill (only in browsers)
  - [raf](https://www.npmjs.com/package/raf) - requestAnimationFrame polyfill for browsers and node
  - [requestIdleCallback](https://www.npmjs.com/package/ric-shim)
  - [whatwg-fetch](https://github.com/github/fetch) - fetch polyfill (only in browsers, supports IE9+)
  - `TouchList[Symbol.iterator]` - when `Symbol` and `TouchList` are both present
  - [element-closest](https://npmjs.com/element-closest) - Element.prototype.closest polyfill (only in browsers)
  - [smoothscroll-polyfill](https://www.npmjs.com/package/smoothscroll-polyfill) - Scroll behavior specification polyfill (only in browsers)

## Only browser shims

If you only want to bring in the browser shims and not the JS language shims
(from `zillow-js-shims`), you can import `zillow-browser-shims/browser-only`. If
you choose this route, you will want to be sure that you are properly bringing
in the language shims for the browsers you support somehow. For example:

```js
import 'zillow-js-shims/target/es2015';
import 'zillow-browser-shims/browser-only';
```

[1]: https://npmjs.org/package/zillow-browser-shims
[2]: http://versionbadg.es/zillow/browser-shims.svg

'use strict';

/* eslint-disable global-require */

// document.contains polyfill
require('./document-contains');

require('whatwg-fetch');

if (typeof window !== 'undefined') {
    // Element.classList polyfill
    require('classlist-polyfill');

    // Element.closest polyfill
    require('element-closest');

    // Polyfill for smooth scrolling behavior
    require('smoothscroll-polyfill').polyfill();
}

require('raf/polyfill');

global.requestIdleCallback = require('ric-shim');

global.cancelIdleCallback = global.requestIdleCallback.cancelIdleCallback;

const hasSymbols = typeof Symbol === 'function' && Symbol.iterator;

/* globals TouchList */
if (
    hasSymbols &&
    typeof TouchList === 'function' &&
    typeof TouchList.prototype[Symbol.iterator] !== 'function'
) {
    TouchList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
}

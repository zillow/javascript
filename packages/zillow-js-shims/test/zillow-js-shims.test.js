'use strict';

/* eslint-disable global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

test('main', () => {
    expect(() => require('..')).not.toThrow();
});

describe('target', () => {
    const targetsPath = path.join(__dirname, '../target');
    const targets = fs.readdirSync(targetsPath);

    it.each(targets)('%s', target => {
        expect(() => require(path.join(targetsPath, target))).not.toThrow();
    });
});

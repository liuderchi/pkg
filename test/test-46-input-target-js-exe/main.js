#!/usr/bin/env node

'use strict';

const assert = require('assert');
const utils = require('../utils.js');

assert(!module.parent);
assert(__dirname === process.cwd());

const target = process.argv[2] || 'latest';
const input = './test-x-index.js';
const newcomers = [ 'test-x-index.js.exe' ];
const before = utils.filesBefore(newcomers);

utils.pkg.sync([
  '--target', target,
  input
]);

utils.filesAfter(before, newcomers);

﻿/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function err2str(f) {
  return function () {
    try {
      return f.apply(null, arguments);
    } catch (e) {
      return String(e);
    }
  };
}

err2str(require)('usnam-pmb');

(function readmeDemo() {
  //#u
  var pInt = require('parseint-loudfail'), eq = require('assert').strictEqual;

  eq(pInt('0',     8),     0);
  eq(pInt('644',   8),   420);
  eq(pInt('644',  10),   644);
  eq(pInt('644',  16),  1604);

  eq(pInt('06fF', 16, false),  1791);
  eq(pInt('06Zz', 16, false),  false);
  eq(pInt('',     16, false),  false);
  eq(pInt('644',   1, false),  false);

  pInt = err2str(pInt);
  eq(pInt('',   16),  'Error: Number needs at least one digit.');
  eq(pInt('',   0),   'Error: Radix must be an integer in range 2..36.');
  eq(pInt('',   1),   'Error: Radix must be an integer in range 2..36.');
  eq(pInt('',   99),  'Error: Radix must be an integer in range 2..36.');
  eq(pInt('0779',  8),  'Error: Invalid digit "9" for radix 8');
  eq(pInt('06Zz', 16),  'Error: Invalid digit "Z" for radix 16');
  eq(pInt(644,    10),  'Error: Digits must be given as a string.');

  eq(pInt('+0',    8),     0);
  eq(pInt('+644',  8),   420);
  eq(pInt('+644', 10),   644);
  eq(pInt('+644', 16),  1604);

  eq(pInt('-0',    8),     0);
  eq(pInt('-644',  8),  -420);
  eq(pInt('-644', 10),  -644);
  eq(pInt('-644', 16), -1604);

  eq((1 / pInt('+0', 8)), Number.POSITIVE_INFINITY);
  eq((1 / pInt(' 0', 8)), Number.POSITIVE_INFINITY);
  eq((1 / pInt('-0', 8)), Number.NEGATIVE_INFINITY);
  eq(pInt('\r \t\f\n 644', 8),   420);
  eq(pInt('   ', 4),  'Error: Number needs at least one digit.');
  eq(pInt('  +', 4),  'Error: Number needs at least one digit.');
  eq(pInt(' + ', 4),  'Error: Invalid digit " " for radix 4');
  eq(pInt('  -', 4),  'Error: Number needs at least one digit.');
  eq(pInt(' - ', 4),  'Error: Invalid digit " " for radix 4');
  //#r
}());









console.log("+OK usage test passed.");    //= "+OK usage test passed."

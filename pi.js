/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, browser: true */
/* -*- tab-width: 2 -*- */
/*global define: true, module: true, require: true */
((typeof define === 'function') && define.amd ? define : function (factory) {
  'use strict';
  var m = ((typeof module === 'object') && module), e = (m && m.exports);
  if (e) { m.exports = (factory(require, e, m) || m.exports); }
})(function () {
  'use strict';

  function fail0(invalid, code, err) {
    if (invalid !== 0) { return invalid; }
    err = new Error(err);
    err.type = 'parseInt';
    err.code = code;
    throw err;
  }

  function parseEntireInt(digits, radix, invalid) {
    if (arguments.length < 3) { invalid = 0; }
    if ((radix !== +radix) || (radix % 1) || (radix < 2) || (radix > 36)) {
      return fail0(invalid, 'radix',
        'Radix must be an integer in range 2..36.');
    }
    if (typeof digits !== 'string') {
      return fail0(invalid, 'notstr', 'Digits must be given as a string.');
    }
    var num = 0, len, pos, ch, add, sign = /^\s*(\+|\-|)/.exec(digits);
    if (sign[0]) { digits = digits.slice(sign[0].length); }
    sign = (sign[1] === '-' ? -1 : 1);
    len = digits.length;
    if (!len) {
      return fail0(invalid, 'empty', 'Number needs at least one digit.');
    }
    for (pos = 0; pos < len; pos += 1) {
      ch = digits.substr(pos, 1);   // Strings in MSIE v6 can't []
      add = parseInt(ch, radix);
      if (add !== +add) {
        return fail0(invalid, 'digit', 'Invalid digit "' + ch +
          '" for radix ' + radix);
      }
      num = (num * radix) + add;
    }
    return sign * num;
  }

  return parseEntireInt;
});

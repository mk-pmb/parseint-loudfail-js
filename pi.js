/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
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
    return fail0(invalid, 'radix', 'Radix must be an integer in range 2..36.');
  }
  if (typeof digits !== 'string') {
    return fail0(invalid, 'notstr', 'Digits must be given as a string.');
  }
  var num = 0, len = digits.length, pos, ch, add;
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
  return num;
}





module.exports = parseEntireInt;

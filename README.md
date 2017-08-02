
<!--#echo json="package.json" key="name" underline="=" -->
parseint-loudfail
=================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
If this parseInt() encounters an invalid digit, it fails loudly instead of
returning a partially parsed number.
<!--/#echo -->


Usage
-----

from [test.usage.js](test.usage.js):

<!--#include file="test.usage.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="21" -->
```javascript
var pInt = require('parseint-loudfail'), eq = require('assert').strictEqual;

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
```
<!--/include-->



<!--#toc stop="scan" -->



&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->

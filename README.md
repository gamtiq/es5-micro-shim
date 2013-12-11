# es5-micro-shim

Several shims for ECMAScript 5 functions:

* `Array.isArray`
* `Array.prototype.indexOf`
* `Function.prototype.bind`
* `Object.create`
* `Object.keys`

## Installation

Install component:

    npm install -g component

Then:

    component install gamtiq/es5-micro-shim

## Usage

```js
var shim = require("es5-micro-shim");
...
var test1 = Array.isArray(obj);
var test2 = shim.isArray(obj);

var child1 = Object.create(obj);
var child2 = shim.create(obj);

var keys1 = Object.keys(obj);
var keys2 = shim.keys(obj);

var boundFunc = someFunction.bind(obj);

var nIndex = someArray.indexOf(someValue1, nStartIndex);
```

## Licence

MIT

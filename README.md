# es5-micro-shim

Several shims for ECMAScript 5 functions:

* `Array.isArray`
* `Function.prototype.bind`
* `Object.create`
* `Object.keys`

## Installation

Install component:

    npm install -g component

Then:

    component install gamtiq/es5-micro-shim

## Usage

    var shim = require("es5-micro-shim");
    ...
    var test1 = Array.isArray(obj);
    var test2 = shim.isArray(obj);
    
    var child1 = Object.create(obj);
    var child2 = shim.create(obj);
    
    var keys1 = Object.keys(obj);
    var keys2 = shim.keys(obj);
    
    var boundFunc = someFunction.bind(obj);
    
## Licence

MIT

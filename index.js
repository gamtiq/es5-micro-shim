// Applies several ECMAScript 5 shims and composes exporting object that contains shim functions

require("functionbind");

module.exports = {
    "create": require("object-create-shim"),
    "isArray": require("isarray-shim"),
    "keys": require("object.keys-shim")
};

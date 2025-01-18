// Esm Strict mode
// commonjs non strict mode
const util = require("node:util");

const data = require("./data.json")
console.log(JSON.stringify(data));
require("./xyz"); // one module to another
let firstName = "Bavnit Singh";
const {calculate_multiply,calculate_sum} = require("./Calculate")
var a = 10;
var b = 20;
calculate_sum(a, b);
calculate_multiply(a, b);


console.log("Hello this is super important!!!");
console.log(__dirname);
// All the code of module is wrapped inside the function 
// IIFE (Immediately Invoke Function Expression)
// (function (module,require,.....) {
//   require(//./path)

//     function calculate_multiply(a, b) {
//   console.log(a * b);
// }
// module.exports = {calculate_multiply};
 // All code of module runs inside here is 
// }) (module.exports = {})
// (function (exports, require, module, __filename, __dirname) {
//   // All the code of module is wrapped inside the function
//  });
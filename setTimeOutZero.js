console.log("Hello World");

var a = 1078698;
var b = 20986;

// Note : This is Async Function So although here time is 0 ms then also this will run after the GEC becoz for running Libuv handles tasks.
// So this will only Execute when the GEc is out of the Call stack
// This callback will only be pushed in the call stack once the call stack is empty
setTimeout(() => {
  console.log("Call Me just now")
},0)// It runs after the call stack is empty within 0ms.
// setTimeout(() => {
//   console.log("setTimeout called after 5 seconds");
// }, 5000);
function multiplyFn(x, y) {
  const result = x * y;
  return result;
}
var c = multiplyFn(a, b);
console.log("Multiplication result is:", c);
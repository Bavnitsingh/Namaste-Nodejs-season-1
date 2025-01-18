// What is the Event Loop?
// The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that a single JavaScript thread is used by default — by offloading operations to the system kernel whenever possible.

// timers: this phase executes callbacks scheduled by setTimeout() and setInterval().

// pending callbacks: executes I/O callbacks deferred to the next loop iteration.

// idle, prepare: only used internally.

// poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.

// check: setImmediate() callbacks are invoked here.

// close callbacks: some close callbacks, e.g. socket.on('close', ...).
const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the file.");

// a=100
// Last line of the file.
// Timer expired
// setImmediate
// File Reading CB

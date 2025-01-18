const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Async HTTP request
const req = https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
  res.on("data", (chunk) => {}); // Consume the data
  res.on("end", () => {
    console.log("HTTP response processing completed.");
    req.destroy(); // Close the socket
  });
});

req.on("error", (err) => {
  console.error("HTTP request error:", err);
});
req.end();

// Non-blocking timer
setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// Async file reading
fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File Data:", data);
});

// Simple multiplication
function multiplyFn(x, y) {
  const result = x * y;
  return result;
}
var c = multiplyFn(a, b);
console.log("Multiplication result is:", c);

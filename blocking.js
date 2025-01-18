const crypto = require("crypto");

console.log("Hello World");


//Sync function will block the main thread - Don't use it
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First Key is Generated");
//pbkdf2 - Password Based Key Derivation function 2
//sha512 - Secure Hash Algorithm 512 bit
//Async function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Second key is generated");
})

function multiply(a, b) {
  return a * b;
}
var c = multiply(12223443334, 44393905030);
console.log(c);
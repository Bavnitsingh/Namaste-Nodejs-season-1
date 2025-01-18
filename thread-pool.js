const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 10;
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1 - cryptoPBKDF2 done", Date.now() - start);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("8 - cryptoPBKDF2 done", Date.now() - start);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("7 - cryptoPBKDF2 done", Date.now() - start);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("6 - cryptoPBKDF2 done", Date.now() - start);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("2 - cryptoPBKDF2  done", Date.now() - start);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("3 - cryptoPBKDF2  done", Date.now() - start);
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("4 - cryptoPBKDF2  done", Date.now() - start);
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("5 - cryptoPBKDF2  done", Date.now() - start);
});

// fs.readFile("./file.txt", "utf8", () => {
//   console.log("File Reading CB");
// });

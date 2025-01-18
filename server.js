const http = require("node:http");// node:http ir http both are same.
const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data available");
  }

  res.end("Hello, world!");
});// creating server
server.listen(7777);// server is ready to listening the incoming requests.
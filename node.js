// const http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Hello beauty!");
//     res.end();
//   })
//   .listen(8080);

const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Bottom to TOP!!");
    res.end();
  })
  .listen(8080);

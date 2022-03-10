const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello World");
    res.end();
  })
  .listen( 8080 );

  console.log('Listening in 8080 port');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("<div>Hello World!</div>")
})

server.listen(3000, 'localhost', () => {
  console.log("Listening on port 3000");
})


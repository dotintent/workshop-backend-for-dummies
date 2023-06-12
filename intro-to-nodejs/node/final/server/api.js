const http = require('http');

const cars = {}; // local database

// Recreated our ExpressJS API
const server = http.createServer((req, res) => {
  const { method, url } = req;

  // GET route
  if (method === "GET" && url === "/cars") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ cars }));
  }
  
  // POST route
  else if (method === "POST" && url === "/cars") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const newCar = JSON.parse(data).car;

      const carId = Date.now();
      cars[carId] = newCar;

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: `Car with id ${carId} created!` }));
    });
  } 

  // DELETE route
  else if (method === "DELETE" && url === "/cars") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const carId = JSON.parse(data).id;

      delete cars[carId];

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: `Car with id ${carId} deleted!` }));
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server on http://localhost:8000");
});

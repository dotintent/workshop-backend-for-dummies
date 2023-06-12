const express = require('express');

const cars = {}; // our local database

// Initialize express app
const app = express();

console.log("Starting the express app...") // this is a middleware

// Make sure that the request body is parsed as JSON
app.use(express.json()); // this is a middleware

// GET /cars route handler
app.get("/cars", (req, res) => {
  res.json({ cars });
});

// POST /cars route handler function
app.post("/cars", (req, res) => {
  const newCar = req.body.car;

  const carId = Date.now();
  cars[carId] = newCar;

  res.json({ message: `Car with id ${carId} created!` });
});

// DELETE /cars route handler function
app.delete("/cars", (req, res) => {
  const carId = req.body.id;

  delete cars[carId];

  res.json({ message: `Car with id ${carId} deleted!` });
});

// Create and start a server for our API on a defined port
app.listen(8000, () => {
  console.log("Server on http://localhost:8000");
});

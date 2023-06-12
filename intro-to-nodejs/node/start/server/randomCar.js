const http = require('http');

// @CHALLENGE: create a node server which will return a random car name HTML as the response

const host = "localhost";
const port = 4000;

const sportsCars = [
  "Ferrari 488 GTB",
  "Porsche 911 GT3",
  "Lamborghini Huracan Evo",
  "Audi R8",
  "Chevrolet Corvette",
  "BMW M3",
  "Fiat 126",
];

const getRandomCarHtml = () => {
  const randomIndex = Math.floor(Math.random() * sportsCars.length);
  const randomCar = sportsCars[randomIndex];
  const carHtml = ""; // @TODO: CHANGE THIS LINE SO THAT randomCar IS DISPLAYED IN A DIV (with some change inline CSS style eg. font-size to 64px)

  // hint: remember that HTML can be returned in the response AS STRING!

  return carHtml;
};


// @TODO: use 'http' module and 'createServer' method to create a server which will end the response with "carHtml" from above

// @TODO: use server.listen() to start listening on the (above declared) "host" and "port"
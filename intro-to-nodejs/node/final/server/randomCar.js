const http = require('http');

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
  const carHtml = `<div style="font-size: 64px;">${randomCar}</div>`;

  return carHtml;
};

const server = http.createServer((request, response) => {
  const html = getRandomCarHtml();
  response.end(html);
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

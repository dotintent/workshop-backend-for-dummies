
const term = require('terminal-kit').terminal;
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]};:\'"|,.<>?/~`';

function getRandomCharacter() {
  return characters[Math.floor(Math.random() * characters.length)];
}

function animateMatrix() {
  term.clear();
  term.hideCursor();

  const width = term.width;
  const height = term.height;

  const columns = [];

  for (let x = 0; x < width; x++) {
    columns[x] = Math.random() * height;
  }

  setInterval(() => {
    for (let x = 0; x < width; x++) {
      term.moveTo(x, columns[x]);
      term('\x1b[32m' + getRandomCharacter());
      columns[x]++;

      if (columns[x] >= height) {
        columns[x] = 0;
      }

      term.moveTo(x, columns[x] - height);
      term('\x1b[37m' + getRandomCharacter());
    }
  }, 25);
}

animateMatrix();

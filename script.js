// JavaScript
// ETCH-A-SKETCH

const BODY = document.querySelector('body');
const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');
const SQUARE = document.createElement('div');
SQUARE.classList.add('grid');
for (let i = 0; i < 256; i++) {
  CONTAINER.appendChild(SQUARE.cloneNode());
}
BODY.appendChild(CONTAINER);
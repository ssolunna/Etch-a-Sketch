// JavaScript
// ETCH-A-SKETCH

const BODY = document.querySelector('body');
const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');
const SQUARE = document.createElement('div');
SQUARE.classList.add('square');
for (let i = 0; i < 256; i++) {
  CONTAINER.appendChild(SQUARE.cloneNode());
}
BODY.appendChild(CONTAINER);
const GRID = document.querySelectorAll('.square');
GRID.forEach(square => {
  square.onmouseenter = () => square.classList.add('passed-over');
});
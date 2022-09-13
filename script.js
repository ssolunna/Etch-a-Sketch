// JavaScript
// ETCH-A-SKETCH

const BODY = document.querySelector('body');
const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');
const SQUARE = document.createElement('div');
SQUARE.classList.add('square');
let squaresSize = 0;

createGrid(16);

function createGrid(squaresPerSide) {
  let grid = squaresPerSide * squaresPerSide;
  squaresSize = 100 / squaresPerSide;
  removeOldGrid();
  addSquares(grid);
}

function removeOldGrid() {
  const GRID = document.querySelectorAll('.square');
  GRID.forEach(square => square.remove());
}

function addSquares(grid) {
  for (let i = 0; i < grid; i++) {
    CONTAINER.appendChild(SQUARE.cloneNode());
  }
  BODY.appendChild(CONTAINER);
  const GRID = document.querySelectorAll('.square');
  GRID.forEach(square => {
    square.style.cssText = `flex: 1 0 ${squaresSize}%;`;
    square.onmouseenter = () => square.classList.add('passed-over');
  });
}

const NEW_GRID_BTN = document.createElement('button');
NEW_GRID_BTN.textContent = 'New Grid';
CONTAINER.before(NEW_GRID_BTN);
NEW_GRID_BTN.onclick = () => {
  let squaresPerSide = prompt('Number of squares per side for the new grid:', '16');
  createGrid(squaresPerSide);
}
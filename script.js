// JavaScript
// ETCH-A-SKETCH

const BODY = document.querySelector('body');
const TITLE = document.createElement('h1');
TITLE.classList.add('title');
TITLE.textContent = 'Etch-A-Sketch';
BODY.appendChild(TITLE);
const CONTAINER = document.createElement('div');
CONTAINER.classList.add('container');
const SQUARE = document.createElement('div');
SQUARE.classList.add('square');
let squaresPerSide = 16;
let squaresSize = 0;

createGrid(squaresPerSide);

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

const BUTTONS_CONTAINER = document.createElement('div');
BUTTONS_CONTAINER.classList.add('buttons-container');
CONTAINER.before(BUTTONS_CONTAINER);

const NEW_GRID_BTN = document.createElement('button');
NEW_GRID_BTN.textContent = 'New Grid';
BUTTONS_CONTAINER.appendChild(NEW_GRID_BTN);
NEW_GRID_BTN.onclick = () => {
  squaresPerSide = Math.floor(Math.abs(prompt('Number of squares per side for the new grid (min 2, max 100):')));
  if (squaresPerSide > 1 && squaresPerSide < 101) createGrid(squaresPerSide);
};

const CLEAR_BTN = document.createElement('button');
CLEAR_BTN.textContent = 'Clear';
BUTTONS_CONTAINER.appendChild(CLEAR_BTN);
CLEAR_BTN.onclick = () => createGrid(squaresPerSide);

const DARK_MODE_BTN = document.createElement('button');
DARK_MODE_BTN.textContent = 'Dark Mode';
DARK_MODE_BTN.setAttribute('id', 'dark-mode');
BUTTONS_CONTAINER.appendChild(DARK_MODE_BTN);
DARK_MODE_BTN.onclick = () => toggleDarkMode();

function toggleDarkMode() {
  if (BODY.getAttribute('class') === 'dark-mode') {
    DARK_MODE_BTN.textContent = 'Dark Mode'
    document.querySelectorAll('body, body>*, body>*>*').forEach(element => {
      element.classList.remove('dark-mode');
    });
  } else {
    DARK_MODE_BTN.textContent = 'Light Mode'
    document.querySelectorAll('body, body>*, body>*>*').forEach(element => {
      element.classList.add('dark-mode');
    });
  }
}
const container = document.querySelector('.container');

const numSquaresPerSide = 16;
const numSquares = numSquaresPerSide * numSquaresPerSide;

for (let i = 0; i < numSquares; ++i) {
  const square = document.createElement('div');
  square.textContent = 'square';
  square.classList.add('square');
  container.appendChild(square);
}

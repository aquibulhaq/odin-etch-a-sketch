const container = document.querySelector('.container');

const numSquaresPerSide = 16;
const numSquares = numSquaresPerSide * numSquaresPerSide;
const squareWidth = container.offsetWidth / numSquaresPerSide;

for (let i = 0; i < numSquares; ++i) {
  const square = document.createElement('div');
  square.textContent = 'square';
  square.classList.add('square');
  square.style.width = square.style.height = `${squareWidth}px`;
  container.appendChild(square);
}

function blacken(event) {
  if (event.target.classList.contains('square'))
    event.target.classList.add('black-bg');
}

const container = document.querySelector('.container');
container.addEventListener('mouseover', blacken);

const numSquaresPerSide = 16;
const numSquares = numSquaresPerSide * numSquaresPerSide;
const squareWidth = container.offsetWidth / numSquaresPerSide;

for (let i = 0; i < numSquares; ++i) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = square.style.height = `${squareWidth}px`;
  container.appendChild(square);
}

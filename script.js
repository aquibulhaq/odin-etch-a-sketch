function blacken(event) {
  if (event.target.classList.contains('square'))
    event.target.classList.add('black-bg');
}

function createNewGrid(numSquaresPerSide) {
  const numSquares = numSquaresPerSide * numSquaresPerSide;
  const squareWidth = container.offsetWidth / numSquaresPerSide;
  const squares = [];

  for (let i = 0; i < numSquares; ++i) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = square.style.height = `${squareWidth}px`;
    squares.push(square);
  }

  container.replaceChildren(...squares);
}

const container = document.querySelector('.container');
container.addEventListener('mouseover', blacken);

createNewGrid(16);

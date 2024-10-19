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

const button = document.querySelector('button');
button.addEventListener('click', () => {
  let numSquaresPerSide;

  do {
    const str = prompt('Enter the number of squares per side (1–100): ', 16);
    if (!str)
      return;

    numSquaresPerSide = Number(str);
  } while (isNaN(numSquaresPerSide) || !Number.isInteger(numSquaresPerSide) || numSquaresPerSide < 1 || numSquaresPerSide > 100);

  createNewGrid(numSquaresPerSide);
})

const container = document.querySelector('.container');
container.addEventListener('mouseover', blacken);

createNewGrid(16);

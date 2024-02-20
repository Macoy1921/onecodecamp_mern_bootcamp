let currentColor = '#1abc9c'; // Initial color

function changeColor(newColor) {
  currentColor = newColor;
}

function getRandomColorClass() {
  return currentColor;
}

function getRandomPosition(size) {
  const maxX = window.innerWidth - size;
  const maxY = window.innerHeight - size;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  return { x, y };
}

function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.backgroundColor = getRandomColorClass();

  const size = Math.floor(Math.random() * 100) + 50;
  const { x, y } = getRandomPosition(size);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  document.getElementById('circles-container').appendChild(circle);

  // Triggering the animation after a delay
  setTimeout(() => {
    circle.style.opacity = 0;
  }, 100);
}

document.addEventListener('click', createCircle);

// Color Palette Logic
const colorPalette = document.createElement('div');
colorPalette.classList.add('color-palette');

const colors = ['#1abc9c', '#3498db', '#e74c3c', '#f39c12', '#9b59b6'];

colors.forEach((color) => {
  const colorDiv = document.createElement('div');
  colorDiv.classList.add('color');
  colorDiv.style.backgroundColor = color;
  colorDiv.addEventListener('click', () => changeColor(color));
  colorPalette.appendChild(colorDiv);
});

document.body.appendChild(colorPalette);

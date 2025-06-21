const container = document.querySelector('.container');
const cubes = document.querySelectorAll('.cube');
let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach(cube => {
  cube.addEventListener('mousedown', (e) => {
    selectedCube = cube;
    const rect = cube.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    cube.style.cursor = 'grabbing';
  });
});

document.addEventListener('mousemove', (e) => {
  if (!selectedCube) return;

  const containerRect = container.getBoundingClientRect();
  const cubeRect = selectedCube.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Boundary constraints
  x = Math.max(0, Math.min(container.clientWidth - selectedCube.offsetWidth, x));
  y = Math.max(0, Math.min(container.clientHeight - selectedCube.offsetHeight, y));

  selectedCube.style.left = x + 'px';
  selectedCube.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
  if (selectedCube) {
    selectedCube.style.cursor = 'grab';
    selectedCube = null;
  }
});

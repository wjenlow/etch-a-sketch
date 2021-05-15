const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
let number = 16;

window.addEventListener("load", setDefaultGrid);

function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.id = "grid-element";
    gridElement.classList = "grid-element";
    gridContainer.appendChild(gridElement);
  }
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

resetButton.addEventListener("click", () => {
  validateNumber();
  clearGrid();
  setGridSize(number);
  fillGrid(number);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  gridContainer.addEventListener("mouseover", function(event) {
    let target = event.target;
    target.style.background = getRandomColor();
    console.log(getRandomColor);
}
);

function validateNumber() {
    number = prompt("Enter number of squares (max 64): ", 16);
    while (isNaN(number)) {
        number = prompt("Invalid value. Please enter a number (max 64): ", 16);
    }
    return number;
}
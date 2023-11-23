const gridContainer = document.querySelector(".grid-container");
const btn = document.querySelector('#newgrid-button')

function createGrid(rows, cols) {
    const containerSize = 720; // Specify container size (720px)
    const itemSize = containerSize / Math.max(rows, cols); // Calculate item size

    for (let i = 0; i < rows * cols; i++) {

        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.width = itemSize + 'px';
        gridItem.style.height = itemSize + 'px';
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener('mouseover', ()  => {
            gridItem.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
    }
}


createGrid(16, 16);


btn.addEventListener('click', () => {
    gridSize = prompt("Enter new grid size between 2 and 100: ");
    gridSize = parseInt(gridSize);
    if (gridSize < 2 || gridSize > 100) { alert("You've entered a number that is not in the specified range!"); return;}
    gridContainer.innerHTML = '';

    createGrid(gridSize, gridSize);
  });
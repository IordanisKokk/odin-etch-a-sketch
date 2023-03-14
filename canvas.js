const DEFAULT_SIZE = 50;

const slider = document.querySelector(".slider");
const output = document.querySelector(".value");

const container = document.querySelector('.container');
const grid = document.createElement('div');
const body = document.body;

const canvas = document.querySelector('#draw');
let context = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
// function createGrid(size) {
//     grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
//     grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

//     for (let i = 0; i < size * size; i++) {
//       const gridElement = document.createElement('div')
//       gridElement.classList.add('pixel')
//     //   gridElement.addEventListener('mouseover', changeColor)
//     //   gridElement.addEventListener('mousedown', changeColor)
//       grid.appendChild(gridElement)
//     }
//     container.appendChild(grid);
//   }



context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 25;

let isDrawing = false;

let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return;
    console.log(e)
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => { isDrawing = false });
canvas.addEventListener('mouseout', () => { isDrawing = false });



slider.oninput = function () {
    output.textContent = this.value;
    canvas.width = this.value;
    canvas.height = this.value;

    context = canvas.getContext('2d');

    context.strokeStyle = '#BADA55';
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = 25;

}


// window.onload = () => {
//     createGrid(DEFAULT_SIZE)
//   }

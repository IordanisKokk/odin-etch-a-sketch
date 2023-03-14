const DEFAULT_SIZE = 50;

const slider = document.querySelector(".slider");
const output = document.querySelector(".value");

const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.classList.add('grid')
const body = document.body;
const colorpicker = document.querySelector('#colorpicker');
let color = colorpicker.value;
let isDrawing = false;

const eraseButton = document.querySelector('.eraseButton');
eraseButton.addEventListener('click', eraseCanvas);

function drawCanvas(size){
    grid.replaceChildren();
    for(let i = 0; i <size; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < size; j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
            pixel.addEventListener('mouseover', paintPixel)
            pixel.addEventListener('click', paintPixel)
        }
        grid.appendChild(row)
        grid.addEventListener('mousedown', () => {
            isDrawing = true;
        }, {
            capture: true
        });
        grid.addEventListener('mouseup', () => {
            isDrawing = false;
        }, {
            capture: true
        });
        container.appendChild(grid)
    }

}

function eraseCanvas(){
    drawCanvas(slider.value);
}

function paintPixel(){
    if(!isDrawing) return;
    // console.log(this);
    this.style.backgroundColor = color;
}

colorpicker.oninput = function () {
    color = this.value;
}

slider.oninput = function () {
    output.textContent = this.value;
    drawCanvas(this.value);
}




window.onload = () => {
    drawCanvas(DEFAULT_SIZE)
  }

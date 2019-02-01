let bgColor = {};
let recColor = {};
let canvasWidth = 300;
let canvasHeight = 300;
let startX = canvasWidth * 0.01;
let startY = canvasHeight * 0.95;
let rectWidth = 60;
let rectHeight = -24;
let rowCount = 5;
let seed = 0;
let colorArray = []

// function attendu par p5.js
function setup() {
    bgColor = color(150);
    recColor = color(200, 100, 100);
    seed = random(3000);
    colorArray = [color(201, 26, 9), color(9, 26, 201), color(201, 201, 201)];
    createCanvas(canvasWidth, canvasHeight);
    background(bgColor);
    console.log(Math.round(colorArray.length));
}

// function de p5.js permettant de faire une loop (appele 60 fois par seconde)
function draw() {
    randomSeed(seed);
    background(bgColor);
    stroke(0);
    let currentColor = 0;
    
    for (let i = 0; i < rowCount; i++) {
        let x = startX;
        let y = startY + i * rectHeight;
        while (x <= canvasWidth - rectWidth) {
                currentColor = Math.round(random(colorArray.length))%colorArray.length;
                fill(colorArray[currentColor]);
                rect(x, y, rectWidth, rectHeight)
                x += rectWidth; 
        }
        
    }
    
}


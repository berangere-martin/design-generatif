let bgColor = {};
let recColor = {};
let canvasWidth = 400;
let canvasHeight = 400;
let startX = 0;
let startY = 0;
let rectWidth = 50;
let rectHeight = 50;
let rowCount = 6;
let columnCount = 6;
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
    noStroke();
    let currentColor = 0;
    
    for (let i = 0; i < rowCount; i++) {
        for (let j=0; j < columnCount; j++) {

            // placement des carrés
            let x = startX + j * rectWidth;
            let y = startY + i * rectHeight;
            
            //sélection de la couleur
            currentColor = Math.round(random(colorArray.length))%colorArray.length;
            fill(colorArray[currentColor]);
            rect(x, y, rectWidth, rectHeight)
            x += rectWidth; 
            
        }
        
        
    }

    // lines settings
    let nbLine = rowCount;
    stroke(0);
    strokeWeight(3);
    strokeCap(SQUARE);

    // lignes verticales
    for (var j = 1; j < nbLine; j++) {
        let lineStart = floor(random(nbLine));
        let lineHeight = floor(random(lineStart, nbLine));
        
        // draw vertical lines
        line(startX + rectWidth * j, startY + lineStart*rectHeight, startX + rectWidth * j, startY + lineHeight * rectHeight);
    }

    // lignes horizontales
    for (let k = 0; k < nbLine; k++) {
        let lineStart = floor(random(nbLine));
        let lineWidth = floor(random(lineStart, nbLine));
        
        // draw horizontales lines
        line(startX + lineStart * rectWidth, startY + rectHeight * k, startX + lineWidth * rectWidth, startY + rectHeight * k);
    }
    
}

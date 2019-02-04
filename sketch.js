let bgColor = {};
let whiteColor = {};
let whiteApparition = 4;
let canvasWidth = 400;
let canvasHeight = 400;
let startX = 0;
let startY = 0;
let rectWidth = 50;
let rectHeight = 50;
let rowCount = 6;
let columnCount = 6;
let seed = 0;
let colorArray = [];
let webImage;
let strokeW = 3;

// Function pour precharger l'image
function preload() {
    webImage = loadImage("https://i.ibb.co/1RkJ9Zv/cercle.png");
}

// function attendu par p5.js
function setup() {
    bgColor = color(150);
    seed = random(1500);
    whiteColor = color(255, 255, 255);
    let colorArrayPalette1 = [color(177, 14, 35), color(235, 109, 6), color(243, 182, 0), color(177, 14, 35), color(235, 109, 6)];
    let colorArrayPalette2 = [color(2, 49, 91), color(0, 84, 151), color(94, 154, 62), color(230, 230, 230)];
    let colorArrayPalette3 = [color(0, 0, 0), color(30, 25, 55), color(112, 17, 45), color(208, 178, 40)];
    let colorArrayPalette4 = [color(0, 0, 0), color(94, 154, 62), color(106, 109, 104), color(230, 230, 230)];
    colorArray = [colorArrayPalette1, colorArrayPalette2, colorArrayPalette3, colorArrayPalette4];
    
    for (let i = 0; i < colorArray.length; i++) {
        for (let j = 0; j < whiteApparition; j++) {
            colorArray[i].push(whiteColor);            
        }
    }

    createCanvas(canvasWidth, canvasHeight);
    background(bgColor);
    console.log('longueur du tableau colorArray ' + Math.round(colorArray.length));
}

// function de p5.js permettant de faire une loop (appele 60 fois par seconde)
function draw() {
    randomSeed(seed);
    background(bgColor);
    noStroke();

    //choix de la palette
    let currentArray = Math.round(random(colorArray.length))%colorArray.length;
    
    for (let i = 0; i < rowCount; i++) {
        for (let j=0; j < columnCount; j++) {

            // placement des carrés
            let x = startX + j * rectWidth;
            let y = startY + i * rectHeight;
            
            //sélection de la couleur
            let currentPalette = Math.round(random(colorArray[currentArray].length))%colorArray[currentArray].length;
            let currentColor = colorArray[currentArray][currentPalette];
            fill(currentColor);
            rect(x, y, rectWidth, rectHeight)
            x += rectWidth; 
            
        }
        
        
    }

    // lines settings
    let nbLine = rowCount;
    stroke(0);
    strokeWeight(strokeW);
    strokeCap(SQUARE);

    // lignes verticales
    for (var j = 1; j < nbLine; j++) {
        let lineStart = floor(random(nbLine));
        let lineHeight = floor(random(lineStart, nbLine));
        
        // draw vertical lines
        line(startX + rectWidth * j, startY + lineStart*rectHeight, startX + rectWidth * j, startY + lineHeight * rectHeight);
    }

    // lignes horizontales
    for (let k = 1; k < nbLine; k++) {
        let lineStart = floor(random(nbLine));
        let lineWidth = floor(random(lineStart, nbLine));
        
        // draw horizontales lines
        line(startX + lineStart * rectWidth, startY + rectHeight * k, startX + lineWidth * rectWidth, startY + rectHeight * k);
    }
    
    image(webImage, 0, 0, webImage.width * 1.67, webImage.height * 1.67);
    
}

function keyTyped() {
    if (key == 'r') {
        document.location.reload;
        console.log('r');
        
    }
    if (key == 's') {
        saveCanvas(`cercle_${year()}`, 'jpg');
    }
}
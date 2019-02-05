let timeStamp = 5345345235;
let bgColor = {};
let whiteColor = {};
let whiteApparition = 40; // Sur 100
let canvasWidth = 596;
let canvasHeight = 842;
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
let cercleR = 5;

let colorSeed = 0;
let handleSeed = 0;
let stickSeed = 0;
let currentArray;

// Function pour precharger l'image
function preload() {
    webImage = loadImage("https://i.ibb.co/1RkJ9Zv/cercle.png");
}

function setPalletteColor() {
    randomSeed(timeStamp);
    currentArray = Math.round(random(colorArray.length))%colorArray.length;
}

function setcolorSeed() {
    randomSeed(timeStamp);
    colorSeed = random(3000)
}

function setstickSeed() {
    randomSeed(timeStamp);
    stickSeed = random(3000)
}

function sethandleSeed() {
    randomSeed(timeStamp);
    handleSeed = random(3000)
}

function initialisePaletteColor() {
    // Set all palette color
    colorArray = [
        [color(2.0, 49.0, 91.0), color(243.0, 182.0, 0.0), color(235.0, 109.0, 6.0)],
        [color(2.0, 49.0, 91.0), color(243.0, 182.0, 0.0), color(177.0, 14.0, 35.0)],
        [color(2.0, 49.0, 91.0), color(243.0, 182.0, 0.0), color(177.0, 14.0, 35.0)],
        [color(2.0, 49.0, 91.0), color(243.0, 182.0, 0.0), color(83.0, 46.0, 30.0)],
        [color(0.0, 84.0, 151.0), color(2.0, 49.0, 91.0), color(243.0, 182.0, 0.0)],
        [color(0.0, 84.0, 151.0), color(2.0, 49.0, 91.0), color(235.0, 109.0, 6.0)],
        [color(0.0, 84.0, 151.0), color(2.0, 49.0, 91.0), color(185.0, 197.0, 202.0)],
        [color(177.0, 14.0, 35.0), color(235.0, 109.0, 6.0), color(211.0, 215.0, 209.0)],
        [color(235.0, 109.0, 6.0), color(243.0, 182.0, 0.0), color(211.0, 215.0, 209.0)],
        [color(177.0, 14.0, 35.0), color(243.0, 182.0, 0.0), color(211.0, 215.0, 209.0)],
        [color(15.0, 156.0, 45.0), color(243.0, 182.0, 0.0), color(177.0, 14.0, 35.0)],
        [color(15.0, 156.0, 45.0), color(2.0, 49.0, 91.0), color(243.0, 182.0, 0.0)],
        [color(15.0, 156.0, 45.0), color(190.0, 160.0, 120.0), color(243.0, 182.0, 0.0)],
        [color(177.0, 14.0, 35.0), color(235.0, 109.0, 6.0), color(243.0, 182.0, 0.0), color(2.0, 49.0, 91.0)],
        [color(177.0, 14.0, 35.0), color(235.0, 109.0, 6.0), color(243.0, 182.0, 0.0), color(190.0, 160.0, 120.0)],
        [color(177.0, 14.0, 35.0), color(235.0, 109.0, 6.0), color(243.0, 182.0, 0.0), color(211.0, 215.0, 209.0)],
    ];
}

// function attendu par p5.js
function setup() {
    bgColor = color(150);
    whiteColor = color(255, 255, 255);

    setcolorSeed();
    sethandleSeed();
    setstickSeed();

    initialisePaletteColor();
    
    setPalletteColor();

    createCanvas(canvasWidth, canvasHeight);
    background(bgColor);
    console.log('longueur du tableau colorArray ' + Math.round(colorArray.length));
}

// function de p5.js permettant de faire une loop (appele 60 fois par seconde)
function draw() {
    background(bgColor);
    noStroke();

    drawSquare();
    drawHandle();
    drawLine();

    image(webImage, 0, 0, webImage.width * 1.67, webImage.height * 1.67);
}

function drawSquare() {
    randomSeed(colorSeed);
    //choix de la palette

    for (let i = 0; i < rowCount; i++) {
        for (let j=0; j < columnCount; j++) {
            // placement des carrés
            let x = startX + j * rectWidth;
            let y = startY + i * rectHeight;

            //sélection de la couleur
            let currentPalette = Math.round(random(colorArray[currentArray].length))%colorArray[currentArray].length;
            let currentColor = colorArray[currentArray][currentPalette];
            let allowWhite = Math.round(random(100));

            if (allowWhite <= whiteApparition) {
                fill(whiteColor);
                rect(x, y, rectWidth, rectHeight);
            } else {
                fill(currentColor);
                rect(x, y, rectWidth, rectHeight);
            }

            x += rectWidth; 
        }
    }
}

function drawHandle() {
    randomSeed(handleSeed);
    for (let i = 0; i < rowCount; i++) {
        let y = startY + i * rectHeight;

        for (let j=0; j < columnCount; j++) {
            let x = startX + j * rectWidth;
            // Draw handle
            let printCercle = Math.round(random(4));
            fill(whiteColor);
            
            if (printCercle === 1) {
                ellipse(x + rectWidth*0.5, y + 2*cercleR, cercleR, cercleR); // top
            }
            else if (printCercle === 2) {
                // ellipse(x - rectWidth*0.5, y + rectHeight - 2*cercleR, cercleR, cercleR); // bot -- BUG
            }
            else if (printCercle === 3) {
                ellipse(x + cercleR*2, y + 0.5*rectWidth, cercleR, cercleR); // left
            }
            else if (printCercle === 4) {
                ellipse(x + rectWidth - cercleR*2, y + 0.5*rectWidth, cercleR, cercleR); // right
            }
        }
    }
}

function drawLine() {
    let nbLine = rowCount;
    stroke(0);
    strokeWeight(strokeW);
    strokeCap(SQUARE);
    randomSeed(stickSeed);

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
}

function keyTyped() {
    if (key == 'r') {
        timeStamp.value = new Date().valueOf();
        setPalletteColor();
        setstickSeed();
        setcolorSeed();
        sethandleSeed();
    }
    if (key == 's') {
        saveCanvas(`cercle_${year()}`, 'jpg');
    }
}
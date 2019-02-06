let timeStamp = new Date().valueOf();
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
let strokeW = 4;
let cercleR = 5;

let colorSeed = 0;
let handleSeed = 0;
let stickSeed = 0;
let currentArray;

let logo;
let currentAffiche = 1;

// Function pour precharger l'image
function preload() {
    webImage = loadImage("https://i.ibb.co/1RkJ9Zv/cercle.png");
    logo = loadImage("https://i.imgsafe.org/9c/9cf8ba5df4.png");
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

    let canvas = createCanvas(canvasWidth, canvasHeight);

    canvas.parent('sketch-holder');
    background(bgColor);

    console.log('longueur du tableau colorArray ' + Math.round(colorArray.length));
}

// function de p5.js permettant de faire une loop (appele 60 fois par seconde)
function draw() {
    angleMode(DEGREES);

    background(whiteColor);

    switch (currentAffiche) {
        case 1:
            drawAffiche1()
            break;
    
        case 2:
            drawAffiche2()
            break;
    }
    drawAffiche2();
}

function drawAffiche2() {
    image(logo, 515, 150);
}

function drawAffiche1() {
    for (let i = 0; i < 4; i++) {
        let y = 400 + 320 * i;
        drawLogo(65, y, 0.57, i);
        drawLogo(385, y, 0.57, i);
        drawLogo(705, y, 0.57, i);
    }

    let currentDate = new Date(timeStamp * 1000);
    let dateUsual = currentDate.getDay() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let timeStampLength = width-toString(timeStamp).length-20;
    // console.log(toString(timeStamp).length + 20);    
    
    drawLogo(4800, 1500, 0.1, 0);

    stroke(0);
    strokeWeight(5)
    line(20, 200, width-20, 200);

    noStroke();
    textSize(105);
    text('USM', 20, 180);

    textSize(20);
    text('Durability', 250, 140);
    text('Modularity', 250, 160);
    text('Swiss Quality', 250, 180);

    textSize(10);
    text(dateUsual, 20, 20);
    text(timeStamp, width - 90, 20);

    image(logo, 515, 150);
}

function drawLogo (start_X, start_Y, size, rotated) {
    push(); // Start a new drawing state
    noStroke();
    
    // Mirror effect
    if (rotated % 2 == 1) {
        translate(width/2, height/2);
        rotate(180);
        translate(-width*0.5182, -height*1.113);
    }
    scale(size);
    drawSquare(start_X, start_Y);
    drawHandle(start_X, start_Y);
    drawLine(start_X, start_Y);

    image(webImage, start_X-1, start_Y-1, webImage.width * 1.675, webImage.height * 1.675);
    pop(); // Restore original state
}

function drawSquare(start_X, start_Y) {
    randomSeed(colorSeed);
    //choix de la palette

    for (let i = 0; i < rowCount; i++) {
        for (let j=0; j < columnCount; j++) {
            // placement des carrés
            let x = start_X + j * rectWidth;
            let y = start_Y + i * rectHeight;

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

function drawHandle(start_X, start_Y) {
    randomSeed(handleSeed);
    for (let i = 0; i < rowCount; i++) {
        for (let j=0; j < columnCount; j++) {
            let x = start_X + j * rectWidth;
            let y = start_Y + i * rectHeight;

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

function drawLine(start_X, start_Y) {
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
        line(start_X + rectWidth * j, start_Y + lineStart*rectHeight, start_X + rectWidth * j, start_Y + lineHeight * rectHeight);
    }

    // lignes horizontales
    for (let k = 1; k < nbLine; k++) {
        let lineStart = floor(random(nbLine));
        let lineWidth = floor(random(lineStart, nbLine));
        
        // draw horizontales lines
        line(start_X + lineStart * rectWidth, start_Y + rectHeight * k, start_X + lineWidth * rectWidth, start_Y + rectHeight * k);
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
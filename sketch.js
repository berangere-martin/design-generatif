let timeStamp = new Date().valueOf();
let bgColor = {};
let whiteColor = {};
let whiteApparition = 40; // Sur 100
let canvasWidth = 596; // 300+296
let canvasHeight = 842; //300+542
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

// Select DOM elements
let buttonShowPosters = document.querySelector('.showPosters');
let steps = document.querySelector('#steps');
let sketchHolder = document.querySelector('#sketch-holder');
let selectPoster = document.querySelector('.selectPoster');
let selectPoster_1 = document.querySelector('.selectPoster_1');
let selectPoster_2 = document.querySelector('.selectPoster_2');  
let selectPoster_validate = document.querySelector('.selectPoster_validate');  
let getPoster = document.querySelector('.getPoster');  
let getMyPoster = document.querySelector('.getMyPoster'); 
let goBack = document.querySelector('.goBack'); 


let dateUsual;
let timeStampLength;

// Function pour precharger l'image
function preload() {
    webImage = loadImage("http://i.rlws.fr/mask.png");
    logo = loadImage("http://i.rlws.fr/usm.png");
    // webImage = loadImage("./assets/image/mask.png");
    // logo = loadImage("./assets/image/usm_logo.png");
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
    document.querySelector("#sketch-holder").style.height = canvasHeight + "px";

    background(bgColor);

    let currentDate = new Date(timeStamp * 1000);
    dateUsual = currentDate.getDay() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    timeStampLength = width-toString(timeStamp).length-20;
}

// function de p5.js permettant de faire une loop (appele 60 fois par seconde)
function draw() {
    angleMode(DEGREES);

    switch (currentAffiche) {
        case 1:
            drawAffiche1();
            break;
    
        case 2:
            drawAffiche2();
            break;

        case 3:
            drawAffiche3();
            break;
    }

}

function drawAffiche1() {
    background(whiteColor);
    drawLogo(width/4-150, height/4-150, 2, 0, true);
}

function drawAffiche2() {
    background(whiteColor);
    for (let i = 0; i < 4; i++) {
        let y = 400 + 320 * i;
        drawLogo(65, y, 0.57, i);
        drawLogo(385, y, 0.57, i);
        drawLogo(705, y, 0.57, i);
    }
    
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

function drawAffiche3() {
    background(whiteColor);
    drawLogo(90, 300, 2.5, 1, false, 50);
    drawLogo(90, -20, 2.5, 1, false, 50);

    drawLogo(4800, 500, 0.1, 0);
    image(logo, 515, 50);

    push()

    translate(width*0.5, height*0.5);
    rotate(-41);
    translate(-width*0.3, -height*0.35);

    noStroke();
    textSize(150);
    text('USM', 0, 160);

    textSize(20);
    text('Durability', 330, 120);
    text('Modularity', 330, 140);
    text('Swiss Quality', 330, 160);

    pop();

    textSize(10);
    text(dateUsual, 20, 20);
    text(timeStamp, width - 90, 20);
}

function drawLogo (start_X, start_Y, size, rotated, isCercle=true, rotatedTo=180) {
    push(); // Start a new drawing state
    noStroke();
    
    // Mirror effect
    if (rotated % 2 == 1) {
        translate(width*0.5, height*0.5);
        rotate(rotatedTo);
        translate(-width*0.5182, -height*1.113);
    }
    scale(size);
    drawSquare(start_X, start_Y);
    drawHandle(start_X, start_Y);
    drawLine(start_X, start_Y);

    if (isCercle) image(webImage, start_X-1, start_Y-1, webImage.width * 1.675, webImage.height * 1.675);
    // alert(isCercle)
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
        timeStamp = new Date().valueOf();
        setPalletteColor();
        setstickSeed();
        setcolorSeed();
        sethandleSeed();
    }
    if (key == 's') {
        saveCanvas(`cercle_${year()}`, 'jpg');
    }
}

buttonShowPosters.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector("#sketch-holder").classList.remove("activated");
    steps.children[0].classList.remove('active');
    steps.children[0].classList.add('past');
    steps.children[1].classList.add('active');
    currentAffiche = 2;
    sketchHolder.classList.add('shadow');
    selectPoster.classList.add('active');
    buttonShowPosters.style.display = "none";
});

selectPoster_1.addEventListener('click', function (e) {
    e.preventDefault();
    currentAffiche = 2;
    selectPoster_1.classList.add('active');
    selectPoster_2.classList.remove('active');
});

selectPoster_2.addEventListener('click', function (e) {
    e.preventDefault();
    currentAffiche = 3;
    selectPoster_1.classList.remove('active');
    selectPoster_2.classList.add('active');
});

selectPoster_validate.addEventListener('click', function (e) {
    e.preventDefault();
    steps.children[1].classList.remove('active');
    steps.children[1].classList.add('past');
    steps.children[2].classList.add('active');
    selectPoster.classList.remove('active');
    getPoster.classList.add('active');
});

getMyPoster.addEventListener('click', function (e) {
    saveCanvas('USM_'+timeStamp, 'jpg');
});

goBack.addEventListener("click", function (e) {
    e.preventDefault();
    steps.children[2].classList.remove('active');
    steps.children[1].classList.remove('past');
    steps.children[1].classList.add('active');
    selectPoster.classList.add('active');
    getPoster.classList.remove('active');
})
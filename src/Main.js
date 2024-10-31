"use strict";

const WORLD_WIDTH = 3000;
const WORLD_HEIGHT = 500;

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

const MOVE_SPEED = 50;

const theCanvas = new Canvas("canvasContainer", CANVAS_WIDTH, CANVAS_HEIGHT);
const background = new Background(theCanvas, WORLD_WIDTH, WORLD_HEIGHT);
const house = new House(theCanvas, 10, WORLD_HEIGHT / 2 - 60);
const school = new School(theCanvas, WORLD_WIDTH - 225, WORLD_HEIGHT / 2 - 170);
const person1 = new Person(theCanvas, 100, 200);
const person2 = new Person(theCanvas, 200, 200);
const person3 = new Person(theCanvas, 1000, WORLD_HEIGHT / 2 + 100);
const couple = new Couple(theCanvas, 100, WORLD_HEIGHT / 2 + 100);
const teeterTotter = new TeeterTotter(theCanvas, 750, WORLD_HEIGHT / 2 + 80, person1, person2);
const swing = new Swing(theCanvas, 1500, WORLD_HEIGHT / 2 - 70, person3);


let worldOffsetX = 0;
let stars = [];
let fences = [];

let teeterTotterAngle = 0;
let teeterTotterDirection = "left";

let swingAngle = 0;
let swingDirection = "left";

const coupleXOffset = 2000;
const coupleYOffset = WORLD_HEIGHT / 2 + 100;

let couplePosX = coupleXOffset;
let couplePosY = coupleYOffset;
let coupleDirection = "right";

let starTime = 0;

function main()
{
    theCanvas.addListener("keydown", handleKeyDown);

    // Initialize the stars
    for(let i = 0; i < 100; i++) {
        const x = Math.random() * WORLD_WIDTH + 10;
        const y = Math.random() * WORLD_HEIGHT / 2 - 50;
        stars.push(new Star(theCanvas, x, y));
    }

    // Initialize the fences
    for(let i = 0; i < WORLD_WIDTH; i++) {
        const x = i * 100
        const y = WORLD_HEIGHT / 2 - 70;
        fences.push(new Fence(theCanvas, x, y));
    }

    setInterval(() => {
        // Make the teeter totter move back and forth
        if(teeterTotterDirection === "left") {
            teeterTotterAngle += 0.01;
        } else {
            teeterTotterAngle -= 0.01;
        }

        if(teeterTotterAngle > Math.PI / 6) {
            teeterTotterAngle = Math.PI / 6;
            teeterTotterDirection = "right";
        } else if(teeterTotterAngle < -Math.PI / 6) {
            teeterTotterAngle = -Math.PI / 6;
            teeterTotterDirection = "left";
        }

        // Make the swing move back and forth
        if(swingDirection === "left") {
            swingAngle += 0.01;
        } else {
            swingAngle -= 0.01;
        }

        if(swingAngle > Math.PI / 4) {
            swingAngle = Math.PI / 4;
            swingDirection = "right";
        } else if(swingAngle < -Math.PI / 4) {
            swingAngle = -Math.PI / 4;
            swingDirection = "left";
        }

        // Make the couple walk in a square with their offset
        
        if(coupleDirection === "right") {
            couplePosX += 1;
            if(couplePosX > coupleXOffset) {
                couplePosX = coupleXOffset;
                coupleDirection = "down";
            }
        }

        if(coupleDirection === "down") {
            couplePosY += 1;
            if(couplePosY > coupleYOffset) {
                couplePosY = coupleYOffset;
                coupleDirection = "left";
            }
        }

        if(coupleDirection === "left") {
            couplePosX -= 1;
            if(couplePosX < 1800) {
                couplePosX = 1800;
                coupleDirection = "up";
            }
        }

        if(coupleDirection === "up") {
            couplePosY -= 1;
            if(couplePosY < WORLD_HEIGHT / 2 ) {
                couplePosY = WORLD_HEIGHT / 2;
                coupleDirection = "right";
            }
        }

        // Make the stars twinkle
        starTime++;

        drawAll();
    }, 1000 / 60);

    drawAll(); // <-- Inital Draw
}

function drawAll()
{
    theCanvas.clearScreen();

    const ctx = theCanvas.getContext();
    ctx.save();
    ctx.translate(-worldOffsetX, 0);

    background.draw();
    for(let star of stars) {
        star.draw(starTime);
    }

    for(let fence of fences) {
        fence.draw();
    }

    house.draw();
    school.draw();
    teeterTotter.draw(teeterTotterAngle);
    swing.draw(swingAngle);

    couple.draw(couplePosX, couplePosY);

    ctx.restore();
}

function moveRight()
{
    if(worldOffsetX < WORLD_WIDTH - CANVAS_WIDTH) {
        worldOffsetX += MOVE_SPEED;
    }
}

function moveLeft()
{
    if(worldOffsetX > 0) {
        worldOffsetX -= MOVE_SPEED;
    }
}

function handleKeyDown(event)
{
    switch(event.key) {
        case "ArrowRight":
        case "d":
            moveRight();
            break;
        case "ArrowLeft":
        case "a":
            moveLeft();
            break;
    }
    drawAll();
}

main();

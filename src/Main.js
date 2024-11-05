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
const person4 = new Person(theCanvas, 100, 200);
const person5 = new Person(theCanvas, 200, 200);
const smiley = new Smiley(theCanvas, 250, 380);
const couple = new Couple(theCanvas, 100, WORLD_HEIGHT / 2 + 100);
const couple1 = new Couple(theCanvas, 100, WORLD_HEIGHT / 2 + 100);
const teeterTotter = new TeeterTotter(theCanvas, 750, WORLD_HEIGHT / 2 + 80, person1, person2);
const teeterTotter1 = new TeeterTotter(theCanvas, 1000, WORLD_HEIGHT / 2 + 80, person4, person5);
const swing = new Swing(theCanvas, 1500, WORLD_HEIGHT / 2 - 70);
const swing2 = new Swing(theCanvas, 2300, WORLD_HEIGHT / 2 - 70);

let worldOffsetX = 0;
let stars = [];
let fences = [];

let teeterTotterAngle = 0;
let teeterTotterDirection = "left";
let teeterTotterOffset = { x: 0, y: 0 };

let swingAngle = 0;

let swingDirection = "left";

const coupleXOffset = 2000;
const coupleYOffset = WORLD_HEIGHT / 2 + 100;

const couple1XOffset = 600;
const couple1YOffset = WORLD_HEIGHT / 2 + 100;

let couplePosX = coupleXOffset;
let couplePosY = coupleYOffset;
let coupleDirection = "right";

let couple1PosX = couple1XOffset;
let couple1PosY = couple1YOffset;
let couple1Direction = "right";

let starTime = 0;

let running = false;
let intervalId;

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

    if(running) {
       intervalId = setInterval(update, 1000 / 60);
    }

    drawAll(); // <-- Inital Draw
}

function update()
{
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
        swingAngle += 0.015;
    } else {
        swingAngle -= 0.015;
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

    // Make the couple1 walk in a square with their offset
    if(couple1Direction === "right") {
        couple1PosX += 1;
        if(couple1PosX > couple1XOffset) {
            couple1PosX = couple1XOffset;
            couple1Direction = "down";
        }
    }

    if(couple1Direction === "down") {
        couple1PosY += 1;
        if(couple1PosY > couple1YOffset) {
            couple1PosY = couple1YOffset;
            couple1Direction = "left";
        }
    }

    if(couple1Direction === "left") {
        couple1PosX -= 1;
        if(couple1PosX < 400) {
            couple1PosX = 400;
            couple1Direction = "up";
        }
    }

    if(couple1Direction === "up") {
        couple1PosY -= 1;
        if(couple1PosY < WORLD_HEIGHT / 2) {
            couple1PosY = WORLD_HEIGHT / 2;
            couple1Direction = "right";
        }
    }

    // Make the stars twinkle
    starTime += 0.1;

    drawAll();
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

    teeterTotter.draw(teeterTotterAngle, teeterTotterOffset);
    teeterTotter1.draw(teeterTotterAngle, teeterTotterOffset);

    swing.draw(swingAngle);
    swing2.draw(swingAngle);

    couple.draw(couplePosX, couplePosY);
    couple1.draw(couple1PosX, couple1PosY);

    smiley.draw(ctx);

    ctx.restore();
}

function moveRight()
{
    if(worldOffsetX < WORLD_WIDTH - CANVAS_WIDTH) {
        worldOffsetX += MOVE_SPEED;
        if(smiley.getX() < WORLD_WIDTH - 250) {
            smiley.setPosition(smiley.getX() + MOVE_SPEED, smiley.getY());
        }
    }
}

function moveLeft()
{
    if(worldOffsetX > 0) {
        worldOffsetX -= MOVE_SPEED;
        if(smiley.getX() > 250) {
            smiley.setPosition(smiley.getX() - MOVE_SPEED, smiley.getY());
        }
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
        case "g":
            running = !running;
            if(running) {
                intervalId = setInterval(update, 1000 / 60);
            } else {
                clearInterval(intervalId);
            }
            break;
    }
    drawAll();
}

main();

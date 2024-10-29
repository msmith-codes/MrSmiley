"use strict";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function main()
{
    drawScene();
}

function display(object)
{

}

function setWorld()
{
    // Draw the Sky: 
    Utils.drawRectangle(ctx, 0, 0, canvas.width, canvas.height, "gray");

    // Draw the Ground:
    Utils.drawRectangle(ctx, 0, canvas.height / 2 - 50, canvas.width, canvas.height, "lime");
   
    for(let i = 0; i < canvas.width; i += 100)
    {
        drawFence(i);
    }
    
    drawHouse();
    drawSchool();

}

function drawHouse()
{
    let houseWidth = 200;
    let houseHeight = 275;

    // Draws the body of the house:
    Utils.drawRectangleOutline(ctx, 20, canvas.height - (houseHeight) - 5, houseWidth, houseHeight, "red"); 
    
    // Draw the window of the house:
    Utils.drawRectangleOutline(ctx, 120, canvas.height - (houseHeight - 50), 50, 50, "gray");
    
    // Draw the chimney of the house:
    Utils.drawRectangleOutline(ctx, 40, canvas.height - (houseHeight + 100), 25, 75, "darkred"); 

    // Draws the roof of the house:
    Utils.drawTriangleOutline(ctx, -10, canvas.height - (houseHeight) - 5, 120, canvas.height - (houseHeight + 125), 250, canvas.height - (houseHeight) - 5, "blue");

    // Draw the overhang over the door:
    Utils.drawTriangleOutline(ctx, houseWidth + 20, canvas.height - (houseHeight) + 125, houseWidth + 100, canvas.height - (houseHeight) + 125, houseWidth + 20, canvas.height - (houseHeight) + 100, "black");
}

function drawSchool()
{
    let schoolWidth = 250; 
    let schoolHeight = 400;

    // Draw the body of the school:
    Utils.drawRectangleOutline(ctx, canvas.width - schoolWidth, canvas.height - (schoolHeight) - 5, schoolWidth, schoolHeight, "yellow");

    // Draw the windows of the school:
    Utils.drawRectangleOutline(ctx, canvas.width - schoolWidth + 25, canvas.height - (schoolHeight - 50), 50, 50, "black");

    // Draw the overhang over the door:
    Utils.drawTriangleOutline(ctx, canvas.width - schoolWidth - 100, canvas.height - (schoolHeight) + 170, canvas.width - schoolWidth, canvas.height - (schoolHeight) + 170, canvas.width - schoolWidth, canvas.height - (schoolHeight) + 140, "red");

}

function drawFence(xPos)
{
    let fencePostWidth = 20;
    let fencePostHeight = 90;
   
    let postColor = Utils.getRandomColor();
    let color = Utils.getRandomColor();

    Utils.drawRectangleOutline(ctx, xPos, canvas.height / 2 - 100, 100, 15, color); 
    Utils.drawRectangleOutline(ctx, xPos, canvas.height / 2 - 75, 100, 15, color);
    
    Utils.drawRectangleOutline(ctx, xPos, canvas.height / 2 - fencePostHeight - 30, fencePostWidth, fencePostHeight, postColor);
}

function drawScene()
{
    // Prepare the frame:
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.save();
    
    setWorld();

    ctx.restore();
}

main();

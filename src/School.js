"use strict";

class School
{
    #theCanvas;
    #x;
    #y;

    constructor(theCanvas, x, y)
    {
        this.#theCanvas = theCanvas;
        this.#x = x;
        this.#y = y;
    }

    draw()
    {
        const ctx = this.#theCanvas.getContext("2d");
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.#x, this.#y, 225, 400);

        ctx.fillStyle = "black";
        ctx.fillRect(this.#x + 50, this.#y + 50, 50, 50);

        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.moveTo(this.#x, this.#y + 125);
        ctx.lineTo(this.#x - 100, this.#y + 125);
        ctx.lineTo(this.#x, this.#y + 100);
        ctx.closePath();
        ctx.fill();

    }
}
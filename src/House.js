"use strict";

class House
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
        ctx.fillStyle = "red";
        ctx.fillRect(this.#x, this.#y, 175, 300);

        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(this.#x - 25, this.#y);
        ctx.lineTo(this.#x + 200, this.#y);
        ctx.lineTo(this.#x + 87.5, this.#y - 100);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "gray";
        ctx.fillRect(this.#x + 50, this.#y + 50, 50, 50);

        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(this.#x + 175, this.#y + 125);
        ctx.lineTo(this.#x + 275, this.#y + 125);
        ctx.lineTo(this.#x + 175, this.#y + 100);
        ctx.closePath();
        ctx.fill();

    }
}
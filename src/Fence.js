"use strict";

class Fence 
{
    #theCanvas;
    #x;
    #y;
    #postColor;
    #beamColor;

    constructor(theCanvas, x, y) 
    {
        this.#theCanvas = theCanvas;
        this.#x = x;
        this.#y = y;
        this.#postColor = this.#getRandomColor();
        this.#beamColor = this.#getRandomColor();
    }

    draw() 
    {
        const ctx = this.#theCanvas.getContext("2d");
        ctx.fillStyle = this.#postColor;
        ctx.fillRect(this.#x, this.#y, 20, 60);

        ctx.fillStyle = this.#beamColor;
        ctx.fillRect(this.#x + 20, this.#y + 15, 80, 10);

        ctx.fillStyle = this.#beamColor;
        ctx.fillRect(this.#x + 20, this.#y + 35, 80, 10);

    }

    #getRandomColor()
    {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) 
        {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}

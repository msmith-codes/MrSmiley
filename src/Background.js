"use strict";

class Background
{
    #theCanvas;
    #width = 0;
    #height = 0;
    constructor(theCanvas, width, height)
    {
        this.#theCanvas = theCanvas;
        this.#width = width;
        this.#height = height;
    }

    draw()
    {
        this.#drawSky();
        this.#drawGround();
    }

    #drawSky()
    {
        const ctx = this.#theCanvas.getContext();
        ctx.fillStyle = "gray";
        ctx.fillRect(0, 0, this.#width, this.#height);
    }

    #drawGround()
    {
        const ctx = this.#theCanvas.getContext();
        ctx.fillStyle = "lime";
        ctx.fillRect(0, this.#height / 2 - 25, this.#width, this.#height);
    }
}
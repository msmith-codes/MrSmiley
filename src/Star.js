"use strict";

class Star 
{
    #theCanvas;
    #x;
    #y;
    #points = 5; // Number of points for the star
    #outerRadius = 10; // Outer radius of the star
    #innerRadius = 5; // Inner radius of the star

    constructor(theCanvas, x, y) {
        this.#theCanvas = theCanvas;
        this.#x = x;
        this.#y = y;
    }

    draw(starTime) {
        const ctx = this.#theCanvas.getContext("2d");
        ctx.fillStyle = "yellow";

        ctx.beginPath();
        for (let i = 0; i < this.#points * 2; i++) {
            const angle = i * Math.PI / this.#points;
            const radius = i % 2 === 0 ? this.#outerRadius : this.#innerRadius;
            const x = this.#x + radius * Math.cos(angle);
            const y = this.#y + radius * Math.sin(angle);
            ctx.lineTo(x, y);
        }

        // spin the stars
        ctx.save();
        ctx.translate(this.#x, this.#y);
        this.twinkle(starTime);
        ctx.rotate(starTime);
        ctx.translate(-this.#x, -this.#y);

        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    twinkle(starTime)
    {
        // make the stars bigger and smaller
        const scale = 0.5 + Math.sin(starTime) * 0.1;
        this.#outerRadius = 10 * scale;
        this.#innerRadius = 5 * scale;

    }
}
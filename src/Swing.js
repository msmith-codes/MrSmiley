"use strict";

class Swing
{
    #theCanvas;
    #x;
    #y;
    #person;

    constructor(theCanvas, x, y)
    {
        this.#theCanvas = theCanvas;
        this.#x = x;
        this.#y = y;
        this.#person = new Person(theCanvas, 0, 0);

        this.#person.setScale(0.7);
    }

    draw(angle)
    {
        const ctx = this.#theCanvas.getContext("2d");
        ctx.fillStyle = "black";
        // draw leg 1 as a line at a 45 deg angle
        ctx.beginPath();
        ctx.moveTo(this.#x, this.#y + 200);
        ctx.lineTo(this.#x + 50, this.#y);
        ctx.closePath();
        ctx.stroke();
        // draw leg 2 as a line at a 45 deg angle
        ctx.beginPath();
        ctx.moveTo(this.#x + 50, this.#y);
        ctx.lineTo(this.#x + 100, this.#y + 200);
        ctx.closePath();
        ctx.stroke();

        // draw the rope

        ctx.save();

        ctx.translate(this.#x + 50, this.#y);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 100);
        ctx.closePath();
        ctx.stroke();

        // draw the seat
        ctx.beginPath();
        ctx.moveTo(-5, 100);
        ctx.lineTo(5, 100);
        ctx.lineTo(5, 105);
        ctx.lineTo(-5, 105);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    
        // draw the person on the seat
        ctx.save();
        ctx.translate(5, 50); // Position the person on the seat
        // ctx.rotate(-angle); // Counteract the swing's rotation to keep the person vertical
        this.#person.draw(ctx);
        ctx.restore();

        ctx.restore();

    }
}
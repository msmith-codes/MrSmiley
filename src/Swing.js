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
    
        // Calculate the seat position
        const seatX = this.#x + 25 - 105 * Math.sin(angle);
        // const seatY = this.#y - 50 + 105 * Math.cos(angle) - (Math.sin(this.#y - Math.PI / 2) + 1);           
        const seatY = (this.#y + 60) + (Math.sin(this.#y - Math.PI / 2) + 1); 

        // draw the person on the seat
        ctx.save();
        this.#person.setPosition((seatX - this.#x) / Math.PI - 10, (seatY - this.#y) / Math.PI + 35); // Position the person on the seat
        this.#person.setRotation(-angle / 2); // Rotate the person in the opposite direction
        this.#person.draw(ctx);
        ctx.restore();

        ctx.restore();

    }
}
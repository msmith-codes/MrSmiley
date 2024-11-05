"use strict";

class TeeterTotter {
    #theCanvas;
    #x;
    #y;
    #person1;
    #person2;

    constructor(theCanvas, x, y) {
        this.#theCanvas = theCanvas;
        this.#x = x;
        this.#y = y;
        this.#person1 = new Person(theCanvas, -100, -10);
        this.#person2 = new Person(theCanvas, 100, -10);

        this.#person1.setScale(0.5);
        this.#person2.setScale(0.5);
    }

    draw(angle, offset) {
        const ctx = this.#theCanvas.getContext("2d");
        ctx.fillStyle = "blue";

        ctx.beginPath();
        ctx.moveTo(this.#x, this.#y);
        ctx.lineTo(this.#x + 50, this.#y);
        ctx.lineTo(this.#x + 25, this.#y - 50);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "black";
        // Rotate it by angle
        ctx.save();
        // Translate to the center of the platform
        ctx.translate(this.#x + 25, this.#y - 50);
        ctx.rotate(angle);
        // Draw the platform centered at the origin
        ctx.fillRect(-100, -1, 200, 2); // Increased length from 150 to 200

        // Draw person1 at the left end of the teeter-totter
        ctx.save();
        ctx.translate(20, -20); // Adjust position to the left end of the platform
        this.#person1.setRotation(-angle); // Rotate the person in the opposite direction
        this.#person1.draw(ctx);
        ctx.restore();

        // Draw person2 at the right end of the teeter-totter
        ctx.save();
        ctx.translate(-20, -20); // Adjust position to the right end of the platform
        this.#person2.setRotation(-angle); // Rotate the person in the opposite
    
        this.#person2.draw(ctx);
        ctx.restore();

        ctx.restore();
    }
}
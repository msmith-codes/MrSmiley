"use strict";

class Person 
{
    #theCanvas;
    #x;
    #y;
    #scale;
    #rotation;
    #faceColor;

    constructor(theCanvas, x, y, scale = 1, rotation = 0, faceColor = this.#getRandomColor()) {
        this.#theCanvas = theCanvas;
        this.#x = x;
        this.#y = y;
        this.#scale = scale;
        this.#rotation = rotation;
        this.#faceColor = faceColor;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.#x, this.#y);
        ctx.scale(this.#scale, this.#scale);
        ctx.rotate(this.#rotation);

        // Draw the body
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 60);
        ctx.stroke();

        // Draw the head
        ctx.beginPath();
        ctx.arc(0, -20, 20, 0, Math.PI * 2, true);
        ctx.fillStyle = this.#faceColor;
        ctx.fill();
        ctx.stroke();

        // Draw the face
        ctx.beginPath();
        ctx.arc(-10, -20, 5, 0, Math.PI * 2, true);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(10, -20, 5, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();

        // draw the mouth
        ctx.beginPath();
        ctx.arc(0, -20, 10, 0, Math.PI, false);
        ctx.stroke();

        // Draw the arms
        ctx.beginPath();
        ctx.moveTo(-20, 20);
        ctx.lineTo(20, 20);
        ctx.stroke();

        // Draw the legs
        ctx.beginPath();
        ctx.moveTo(0, 60);
        ctx.lineTo(-20, 100);
        ctx.moveTo(0, 60);
        ctx.lineTo(20, 100);
        ctx.stroke();

        ctx.restore();
    }

    #getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    setPosition(x, y) {
        this.#x = x;
        this.#y = y;
    }

    setScale(scale) {
        this.#scale = scale;
    }

    setRotation(rotation) {
        this.#rotation = rotation;
    }

    setFaceColor(color) {
        this.#faceColor = color;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    getScale() {
        return this.#scale;
    }

    getRotation() {
        return this.#rotation;
    }
}
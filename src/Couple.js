"use strict";

class Couple
{
    #theCanvas;
    #x;
    #y;

    #person1;
    #person2;

    constructor(theCanvas, x, y)
    {
        this.#theCanvas = theCanvas;
        this.#x = x;
        this.#y = y;

        this.#person1 = new Person(theCanvas, x, y);
        this.#person2 = new Person(theCanvas, x + 50, y);
    }

    draw(positionX, positionY)
    {
        const ctx = this.#theCanvas.getContext("2d");
        
        this.#person1.setPosition(positionX, positionY);
        this.#person1.draw(ctx);

        this.#person2.setPosition(positionX + 50, positionY);
        this.#person2.draw(ctx);
    }
}
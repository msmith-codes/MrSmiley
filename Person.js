"use strict";

class Person
{
    #position = {x: 0, y: 0};
    #scale = 1;
    #rotation = 0;
    #faceColor = "black";

    constructor(cx=0, cy=0)
    {
        this.#position.x = cx; 
        this.#position.y = cy;
    }
    
    // Methods:
    next() {}
    display(ctx)
    {

    }

    // Setters:
    setPosition(x, y)
    {
        this.#position.x = x;
        this.#position.y = y;
    }

    setScale(scale)
    {
        this.#scale = scale;
    }

    setRotation(rotation)
    {
        this.#rotation = rotation;
    }

    setFaceColor(color)
    {
        this.#faceColor = color;
    }

    // Getters:
    get position()
    {
        return this.#position;
    }
    
    get scale()
    {
        return this.#scale;
    }

    get rotation()
    {
        return this.#rotation;
    }

    get faceColor()
    {
        return this.#faceColor;
    }
}

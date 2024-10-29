"use strict";

class Utils
{
    static drawRectangle(ctx, x, y, w, h, color)
    {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
        ctx.fill();
    }

    static drawRectangleOutline(ctx, x, y, w, h, color)
    {
        ctx.strokeStyle = "black";
        ctx.strokeRect(x, y, w, h);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
        ctx.fill();
    }

    static drawTriangleOutline(ctx, x1, y1, x2, y2, x3, y3, color)
    {
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.fill();
    }  

    static getRandomColor()
    {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++)
        {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

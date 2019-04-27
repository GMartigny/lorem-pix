const { createCanvas } = require("canvas");
const clamp = require("clamp");

const loremPix = (width, height = width, color = `#${Math.random().toString(16).slice(-6)}`) => {
    if (!width) {
        throw RangeError("Lorem-pix function need at least one non-null argument.");
    }

    const w = clamp(width, 1, 1e4);
    const h = clamp(height, 1, 1e4);

    const canvas = createCanvas(w, h);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);

    ctx.beginPath();

    ctx.rect(0, 0, w, h);
    ctx.moveTo(0, 0);
    ctx.lineTo(w, h);
    ctx.moveTo(w, 0);
    ctx.lineTo(0, h);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.stroke();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
    ctx.stroke();

    ctx.closePath();

    return canvas.toDataURL("image/png");
};

module.exports = loremPix;

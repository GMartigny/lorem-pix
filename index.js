const { createCanvas } = require("canvas");

const loremPix = (width, height = width, color = `#${Math.random().toString(16).slice(-6)}`) => {
    if (!width) {
        throw RangeError("Lorem-pix function need at least one non-null argument.");
    }

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    ctx.beginPath();

    ctx.rect(0, 0, width, height);
    ctx.moveTo(0, 0);
    ctx.lineTo(width, height);
    ctx.moveTo(width, 0);
    ctx.lineTo(0, height);
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

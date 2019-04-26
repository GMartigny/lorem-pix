#!/usr/bin/env node
const loremPix = require(".");
const { writeFileSync } = require("fs");

const [width, height, color] = process.argv.slice(2);

try {
    const dataURL = loremPix(width && Number(width), height && Number(height), color);

    writeFileSync("lorem.png", dataURL.split(",")[1], "base64");
    console.log("Done creating image.");
}
catch (error) {
    console.error(error.message);
}

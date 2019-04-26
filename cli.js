#!/usr/bin/env node
const loremPix = require(".");
const { writeFileSync } = require("fs");

const inputs = process.argv.slice(2);

try {
    const dataURL = loremPix(+inputs[0], +inputs[1], inputs[2]);

    writeFileSync("lorem.png", dataURL.split(",")[1], "base64");
    console.log("Done creating image.");
}
catch (error) {
    console.error(error.message);
}

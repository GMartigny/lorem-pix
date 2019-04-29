#!/usr/bin/env node
const { writeFileSync } = require("fs");
const meow = require("meow");
const loremPix = require(".");

const run = (cli) => {
    const [width, height, color] = cli.input;

    if (!width) {
        cli.showHelp();
        return;
    }

    try {
        const dataURL = loremPix(Number(width), height && Number(height), color);

        writeFileSync(cli.flags.output, dataURL.split(",")[1], "base64");
        console.log("Done creating image.");
    }
    catch (error) {
        console.error(error.message);
    }
};

const defaultFileName = "lorem.png";
const cli = meow(`Create a placeholder image at light speed.
If omitted, color is picked randomly and height equals width.

    Usage
        $ lorem-pix <width> [<height> [<color> [--output <file>]]]

    Options
        --output, -o    Output file path, default to ${defaultFileName}

    Example
        $ lorem-pix 800 600 red
`, {
    flags: {
        output: {
            alias: "o",
            type: "string",
            default: defaultFileName,
        },
    },
});

run(cli);

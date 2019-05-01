const test = require("ava");
const loremPix = require(".");

// https://github.com/image-size/image-size
const measure = (data) => {
    const buffer = Buffer.from(data.split(",")[1], "base64");
    return {
        width: buffer.readUInt32BE(16),
        height: buffer.readUInt32BE(20),
    }
};

test("With width and height", (t) => {
    const data = loremPix(10, 20);

    t.true(typeof data === "string");
    t.true(data.includes("base64") && data.includes("png"));

    const { width, height } = measure(data);
    t.is(width, 10);
    t.is(height, 20);
});

test("With only width", (t) => {
    const data = loremPix(11);

    t.true(typeof data === "string");
    t.true(data.includes("base64") && data.includes("png"));

    const { width, height } = measure(data);
    t.is(width, 11);
    t.is(height, 11);
});

test("Throw without arguments", (t) => {
    t.throws(() => loremPix(), RangeError);
});

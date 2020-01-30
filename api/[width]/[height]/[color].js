const loremPix = require("../../..");

module.exports = (request, response) => {
    const { width, height, color } = request.query;

    const data = loremPix(Number(width), Number(height), color)
        .replace(/^data:image\/png;base64,/, "");

    response.writeHead(200, {
        "Content-Type": "image/png",
    });
    response.write(data, "base64");
    response.end();
};

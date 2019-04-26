const loremPix = require(".");
const { parse } = require("url");

module.exports = (request, response) => {
    const { query } = parse(request.url, true);
    const { width, height, color } = query;

    const data = loremPix(width && Number(width), height && Number(height) || undefined, color || undefined);

    response.writeHead(200, {
        "Content-Type": "image/png",
    });
    response.write(data.split(",")[1], "base64");
    response.end();
};

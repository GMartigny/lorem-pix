const allow = require("allow-cors");
const loremPix = require("..");

module.exports = (request, response) => {
    const { width } = request.query;

    allow(response);

    const data = loremPix(Number(width))
        .replace(/^data:image\/png;base64,/, "");

    response.writeHead(200, {
        "Content-Type": "image/png",
    });
    response.write(data, "base64");
    response.end();
};

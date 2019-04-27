const API_URL = "//lorem-pix.now.sh/api";

const livePreview = (img, width, height, color) => {
    const url = `${API_URL}/${width}/${height}/${encodeURIComponent(color)}`;
    img.src = url;
    return url;
};

const API_URL = "https://lorem-pix.now.sh/api";

const livePreview = (img, width, height, color) => {
    const url = `${API_URL}/${width}/${height}/${encodeURIComponent(color)}`;
    img.src = url;
    return url;
};

export default livePreview;

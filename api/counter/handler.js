export default function handler(request, response) {
    const { createCanvas } = require("canvas");

    // Dimensions for the image
    const width = 200;
    const height = 100;

    // Instantiate the canvas object
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    // Fill the rectangle with purple
    context.fillStyle = "#764abc";
    context.fillRect(0, 0, width, height);

    // Write the image to file
    const buffer = canvas.toBuffer("image/png");
    response.status(200).json({ data: buffer });
};
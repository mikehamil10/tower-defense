import "./style.css";

const canvas = document.querySelector<HTMLCanvasElement>("#game")!;
const ctx = canvas.getContext("2d")!;

canvas.width = 1280;
canvas.height = 768;

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Load backaground image
const image = new Image();
image.src = "assets/images/level.png";

image.onload = () => ctx.drawImage(image, 0, 0);

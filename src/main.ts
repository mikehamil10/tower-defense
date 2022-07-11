import { Enemy } from "./engine/Enemy";
import "./style.css";
import waypoints from "./level";

const canvas = document.querySelector<HTMLCanvasElement>("#game")!;
const ctx = canvas.getContext("2d")!;

canvas.width = 1280;
canvas.height = 768;

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Load backaground image
const image = new Image();
image.src = "assets/images/level.png";

image.onload = () => animate();

const enemy1 = new Enemy(waypoints, waypoints[0]);

function animate() {
  requestAnimationFrame(animate);

  ctx.drawImage(image, 0, 0);

  enemy1.update();
  enemy1.draw(ctx);
}

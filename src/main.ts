import { Enemy } from "./engine/Enemy";
import "./style.css";
import waypoints from "./level";

const canvas = document.querySelector<HTMLCanvasElement>("#game")!;
const ctx = canvas.getContext("2d")!;

canvas.width = 1280;
canvas.height = 768;

// Load backaground image
const levelImage = new Image();
levelImage.src = "assets/images/level.png";
levelImage.onload = () => tick();

// Define Enemy array
const enemies = new Array<Enemy>();
for (let i = 0; i < 10; i++) {
  const xOffset = i * 400;
  enemies.push(
    new Enemy(waypoints, { x: waypoints[0].x - xOffset, y: waypoints[0].y })
  );
}

function tick() {
  requestAnimationFrame(tick);

  ctx.drawImage(levelImage, 0, 0);

  enemies.forEach((enemy) => {
    enemy.update();
    enemy.draw(ctx);
  });
}

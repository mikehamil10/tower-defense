import { Enemy } from "./engine/Enemy";
import "./style.css";
import { columns, placementTiles, waypoints } from "./level";
import { PlacementTile } from "./engine/PlacementTile";

const canvas = document.querySelector<HTMLCanvasElement>("#game")!;
const ctx = canvas.getContext("2d")!;

canvas.width = 1280;
canvas.height = 768;

const fps = 60;
const startGame = () =>
  setInterval(() => {
    requestAnimationFrame(tick);
  }, 1000 / fps);

// Load backaground image
const levelImage = new Image();
levelImage.src = "assets/images/level.png";
levelImage.onload = startGame;

// Create Enemy array
const enemies = new Array<Enemy>();
for (let i = 0; i < 10; i++) {
  const xOffset = i * 400;
  enemies.push(
    new Enemy(waypoints, { x: waypoints[0].x - xOffset, y: waypoints[0].y })
  );
}

// Create Building Placement location array
const buildingLocations = new Array<PlacementTile>();
const placementTiles2D = [];
for (let i = 0; i < placementTiles.length; i += columns) {
  placementTiles2D.push(placementTiles.slice(i, i + columns));
}
placementTiles2D.forEach((row, yPos) => {
  row.forEach((symbol, xPos) => {
    if (symbol === 14) {
      buildingLocations.push(
        new PlacementTile({ position: { x: xPos * 64, y: yPos * 64 } })
      );
    }
  });
});

// Set up mouse tracking
const mouse: { x: number; y: number } = { x: 0, y: 0 };

window.addEventListener("mousemove", (e: MouseEvent) => {
  mouse.x = e.offsetX;
  mouse.y = e.offsetY;
});

// Main Game Loop
function tick() {
  ctx.drawImage(levelImage, 0, 0);

  buildingLocations.forEach((tile) => {
    tile.update(mouse);
    tile.draw(ctx);
  });

  enemies.forEach((enemy) => {
    enemy.update();
    enemy.draw(ctx);
  });

  // ctx.fillStyle = "#00ffff";
  // ctx.fillText(`(${mouse.x}, ${mouse.y})`, 100, 10);
  // ctx.fillRect(mouse.x, mouse.y, 64, 64);
}

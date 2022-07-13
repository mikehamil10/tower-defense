import { Vector2 } from "./engine/Vector2";
import { Enemy } from "./GameObjects/Enemy";
import { PlacementTile } from "./GameObjects/PlacementTile";
import { columns, placementTiles, waypoints } from "./level";
import "./style.css";

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
  enemies.push(new Enemy(waypoints, i * 400));
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
        new PlacementTile(new Vector2(xPos * 64, yPos * 64))
      );
    }
  });
});

// Set up mouse tracking
const mouse: { x: number; y: number } = { x: 0, y: 0 };

window.addEventListener("mousemove", (e: MouseEvent) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Main Game Loop
function tick() {
  ctx.drawImage(levelImage, 0, 0);

  buildingLocations.forEach((tile) => {
    tile.update({ mousePos: mouse });
    tile.draw(ctx);
  });

  enemies.forEach((enemy) => {
    enemy.update();
    enemy.draw(ctx);
  });
}

import { Vector2 } from "./entities";

export class PlacementTile {
  position: Vector2;
  size: number = 64;
  color: string;

  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.color = "rgba(255, 255, 255, 0.15)";
  }

  update(mousePos: { x: number; y: number }): void {
    if (
      mousePos.x > this.position.x &&
      mousePos.x < this.position.x + this.size &&
      mousePos.y > this.position.y &&
      mousePos.y < this.position.y + this.size
    ) {
      this.color = "rgba(255, 255, 255, 1)";
    } else {
      this.color = "rgba(255, 255, 255, 0.15)";
    }
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.size, this.size);
  }
}

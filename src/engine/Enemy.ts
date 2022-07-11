import { Vector2 } from "./entities";

export class Enemy {
  position: Vector2;
  size: Vector2;
  target?: Vector2;

  constructor(position: Vector2 = { x: 0, y: 0 }) {
    this.position = position;
    this.size = { x: 100, y: 100 };
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = "#ff0000";
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }

  update(): void {
    if (this.target != null) {
      const xDistance = this.target.x - this.position.x;
      const yDistance = this.target.y - this.position.y;
      const angle = Math.atan2(yDistance, xDistance);

      this.position.x += Math.cos(angle);
      this.position.y += Math.sin(angle);
    }
  }
}

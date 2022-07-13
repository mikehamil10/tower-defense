import { GameObject } from "../engine/GameObject";
import { Vector2 } from "../engine/Vector2";

export class Tower extends GameObject {
  constructor(position: Vector2) {
    super(position, new Vector2(128, 64));
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = "blue";
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }
}

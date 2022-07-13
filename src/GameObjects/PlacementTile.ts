import { GameObject } from "../engine/GameObject";
import { Vector2 } from "../engine/Vector2";

export class PlacementTile extends GameObject {
  static Empty = new PlacementTile(new Vector2(-10000, -10000));

  color: string;
  // occupied: boolean = false;

  constructor(position: Vector2, public occupied: boolean = false) {
    super(position, new Vector2(64, 64));
    this.color = "rgba(255, 255, 255, 0.15)";
  }

  update({ mousePos }: { mousePos?: Vector2 }): void {
    if (
      mousePos!.x > this.position.x &&
      mousePos!.x < this.position.x + this.size.x &&
      mousePos!.y > this.position.y &&
      mousePos!.y < this.position.y + this.size.y
    ) {
      this.color = "rgba(255, 255, 255, 1)";
    } else {
      this.color = "rgba(255, 255, 255, 0.15)";
    }
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }
}

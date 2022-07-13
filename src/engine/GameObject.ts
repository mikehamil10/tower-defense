import { Vector2 } from "./Vector2";

export class GameObject {
  constructor(public position: Vector2, public size: Vector2 = Vector2.One) {
    this.position = position;
    this.size = size;
  }

  update({ mousePos }: { mousePos?: Vector2 }): void {}

  draw(context: CanvasRenderingContext2D): void {
    if (context === undefined) {
      throw Error("No valid context present!");
    }
  }
}

export class Vector2 {
  static Zero = new Vector2();
  static One = new Vector2(1, 1);

  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `{x:${this.x}, y:${this.y}}`;
  }
}

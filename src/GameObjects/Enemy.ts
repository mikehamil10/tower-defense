import { GameObject } from "../engine/GameObject";
import { Vector2 } from "../engine/Vector2";

export class Enemy extends GameObject {
  private center: Vector2;
  private waypointIndex: number = 0;

  constructor(public waypoints: Vector2[], xOffset: number) {
    const startingPos = new Vector2(waypoints[0].x - xOffset, waypoints[0].y);
    super(startingPos, new Vector2(100, 100));

    this.waypoints = waypoints;
    this.center = {
      x: this.size.x / 2,
      y: this.size.y / 2,
    };
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = "#ff0000";
    context.fillRect(
      this.position.x - this.center.x,
      this.position.y - this.center.y,
      this.size.x,
      this.size.y
    );
  }

  update(): void {
    const waypoint = this.waypoints[this.waypointIndex];
    const xDistance = waypoint.x - this.position.x;
    const yDistance = waypoint.y - this.position.y;
    const angle = Math.atan2(yDistance, xDistance);

    this.position.x += Math.cos(angle);
    this.position.y += Math.sin(angle);

    if (
      Math.round(this.position.x) == Math.round(waypoint.x) &&
      Math.round(this.position.y) == Math.round(waypoint.y) &&
      this.waypointIndex < this.waypoints.length - 1
    ) {
      this.waypointIndex++;
    }
  }
}

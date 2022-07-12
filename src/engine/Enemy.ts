import { Vector2 } from "./entities";

export class Enemy {
  position: Vector2;
  size: Vector2;
  center: Vector2;

  waypointIndex: number = 0;
  waypoints: Vector2[];

  constructor(waypoints: Vector2[], position: Vector2 = { x: 0, y: 0 }) {
    this.waypoints = waypoints;

    this.position = position;
    this.size = { x: 100, y: 100 };
    this.center = {
      x: this.position.x + this.size.x / 2,
      y: this.position.y + this.size.y / 2,
    };
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = "#ff0000";
    context.fillRect(
      this.position.x - this.size.x / 2,
      this.position.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );
  }

  update(): void {
    const waypoint = this.waypoints[this.waypointIndex];
    const xDistance = waypoint.x - this.position.x;
    const yDistance = waypoint.y - this.position.y;

    // const distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    const angle = Math.atan2(yDistance, xDistance);

    this.position.x += Math.cos(angle);
    this.position.y += Math.sin(angle);
    this.center = {
      x: this.position.x + this.size.x / 2,
      y: this.position.y + this.size.y / 2,
    };

    // console.log(
    //   `At pos (${Math.round(this.position.x)}, ${Math.round(this.position.y)}).`
    // );

    if (
      Math.round(this.position.x) == Math.round(waypoint.x) &&
      Math.round(this.position.y) == Math.round(waypoint.y) &&
      this.waypointIndex < this.waypoints.length - 1
    ) {
      this.waypointIndex++;
      // console.log(
      //   `hit a waypoint! Heading to (${Math.round(
      //     this.waypoints[this.waypointIndex].x
      //   )}, ${Math.round(this.waypoints[this.waypointIndex].y)})`
      // );
    }
  }
}

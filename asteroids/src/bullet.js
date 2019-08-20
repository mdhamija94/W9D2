const MovingObject = require("./moving_objects.js");
const Util = require("./util.js");

Bullet.COLOR = "#000000";
Bullet.RADIUS = 2;

function Bullet(pos, vel) {
  MovingObject.call(this, { pos });
  this.pos = pos;
  this.radius = Bullet.RADIUS;
  this.color = Bullet.COLOR;
  this.vel = vel;
}
Util.inherits(Bullet, MovingObject);

module.exports = Bullet;
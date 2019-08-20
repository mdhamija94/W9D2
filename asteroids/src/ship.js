const MovingObject = require("./moving_objects.js");
const Util = require("./util.js");
const Bullet = require("./bullet.js");

Ship.COLOR = "#00f";
Ship.RADIUS = 5;

function Ship(pos) {
  MovingObject.call(this, { pos });
  this.pos = pos;
  this.radius = Ship.RADIUS;
  this.color = Ship.COLOR;
  this.vel = [0,0];
  this.bullets = [];
}
Util.inherits(Ship, MovingObject);

Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function() {
  if (this.vel[0] !== 0 && this.vel[1] !== 0) {
    let newVel = [this.vel[0] * 2, this.vel[1] * 2];
    let newPos = this.pos.slice(0);
    let bullet = new Bullet(newPos, newVel);
    this.bullets.push(bullet);
  }

  if (this.bullets.length > 10) {
    this.bullets.shift();
  }
};

module.exports = Ship;
// const Game = require("./game.js");

function MovingObject (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.strokeStyle = "white";
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
};

MovingObject.prototype.move = function (ctx) {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  // this.pos = Game.prototype.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
  let dx = this.pos[0] - otherObject.pos[0];
  let dy = this.pos[1] - otherObject.pos[1];
  let distance = Math.sqrt(Math.pow(dy, 2) + Math.pow(dx, 2));
  let min = this.radius + otherObject.radius;
  if (distance <= min) {
    return true;
  }
};

module.exports = MovingObject;
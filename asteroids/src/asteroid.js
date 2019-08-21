const MovingObject = require("./moving_objects.js");
const Util = require("./util.js");

Asteroid.COLOR = "slategrey";
Asteroid.RADIUS = [15, 15, 15, 20, 20, 20, 20, 20, 25, 25, 25]
Asteroid.VEL = [[1,5],[-1,5],[5,2],[5,-2],[3,5],[-3,5],[4,3],[4,-3],[-4,4],[4,4],[2,3],[-2,-3]];

function Asteroid(pos) {
  MovingObject.call(this, {pos});
  this.pos = pos;
  this.color = Asteroid.COLOR;
  this.radius = Asteroid.RADIUS[Math.floor(Math.random() * Asteroid.RADIUS.length)];
  this.vel = Asteroid.VEL[Math.floor(Math.random() * Asteroid.VEL.length)]; 
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
const MovingObject = require("./moving_objects.js");
const Util = require("./util.js");

Asteroid.COLOR = "gray";
Asteroid.RADIUS = 15;
Asteroid.VEL = [[-4, 4],[2,4],[3,-5], [-2,5], [5,5], [1,5], [3,2], [-4,3], [-3,4], [-5,1]];

function Asteroid(pos) {
  MovingObject.call(this, {pos});
  this.pos = pos;
  this.radius = Asteroid.RADIUS;
  this.color = Asteroid.COLOR;
  this.vel = Asteroid.VEL[Math.floor(Math.random() * Asteroid.VEL.length)]; 
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
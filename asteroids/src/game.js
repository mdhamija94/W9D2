const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;

function Game() {
  this.DIM_X = Game.DIM_X;
  this.DIM_Y = Game.DIM_Y;
  this.NUM_ASTEROIDS = Game.NUM_ASTEROIDS;
  // this.asteroids = addAsteroids();
  this.addAsteroids();
  this.ship = new Ship(this.randomPos());
  this.bullets = this.ship.bullets;
  this.allObjects();
}

Game.prototype.addAsteroids = function () {
  let asteroids = [];

  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    let el = new Asteroid(this.randomPos());
    asteroids.push(el);
  }

  this.asteroids = asteroids;
};

Game.prototype.randomPos = function () {
  let x = Math.random() * this.DIM_X;
  let y = Math.random() * this.DIM_Y;

  return [x, y];
};

Game.prototype.allObjects = function() {
  this.objects = this.asteroids.concat(this.ship);
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

  this.ship.draw(ctx);

  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }

  for (let i = 0; i < this.ship.bullets.length; i++) {
    this.ship.bullets[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function (ctx) {

  this.ship.move(ctx);
  this.ship.pos = this.wrap(this.ship.pos);

  for (let i = 0; i < this.asteroids.length; i++) {
    let el = this.asteroids[i];
    el.move(ctx);
    el.pos = this.wrap(el.pos);
  }

  for (let i = 0; i < this.ship.bullets.length; i++) {
    let el = this.ship.bullets[i];
    el.move(ctx);
  }
};

Game.prototype.checkCollisions = function () {
  for (let i = 0; i < this.asteroids.length; i++) {
    if (this.ship.isCollidedWith(this.asteroids[i])){
        this.relocate();
        // this.asteroids = this.asteroids.slice(0, i).concat(this.asteroids.slice(i+1, j).concat(this.asteroids.slice(j+1)));
        // this.remove(this.asteroids[i]);
        // this.remove(this.asteroids[j]);
      
    }
  }

  for (let i = 0; i < this.bullets.length; i++) {
    for (let j = 0; j < this.asteroids.length; j++) {
      if (this.bullets[i].isCollidedWith(this.asteroids[j])) {
        // this.asteroids = []
        this.asteroids = this.asteroids.slice(0, j).concat(this.asteroids.slice(j + 1));
      } 
    } 
  }
};

Game.prototype.relocate = function () {
  this.ship.pos = (this.randomPos());
  this.ship.vel = [0,0];
};

Game.prototype.step = function (ctx) {
  this.moveObjects(ctx);
  this.checkCollisions();
};

Game.prototype.animate = function(ctx) {
  this.step(ctx);
  this.draw(ctx);
};

Game.prototype.remove = function(asteroid) {
  asteroid.delete();
};

Game.prototype.wrap = function(pos) {
  if (pos[0] < 0) {
    pos[0] = this.DIM_X
  } else if (pos[0] > this.DIM_X) {
    pos[0] = 0;
  }
  if (pos[1] < 0) {
    pos[1] = this.DIM_Y
  } else if (pos[1] > this.DIM_Y) {
    pos[1] = 0;
  }
  return pos;

};

module.exports = Game
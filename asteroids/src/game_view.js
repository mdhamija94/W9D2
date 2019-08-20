const Game = require("./game.js");

const MOVES = {w: [0,-5], a: [-5,0] , s:[0,5], d:[5,0] };

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}



GameView.prototype.start = function() {
  this.bindKeyHandlers();
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function() {
  this.game.animate(this.ctx);
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.bindKeyHandlers = function() {
  // let vals = MOVES[]
  const ship = this.game.ship;
  key("w", function() {ship.power([0,-1])});
  key("a", function() {ship.power([-1, 0])}); 
  key("s", function() {ship.power([0, 1])}); 
  key("d", function() {ship.power([1, 0])});
  key("f", function() {ship.fireBullet()});
};

module.exports = GameView
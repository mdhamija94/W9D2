const Game = require("./game.js");

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
  const ship = this.game.ship;
  key("w", function() {ship.power([0,-1])});
  key("a", function() {ship.power([-1, 0])}); 
  key("s", function() {ship.power([0, 1])}); 
  key("d", function() {ship.power([1, 0])});
  key("f", function() {ship.fireBullet()});
};

module.exports = GameView
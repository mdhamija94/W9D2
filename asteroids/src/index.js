const Object = require("./moving_objects.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
const Ship = require("./ship.js")

window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  let game = new Game();
  // game.draw(ctx);
  // game.moveObjects(ctx);
  // game.draw(ctx);
  // game.moveObjects(ctx);
  // game.draw(ctx);
  // game.moveObjects(ctx);
  // game.draw(ctx);
  let game_view = new GameView(game, ctx);
  game_view.start();
  // canvas.addEventListener('keydown', function (event) {
  //   if (event.code === 'KeyW') {
      
  //   }
  //   ;
  // }, false);

  // let object = new Object({ pos: [150, 75], vel: [10, 10], radius: 3, color: "blue" });
  // object.draw(ctx);
  // object.move(ctx);
  // object.draw(ctx);
  // let object2 = new Asteroid([30, 30]);
  // object2.draw(ctx);
});

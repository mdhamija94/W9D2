/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_objects.js */ \"./src/moving_objects.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nAsteroid.COLOR = \"gray\";\nAsteroid.RADIUS = 15;\nAsteroid.VEL = [[-4, 4],[2,4],[3,-5], [-2,5], [5,5], [1,5], [3,2], [-4,3], [-3,4], [-5,1]];\n\nfunction Asteroid(pos) {\n  MovingObject.call(this, {pos});\n  this.pos = pos;\n  this.radius = Asteroid.RADIUS;\n  this.color = Asteroid.COLOR;\n  this.vel = Asteroid.VEL[Math.floor(Math.random() * Asteroid.VEL.length)]; \n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_objects.js */ \"./src/moving_objects.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nBullet.COLOR = \"#000000\";\nBullet.RADIUS = 2;\n\nfunction Bullet(pos, vel) {\n  MovingObject.call(this, { pos });\n  this.pos = pos;\n  this.radius = Bullet.RADIUS;\n  this.color = Bullet.COLOR;\n  this.vel = vel;\n}\nUtil.inherits(Bullet, MovingObject);\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 500;\nGame.NUM_ASTEROIDS = 10;\n\nfunction Game() {\n  this.DIM_X = Game.DIM_X;\n  this.DIM_Y = Game.DIM_Y;\n  this.NUM_ASTEROIDS = Game.NUM_ASTEROIDS;\n  // this.asteroids = addAsteroids();\n  this.addAsteroids();\n  this.ship = new Ship(this.randomPos());\n  this.bullets = this.ship.bullets;\n  this.allObjects();\n}\n\nGame.prototype.addAsteroids = function () {\n  let asteroids = [];\n\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    let el = new Asteroid(this.randomPos());\n    asteroids.push(el);\n  }\n\n  this.asteroids = asteroids;\n};\n\nGame.prototype.randomPos = function () {\n  let x = Math.random() * this.DIM_X;\n  let y = Math.random() * this.DIM_Y;\n\n  return [x, y];\n};\n\nGame.prototype.allObjects = function() {\n  this.objects = this.asteroids.concat(this.ship);\n};\n\nGame.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n\n  this.ship.draw(ctx);\n\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].draw(ctx);\n  }\n\n  for (let i = 0; i < this.ship.bullets.length; i++) {\n    this.ship.bullets[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function (ctx) {\n\n  this.ship.move(ctx);\n  this.ship.pos = this.wrap(this.ship.pos);\n\n  for (let i = 0; i < this.asteroids.length; i++) {\n    let el = this.asteroids[i];\n    el.move(ctx);\n    el.pos = this.wrap(el.pos);\n  }\n\n  for (let i = 0; i < this.ship.bullets.length; i++) {\n    let el = this.ship.bullets[i];\n    el.move(ctx);\n  }\n};\n\nGame.prototype.checkCollisions = function () {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    if (this.ship.isCollidedWith(this.asteroids[i])){\n        this.relocate();\n        // this.asteroids = this.asteroids.slice(0, i).concat(this.asteroids.slice(i+1, j).concat(this.asteroids.slice(j+1)));\n        // this.remove(this.asteroids[i]);\n        // this.remove(this.asteroids[j]);\n      \n    }\n  }\n\n  for (let i = 0; i < this.bullets.length; i++) {\n    for (let j = 0; j < this.asteroids.length; j++) {\n      if (this.bullets[i].isCollidedWith(this.asteroids[j])) {\n        // this.asteroids = []\n        this.asteroids = this.asteroids.slice(0, j).concat(this.asteroids.slice(j + 1));\n      } \n    } \n  }\n};\n\nGame.prototype.relocate = function () {\n  this.ship.pos = (this.randomPos());\n  this.ship.vel = [0,0];\n};\n\nGame.prototype.step = function (ctx) {\n  this.moveObjects(ctx);\n  this.checkCollisions();\n};\n\nGame.prototype.animate = function(ctx) {\n  this.step(ctx);\n  this.draw(ctx);\n};\n\nGame.prototype.remove = function(asteroid) {\n  asteroid.delete();\n};\n\nGame.prototype.wrap = function(pos) {\n  if (pos[0] < 0) {\n    pos[0] = this.DIM_X\n  } else if (pos[0] > this.DIM_X) {\n    pos[0] = 0;\n  }\n  if (pos[1] < 0) {\n    pos[1] = this.DIM_Y\n  } else if (pos[1] > this.DIM_Y) {\n    pos[1] = 0;\n  }\n  return pos;\n\n};\n\nmodule.exports = Game\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nconst MOVES = {w: [0,-5], a: [-5,0] , s:[0,5], d:[5,0] };\n\nfunction GameView(game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n}\n\n\n\nGameView.prototype.start = function() {\n  this.bindKeyHandlers();\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.prototype.animate = function() {\n  this.game.animate(this.ctx);\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.prototype.bindKeyHandlers = function() {\n  // let vals = MOVES[]\n  const ship = this.game.ship;\n  key(\"w\", function() {ship.power([0,-1])});\n  key(\"a\", function() {ship.power([-1, 0])}); \n  key(\"s\", function() {ship.power([0, 1])}); \n  key(\"d\", function() {ship.power([1, 0])});\n  key(\"f\", function() {ship.fireBullet()});\n};\n\nmodule.exports = GameView\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Object = __webpack_require__(/*! ./moving_objects.js */ \"./src/moving_objects.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n\n  let game = new Game();\n  // game.draw(ctx);\n  // game.moveObjects(ctx);\n  // game.draw(ctx);\n  // game.moveObjects(ctx);\n  // game.draw(ctx);\n  // game.moveObjects(ctx);\n  // game.draw(ctx);\n  let game_view = new GameView(game, ctx);\n  game_view.start();\n  // canvas.addEventListener('keydown', function (event) {\n  //   if (event.code === 'KeyW') {\n      \n  //   }\n  //   ;\n  // }, false);\n\n  // let object = new Object({ pos: [150, 75], vel: [10, 10], radius: 3, color: \"blue\" });\n  // object.draw(ctx);\n  // object.move(ctx);\n  // object.draw(ctx);\n  // let object2 = new Asteroid([30, 30]);\n  // object2.draw(ctx);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_objects.js":
/*!*******************************!*\
  !*** ./src/moving_objects.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Game = require(\"./game.js\");\n\nfunction MovingObject (options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.strokeStyle = \"white\";\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  ctx.stroke();\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function (ctx) {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  // this.pos = Game.prototype.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n  let dx = this.pos[0] - otherObject.pos[0];\n  let dy = this.pos[1] - otherObject.pos[1];\n  let distance = Math.sqrt(Math.pow(dy, 2) + Math.pow(dx, 2));\n  let min = this.radius + otherObject.radius;\n  if (distance <= min) {\n    return true;\n  }\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_objects.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_objects.js */ \"./src/moving_objects.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nShip.COLOR = \"#00f\";\nShip.RADIUS = 5;\n\nfunction Ship(pos) {\n  MovingObject.call(this, { pos });\n  this.pos = pos;\n  this.radius = Ship.RADIUS;\n  this.color = Ship.COLOR;\n  this.vel = [0,0];\n  this.bullets = [];\n}\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullet = function() {\n  if (this.vel[0] !== 0 && this.vel[1] !== 0) {\n    let newVel = [this.vel[0] * 2, this.vel[1] * 2];\n    let newPos = this.pos.slice(0);\n    let bullet = new Bullet(newPos, newVel);\n    this.bullets.push(bullet);\n  }\n\n  if (this.bullets.length > 10) {\n    this.bullets.shift();\n  }\n};\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = Surrogate.prototype;\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });
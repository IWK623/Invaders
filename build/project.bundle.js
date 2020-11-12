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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Alien.js":
/*!**********************!*\
  !*** ./src/Alien.js ***!
  \**********************/
/*! exports provided: Alien1, Alien2, Alien3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Alien1\", function() { return Alien1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Alien2\", function() { return Alien2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Alien3\", function() { return Alien3; });\n/* harmony import */ var _GC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GC */ \"./src/GC.js\");\n// import 'phaser';\n\n\nclass Alien extends Phaser.Physics.Arcade.Sprite {\n\n  constructor(scene, alienType) {\n    super(scene, 0, 0, \"graphic\", alienType);\n    this.alienType = alienType;\n  }\n\n  activate(x, y) {\n    this.play(\"alien\" + this.alienType);\n    this.setCollideWorldBounds(true);\n    this.body.onWorldBounds = true;\n    this.enableBody(true, x, y, true, true);\n  }\n\n  deactivate() {\n    this.disableBody(true, true);\n  }\n\n  explode() {\n    this.scene.sound.play('explosion');\n    this.deactivate();\n  }\n}\n\nclass Alien1 extends Alien {\n\n  constructor(scene) {\n    super(scene, _GC__WEBPACK_IMPORTED_MODULE_0__[\"GC\"].ALIEN_1);\n  }\n}\n\nclass Alien2 extends Alien {\n\n  constructor(scene) {\n    super(scene, _GC__WEBPACK_IMPORTED_MODULE_0__[\"GC\"].ALIEN_2);\n  }\n}\n\nclass Alien3 extends Alien {\n\n  constructor(scene) {\n    super(scene, _GC__WEBPACK_IMPORTED_MODULE_0__[\"GC\"].ALIEN_3);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Alien.js?");

/***/ }),

/***/ "./src/AlienManager.js":
/*!*****************************!*\
  !*** ./src/AlienManager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AlienManager; });\n/* harmony import */ var _Alien__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alien */ \"./src/Alien.js\");\n/* harmony import */ var _GC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GC */ \"./src/GC.js\");\n// import 'phaser';\n\n\n\nfunction deactivateAlien(alien) {\n   alien.deactivate();\n }\n\nclass AlienManager {\n\n  constructor(scene, level) {\n    this.scene = scene;\n\n    this.maxY = scene.game.canvas.height;\n    this.aliensStartVelocity = 40;\n\n    this.aliens1 = scene.physics.add.group({\n      maxSize: 26,\n      classType: _Alien__WEBPACK_IMPORTED_MODULE_0__[\"Alien1\"],\n      runChildUpdate: true\n    });\n\n    this.aliens2 = scene.physics.add.group({\n      maxSize: 26,\n      classType: _Alien__WEBPACK_IMPORTED_MODULE_0__[\"Alien2\"],\n      runChildUpdate: true\n    });\n    this.aliens3 = scene.physics.add.group({\n      maxSize: 13,\n      classType: _Alien__WEBPACK_IMPORTED_MODULE_0__[\"Alien3\"],\n      runChildUpdate: true\n    });\n\n    this.init(level);\n  }\n\n  addColider(other, eventHandler, scene) {\n    scene.physics.add.collider(this.aliens1, other, eventHandler, null, scene);\n    scene.physics.add.collider(this.aliens2, other, eventHandler, null, scene);\n    scene.physics.add.collider(this.aliens3, other, eventHandler, null, scene);\n  }\n\n  restart(level) {\n    this.level = level;\n    this.forAllAliens(deactivateAlien);\n    this.init(level);\n  }\n\n  init(level) {\n    this.level = level;\n    this.makeAlienRow(0, this.aliens1);\n    return;\n    this.makeAlienRow(1, this.aliens1);\n    this.makeAlienRow(2, this.aliens2);\n    this.makeAlienRow(3, this.aliens2);\n    this.makeAlienRow(4, this.aliens3);\n\n    this.aliensVelocity = this.aliensStartVelocity + (5 * (level - 1));\n    this.aliens1.setVelocityX(this.aliensVelocity);\n    this.aliens2.setVelocityX(this.aliensVelocity);\n    this.aliens3.setVelocityX(this.aliensVelocity);\n\n    this.alienThrowsBombInFuture();\n  }\n\n  makeAlienRow(row, aliens) {\n    for (var column = 0; column <= 1; column++) {\n      let x = 100 + (column * 54);\n      let y = 70 + (row * 50);\n      aliens.get().activate(x, y);\n    }\n  }\n\n  countAliensDetailed() {\n    const nrOfAliens1 = this.aliens1.countActive();\n    const nrOfAliens2 = this.aliens2.countActive();\n    const nrOfAliens3 = this.aliens3.countActive();\n    const nrOfAliens = nrOfAliens1 + nrOfAliens2 + nrOfAliens3;\n    return {\n      all: nrOfAliens,\n      aliens1: nrOfAliens1,\n      aliens2: nrOfAliens2,\n      aliens3: nrOfAliens1\n    }\n  }\n\n  testAllAliensDead() {\n    return this.countAliensDetailed().all === 0;\n  }\n\n  getRandomAlien() {\n    const count = this.countAliensDetailed();\n    if (count.all > 0) {\n      let alienIndex = Math.floor(Math.random() * count.all);\n      let aliens = this.aliens1;\n      if (alienIndex >= count.aliens1) {\n        aliens = this.aliens2;\n        alienIndex -= count.aliens1;\n      }\n      if (alienIndex >= count.aliens2) {\n        aliens = this.aliens3;\n        alienIndex -= count.aliens2;\n      }\n      //const alien = aliens.getChildren()[alienIndex];\n      const alien = aliens.getFirstNth(alienIndex, true, false);\n      return alien;\n    }\n    // return undefined\n  }\n\n  alienThrowsBombInFuture() {\n    let delay = 400 + Math.random() * 4000;\n    this.scene.time.addEvent({\n      delay: delay,\n      callback: this.alienThrowsBomb,\n      callbackScope: this\n    });\n  }\n\n  alienThrowsBomb() {\n    if (this.scene.state == _GC__WEBPACK_IMPORTED_MODULE_1__[\"STATE\"].RUN) {\n      const alien = this.getRandomAlien();\n      if (alien !== undefined && alien !== null) {\n        this.scene.bombs.get().throw(alien.x, alien.y+10);\n      }\n    }\n    this.alienThrowsBombInFuture();\n  }\n\n  onWorldbounds(body) {\n    let gameover = false;\n    if (body.gameObject.active) {\n      const isAlien = this.aliens1.contains(body.gameObject)\n                   || this.aliens2.contains(body.gameObject)\n                   || this.aliens3.contains(body.gameObject);\n      if (isAlien) {\n        this.aliensVelocity = -this.aliensVelocity * 1.02;\n        this.aliens1.setVelocityX(this.aliensVelocity);\n        this.aliens2.setVelocityX(this.aliensVelocity);\n        this.aliens3.setVelocityX(this.aliensVelocity);\n\n        const isLanded = (function(alien) {\n          return(alien.y+5 > this.maxY);\n        }).bind(this);\n\n        function moveAlienDown(alien) {\n          alien.y += 5;\n        }\n\n        //TODO: remove expensive call!\n        gameover =\n          this.aliens1.getChildren().find(isLanded)\n          || this.aliens2.getChildren().find(isLanded)\n          || this.aliens3.getChildren().find(isLanded);\n        if (!gameover) {\n          this.forAllAliens(moveAlienDown);\n        }\n      }\n    }\n    return gameover;\n  }\n\n  forAllAliens(f) {\n    this.aliens1.getChildren().forEach(f);\n    this.aliens2.getChildren().forEach(f);\n    this.aliens3.getChildren().forEach(f);\n  }\n\n  gameover() {\n    this.aliens1.setVelocityX(0);\n    this.aliens1.setVelocityY(0);\n    this.aliens2.setVelocityX(0);\n    this.aliens2.setVelocityY(0);\n    this.aliens3.setVelocityX(0);\n    this.aliens3.setVelocityY(0);\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/AlienManager.js?");

/***/ }),

/***/ "./src/Bomb.js":
/*!*********************!*\
  !*** ./src/Bomb.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bomb; });\n// import 'phaser';\n\nclass Bomb extends Phaser.Physics.Arcade.Sprite {\n\n  constructor(scene) {\n    super(scene, 0, 0, 'bomb');\n    this.play('bomb');\n  }\n\n  throw(x, y) {\n    this.enableBody(true, x, y, true, true);\n    this.setCollideWorldBounds(true);\n    this.body.onWorldBounds = true;\n    this.setVelocityY(300);\n  }\n\n  deactivate() {\n    this.disableBody (true, true);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Bomb.js?");

/***/ }),

/***/ "./src/Bullet.js":
/*!***********************!*\
  !*** ./src/Bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bullet; });\n// import 'phaser';\n\nclass Bullet extends Phaser.Physics.Arcade.Sprite {\n\n  constructor(scene) {\n    super(scene, 0, 0, 'bullet');\n  }\n\n  shoot(x, y) {\n    // this.scene.sound.play('shoot');\n    this.setCollideWorldBounds(true);\n    this.body.onWorldBounds = true;\n    this.enableBody(true, x, y, true, true);\n    this.setVelocityY(-300);\n  }\n\n  deactivate() {\n    this.disableBody (true, true);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Bullet.js?");

/***/ }),

/***/ "./src/GC.js":
/*!*******************!*\
  !*** ./src/GC.js ***!
  \*******************/
/*! exports provided: GC, STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GC\", function() { return GC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STATE\", function() { return STATE; });\nvar GC = {\n  ALIEN_1:    0,\n  ALIEN_2:    2,\n  ALIEN_3:    4,\n  ROCKET:     6,\n  EXPLOSION:  7\n}\n\nvar STATE = {\n  READY:    0,\n  RUN:      1,\n  GAMEOVER: 2\n}\n\n\n\n\n//# sourceURL=webpack:///./src/GC.js?");

/***/ }),

/***/ "./src/RocketFactory.js":
/*!******************************!*\
  !*** ./src/RocketFactory.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GC */ \"./src/GC.js\");\n\n\nclass RocketFactory {\n  create(scene) {\n    let rocket = scene.physics.add.sprite(300, 500, \"graphic\", _GC__WEBPACK_IMPORTED_MODULE_0__[\"GC\"].ROCKET)\n      .setImmovable(true);\n\n    rocket.setCollideWorldBounds(true);\n    rocket.body.onWorldBounds = true;\n    rocket.body.world.on('worldbounds', function(body) {\n      if (body.gameObject === this) {\n        this.setActive(false);\n      }\n    }, rocket);\n\n    return rocket;\n  }\n}\n\nconst rocketFactory = new RocketFactory();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rocketFactory);\n\n\n//# sourceURL=webpack:///./src/RocketFactory.js?");

/***/ }),

/***/ "./src/ScoreManager.js":
/*!*****************************!*\
  !*** ./src/ScoreManager.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScoreManager; });\nfunction padding(s) {\n  return s.toLocaleString('en',\n    {minimumIntegerDigits:4,minimumFractionDigits:0,useGrouping:false});\n}\n\nclass ScoreManager {\n\n  constructor(scene) {\n    const textConfig =\n      { fontSize: '16px',  fontFamily: 'Pixel', fill: \"#ffffff\" };\n    scene.add.text(16, 16, 'SCORE   HI-SCORE', textConfig);\n    this.scoreText = scene.add.text(22, 32, '', textConfig);\n    this.hiScore = 0;\n    this.score = 0;\n  }\n\n  setHiScore() {\n    if (this.score > this.hiScore) {\n      this.hiScore = this.score;\n    }\n    this.score = 0;\n    this.print();\n  }\n\n  point() {\n    this.score++;\n    this.print();\n  }\n\n  print() {\n    this.scoreText.setText(\n      padding(this.score) + '     ' + padding(this.hiScore)\n    );\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/ScoreManager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenes_BootScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/BootScene */ \"./src/scenes/BootScene.js\");\n/* harmony import */ var _scenes_LoaderScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/LoaderScene */ \"./src/scenes/LoaderScene.js\");\n/* harmony import */ var _scenes_GameScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/GameScene */ \"./src/scenes/GameScene.js\");\n// import 'phaser';\n\n\n\n\n\nvar config = {\n  type: Phaser.AUTO,\n  parent: 'phaser-example',\n  width: 800,\n  height: 600,\n  backgroundColor: \"#dbcf8b\",\n  physics: {\n    default: 'arcade',\n    arcade: {\n      gravity: { y: 0  }\n    }\n  },\n  scene: [_scenes_BootScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _scenes_LoaderScene__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_GameScene__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]\n};\n\n// Bootstrap game\nvar game;\n\n\ngame = new Phaser.Game(config);\n// window.focus();\n// resizeGame();\n// window.addEventListener(\"resize\", resizeGame);\n\n// Cool resizing function that keeps aspect ratio\nfunction resizeGame() {\n  var canvas = document.querySelector(\"canvas\");\n  var windowWidth = window.innerWidth;\n  var windowHeight = window.innerHeight;\n  var windowRatio = windowWidth / windowHeight;\n  var gameRatio = game.config.width / game.config.height;\n  if (windowRatio < gameRatio) {\n    canvas.style.width = windowWidth + \"px\";\n    canvas.style.height = (windowWidth / gameRatio) + \"px\";\n  } else{\n    canvas.style.width = (windowHeight * gameRatio) + \"px\";\n    canvas.style.height = windowHeight + \"px\";\n  }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scenes/BootScene.js":
/*!*********************************!*\
  !*** ./src/scenes/BootScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BootScene; });\n/* harmony import */ var _LoaderScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoaderScene */ \"./src/scenes/LoaderScene.js\");\n// import { Scene } from 'phaser';\n\n\nclass BootScene extends Phaser.Scene {\n\n  constructor(config) {\n    super({ key: 'BootScene' });\n  }\n\n  preload () {\n    console.log(\"(C)bit33.io\\nSpaceinvaders 0.0.4\");\n  }\n\n  create () {\n    let sizeY = this.game.canvas.height;\n    let sizeX = this.game.canvas.width;\n\n    this.loadingText = this.add.text(sizeX / 2, sizeY / 2, 'Loading...');\n    this.loadingText.setOrigin(0.5);\n\n    this.scene.start('LoaderScene');\n  }\n}\n\n\n//# sourceURL=webpack:///./src/scenes/BootScene.js?");

/***/ }),

/***/ "./src/scenes/GameScene.js":
/*!*********************************!*\
  !*** ./src/scenes/GameScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameScene; });\n/* harmony import */ var _GC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GC */ \"./src/GC.js\");\n/* harmony import */ var _Bomb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Bomb */ \"./src/Bomb.js\");\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Bullet */ \"./src/Bullet.js\");\n/* harmony import */ var _AlienManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AlienManager */ \"./src/AlienManager.js\");\n/* harmony import */ var _ScoreManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ScoreManager */ \"./src/ScoreManager.js\");\n/* harmony import */ var _RocketFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RocketFactory */ \"./src/RocketFactory.js\");\n// import { Scene, Phaser } from 'phaser';\n\n\n\n\n\n\n\nclass GameScene extends Phaser.Scene {\n\n  constructor(config) {\n    super({ key: 'GameScene' });\n  }\n\n  create () {\n    this.createText();\n\n    this.level = 1;\n    this.sound.add('explosion');\n    this.sound.add('shoot');\n    this.cursors = this.input.keyboard.createCursorKeys();\n\n    this.rocket = _RocketFactory__WEBPACK_IMPORTED_MODULE_5__[\"default\"].create(this);\n    this.bullets = this.physics.add.group({\n      maxSize: 20,\n      classType: _Bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      runChildUpdate: true\n    });\n\n    this.bombs = this.physics.add.group({\n      maxSize: 20,\n      classType: _Bomb__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      runChildUpdate: true\n    });\n    this.alienManager = new _AlienManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, this.level);\n\n    this.physics.world.on('worldbounds', this.onWorldbounds, this);\n    this.alienManager.addColider(this.bullets, this.alienHitEvent, this);\n    this.alienManager.addColider(this.rocket, this.alienOnRocketEvent, this);\n    this.physics.add.collider(this.rocket, this.bombs, this.bombHitEvent, null, this);\n\n    this.input.keyboard.on(\"keydown\", this.handleKey, this);\n\n    this.scoreManager = new _ScoreManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\n    this.scoreManager.print();\n    this.state = _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].RUN;\n  }\n\n  createText() {\n    const sizeY = this.game.canvas.height;\n    const sizeX = this.game.canvas.width;\n    const textConfig =\n      { fontSize: '44px',  fontFamily: 'Pixel', fill: \"#ffffff\" };\n\n    this.gameoverText = this.add.text(sizeX / 2, sizeY / 2 - 100,\n      'GAME OVER', textConfig)\n      .setVisible(false)\n      .setDepth(1);\n    this.gameoverText.setOrigin(0.5);\n\n    this.beginText = this.add.text(sizeX / 2, (sizeY / 2) - 60,\n     'PRESS ANY KEY FOR NEW GAME', textConfig)\n      .setVisible(false)\n      .setDepth(1);\n    this.beginText.setOrigin(0.5);\n  }\n\n  onWorldbounds(body) {\n    const isBullet = this.bullets.contains(body.gameObject);\n    if (isBullet) {\n      body.gameObject.deactivate();\n    }\n\n    const isBomb = this.bombs.contains(body.gameObject);\n    if (isBomb) {\n      body.gameObject.deactivate();\n    }\n\n    if (this.state == _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].RUN) {\n      if (this.alienManager.onWorldbounds(body)) {\n        this.gameover();\n      }\n    };\n  };\n\n  update() {\n    this.handleCursor();\n  }\n\n  handleCursor() {\n    if (this.state == _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].RUN) {\n      if (this.cursors.left.isDown) {\n        this.rocket.setVelocityX(-160);\n      } else if (this.cursors.right.isDown) {\n        this.rocket.setVelocityX(160);\n      } else {\n        this.rocket.setVelocityX(0);\n      }\n    } else {\n      this.rocket.setVelocityX(0);\n    }\n  }\n\n  handleKey(e){\n    switch(this.state) {\n      case _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].RUN:\n        if(e.code == \"Space\") {\n           this.fireBullet();\n        }\n        break;\n      case _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].READY:\n        this.restartGame();\n        break;\n    }\n  }\n\n  fireBullet() {\n    const bullet = this.bullets.get();\n    if (bullet) {\n      bullet.shoot(this.rocket.x-1, this.rocket.y-18);\n    }\n  }\n\n  alienHitEvent(alien, bullet) {\n    if (this.state == _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].RUN && alien.active && bullet.active) {\n      bullet.deactivate();\n      alien.explode();\n      this.scoreManager.point();\n      if (this.alienManager.testAllAliensDead()) {\n        this.levelUp();\n      }\n    }\n  }\n\n  alienOnRocketEvent(alien, rocket) {\n    if (this.state == _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].RUN && alien.active) {\n      this.gameover();\n    }\n  }\n\n  bombHitEvent(rocket, bomb) {\n    if (this.state == _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].RUN && bomb.active) {\n      this.gameover();\n    }\n  }\n\n  levelUp() {\n    this.level++;\n    this.time.addEvent(\n      { delay: 2000, callback: this.restart(), callbackScope: this});﻿﻿\n  }\n\n  restart() {\n    this.alienManager.restart(this.level);\n  }\n\n  gameover() {\n    this.state = _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].GAMEOVER;\n    this.sound.play('explosion');\n    this.rocket.play('explosion');\n    this.time.removeAllEvents();\n    this.alienManager.gameover();\n    this.bullets.getChildren().forEach(\n      function(bullet) { bullet.deactivate(); }\n    );\n    this.bombs.setVelocityX(0);\n    this.bombs.setVelocityY(0);\n    this.gameoverText.setVisible(true);\n    this.aliensStartVelocity = 40;\n\n    this.time.addEvent({\n      delay: 3000,\n      callback: function() { this.ready(); },\n      callbackScope: this\n    });\n  }\n\n  ready() {\n    this.state = _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].READY;\n    this.beginText.setVisible(true);\n  }\n\n  restartGame() {\n    this.state = _GC__WEBPACK_IMPORTED_MODULE_0__[\"STATE\"].RUN;\n    this.level = 1;\n    this.scoreManager.setHiScore();\n\n    this.rocket.play('rocket');\n    this.beginText.setVisible(false);\n    this.gameoverText.setVisible(false);\n    this.bombs.getChildren().forEach(\n      function(bomb) { bomb.deactivate(); }\n    );\n    this.restart();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/scenes/GameScene.js?");

/***/ }),

/***/ "./src/scenes/LoaderScene.js":
/*!***********************************!*\
  !*** ./src/scenes/LoaderScene.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoaderScene; });\n/* harmony import */ var _GC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GC */ \"./src/GC.js\");\n// import { Scene } from 'phaser';\n\n\nclass LoaderScene extends Phaser.Scene {\n\n  constructor(config) {\n    super({ key: 'LoaderScene' });\n  }\n\n  preload () {\n    this.load.spritesheet('graphic', 'assets/spaceinvaders.png', {\n      frameWidth: 13*4,\n      frameHeight: 9*4\n    });\n    this.load.spritesheet('bomb', 'assets/bomb.png', {\n      frameWidth: 3*4,\n      frameHeight: 27//7*4\n    });\n\n    this.load.image('bullet', 'assets/bullet.png');\n    this.load.audio('explosion', 'assets/audio/explosions.wav');\n    this.load.audio('shoot', 'assets/audio/shoot.wav');\n  }\n\n  create () {\n    this.animFactory();\n    this.scene.start('GameScene');\n  }\n\n  animFactory() {\n    this.alienAnimFactory(_GC__WEBPACK_IMPORTED_MODULE_0__[\"GC\"].ALIEN_1);\n    this.alienAnimFactory(_GC__WEBPACK_IMPORTED_MODULE_0__[\"GC\"].ALIEN_2);\n    this.alienAnimFactory(_GC__WEBPACK_IMPORTED_MODULE_0__[\"GC\"].ALIEN_3);\n\n    this.anims.create({\n      key: 'explosion',\n      frames: this.anims.generateFrameNumbers('graphic', {start: 7, end: 7 }),\n      frameRate: 1,\n      repeat: 1\n    });\n\n    this.anims.create({\n      key: 'rocket',\n      frames: this.anims.generateFrameNumbers('graphic',\n        {start: _GC__WEBPACK_IMPORTED_MODULE_0__[\"GC\"].ROCKET, end: _GC__WEBPACK_IMPORTED_MODULE_0__[\"GC\"].ROCKET }),\n      frameRate: 0,\n      repeat: 0\n    });\n\n    this.anims.create({\n      key: 'bomb',\n      frames: this.anims.generateFrameNumbers('bomb', {start: 0, end: 1 }),\n      frameRate: 6,\n      repeat: -1\n    });\n  }\n\n  alienAnimFactory(alienType) {\n    this.anims.create({\n        key: 'alien' + alienType,\n        frames: this.anims.generateFrameNumbers('graphic',\n          { start: alienType, end: alienType + 1 }),\n        frameRate: 2.5,\n        repeat: -1\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/scenes/LoaderScene.js?");

/***/ })

/******/ });
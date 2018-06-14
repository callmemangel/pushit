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
/******/ 	return __webpack_require__(__webpack_require__.s = "./all-tests.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./all-tests.js":
/*!**********************!*\
  !*** ./all-tests.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("context = __webpack_require__(\"./tests sync recursive \\\\.js$\");\ncontext.keys().forEach(context);\nmodule.exports = context;\n\n//# sourceURL=webpack:///./all-tests.js?");

/***/ }),

/***/ "./tests sync recursive \\.js$":
/*!**************************!*\
  !*** ./tests sync \.js$ ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./gameObject.test.js\": \"./tests/gameObject.test.js\",\n\t\"./playerObject.test.js\": \"./tests/playerObject.test.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./tests sync recursive \\\\.js$\";\n\n//# sourceURL=webpack:///./tests_sync_\\.js$?");

/***/ }),

/***/ "./tests/gameObject.test.js":
/*!**********************************!*\
  !*** ./tests/gameObject.test.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/game/gameObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ \"assert\");\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\ndescribe('game object tets', function () {\n  it('should get coords of all players', function () {\n    let game = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/game/gameObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('a123', 'single');\n\n    let player0 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n    let player1 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 1);\n    let player2 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 2);\n    let player3 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 3);\n\n    let trueCoords = [player0.x, player0.y, player1.x, player1.y, player2.x, player2.y, player3.x, player3.y];\n\n    let coords = game.getAllCoords();\n\n    let isTrue = true;\n\n    for (let i = 0; i < trueCoords.length; i++) {\n      if (trueCoords.length !== coords.length) {\n        isTrue = false;\n        continue;\n      }\n\n      if (trueCoords[i] !== coords[i]) {\n        isTrue = false;\n      }\n    }\n\n    assert__WEBPACK_IMPORTED_MODULE_1___default.a.equal(isTrue, true);\n  });\n  it('should get coords of all players (undefined test)', function () {\n    let game = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/game/gameObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('a123', 'single');\n\n    let player0 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n    let player1 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 1);\n    let player2 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 2);\n    let player3 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 3);\n\n    delete game.players[2];\n\n    let trueCoords = [player0.x, player0.y, player1.x, player1.y, undefined, undefined, player3.x, player3.y];\n\n    let coords = game.getAllCoords();\n\n    let isTrue = true;\n\n    for (let i = 0; i < trueCoords.length; i++) {\n      if (trueCoords.length !== coords.length) {\n        isTrue = false;\n        continue;\n      }\n\n      if (trueCoords[i] !== coords[i]) {\n        isTrue = false;\n      }\n    }\n\n    assert__WEBPACK_IMPORTED_MODULE_1___default.a.equal(isTrue, true);\n  });\n});\n\n//# sourceURL=webpack:///./tests/gameObject.test.js?");

/***/ }),

/***/ "./tests/playerObject.test.js":
/*!************************************!*\
  !*** ./tests/playerObject.test.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ \"assert\");\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\ndescribe('player object test', function () {\n\n  it('on creation should pass himself to array', function () {\n    let game = {\n      players: []\n    };\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game);\n    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(game.players.length, 1);\n  });\n\n  it('first player should have x = 40, y = 40', function () {\n    let game = {\n      players: []\n    };\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game);\n    assert__WEBPACK_IMPORTED_MODULE_0___default()(player.x === 40 && player.y === 40);\n  });\n\n  it('second player should have x = 745, y = 40', function () {\n    let game = {\n      players: []\n    };\n    let player1 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game);\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game);\n    assert__WEBPACK_IMPORTED_MODULE_0___default()(player.x === 745 && player.y === 40);\n  });\n\n  it('third player should have x = 40, y = 525', function () {\n    let game = {\n      players: []\n    };\n    let player3 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 2);\n    let player2 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 2);\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 2);\n    assert__WEBPACK_IMPORTED_MODULE_0___default()(player.x === 40 && player.y === 525);\n  });\n\n  it('forth player should have x = 745, y = 525', function () {\n    let game = {\n      players: []\n    };\n    let player3 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 3);\n    let player2 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 3);\n    let player1 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 3);\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 3);\n    assert__WEBPACK_IMPORTED_MODULE_0___default()(player.x === 745 && player.y === 525);\n  });\n\n  it('should set death when left side under the field', function () {\n    let game = {\n      players: []\n    };\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n    player.x = -81;\n    player.y = 20;\n    player.size = 80;\n    assert__WEBPACK_IMPORTED_MODULE_0___default()(player.checkDeath());\n  });\n\n  it('should not set death when left side on the field', function () {\n    let game = {\n      players: [],\n      fieldW: 870,\n      fieldH: 640\n    };\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n    player.x = -79;\n    player.y = 20;\n\n    assert__WEBPACK_IMPORTED_MODULE_0___default()(!player.checkDeath());\n  });\n\n  it('should set death when right side out of the field', function () {\n    let game = {\n      players: [],\n      fieldW: 870,\n      fieldH: 640\n    };\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n    player.x = 871;\n    player.y = 20;\n    player.size = 80;\n\n    assert__WEBPACK_IMPORTED_MODULE_0___default()(player.checkDeath());\n  });\n\n  it('should return intersect = true when cell is inside', function () {\n    let game = {\n      players: []\n    };\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n\n    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(player.isIntersect(40, 40), true);\n  });\n\n  function makeIntersectTest(corner) {\n    let cell = {};\n    switch (corner) {\n      case 0:\n        cell.x = 39;\n        cell.y = 39;\n        break;\n      case 1:\n        cell.x = 120;\n        cell.y = 39;\n        break;\n      case 2:\n        cell.x = 120;\n        cell.y = 120;\n        break;\n      case 3:\n        cell.x = 39;\n        cell.y = 120;\n        break;\n    }\n    it(`should return intersect = false when cell with x = ${cell.x}, y = ${cell.y} is outside`, function () {\n      let game = {\n        players: []\n      };\n      let player0 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n\n      assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(player0.isIntersect(cell.x, cell.y), false);\n    });\n  }\n\n  for (let i = 0; i < 4; i++) {\n    makeIntersectTest(i);\n  }\n  function makeCollisionTest(corner) {\n    let game = {\n      players: []\n    };\n    let player0 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n    let player1 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 1);\n    it(\"should get collision on \" + corner + \" corner\", function () {\n      switch (corner) {\n        case 0:\n          player1.x = 40 - 70;\n          player1.y = 40 - 70;\n          break;\n        case 1:\n          player1.x = 40 + 70;\n          player1.y = 40 - 70;\n        case 2:\n          player1.x = 40 + 70;\n          player1.y = 40 + 70;\n        case 3:\n          player1.x = 40 - 70;\n          player1.y = 40 + 70;\n      }\n      assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(player0.checkCollision().length, 1);\n    });\n  }\n\n  for (var i = 0; i < 4; i++) {\n    makeCollisionTest(i);\n  }\n  it('should change coord on push move', function () {\n    let game = {\n      players: [],\n      fieldW: 870,\n      fieldH: 640,\n      sendCoords: function () {}\n    };\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n\n    player.vector = 'right';\n\n    player.push(10);\n\n    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(player.x, 50);\n  });\n  function makePushCollisionTest1P(vector) {\n    let game = {\n      players: [],\n      fieldW: 870,\n      fieldH: 640,\n      sendCoords: function () {}\n    };\n    let player0 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game);\n    let player1 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game);\n\n    player1.x = player0.x;\n    player1.y = player0.y;\n\n    player0.vector = vector;\n\n    let expected;\n    let moveWidth = 10;\n\n    switch (vector) {\n      case 'up':\n        player1.y = player0.y - 80;\n        expected = player1.y - moveWidth;\n        break;\n      case 'right':\n        player1.x = player0.x + 80;\n        expected = player1.x + moveWidth;\n        break;\n      case 'down':\n        player1.y = player0.y + 80;\n        expected = player1.y + moveWidth;\n        break;\n      case 'left':\n        player1.x = player0.y - 80;\n        expected = player1.x - moveWidth;\n        break;\n    }\n\n    it(`should change coord of second player on ${vector} collision`, function () {\n\n      player0.push(moveWidth);\n\n      assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(vector == 'down' || vector == 'up' ? player1.y : player1.x, expected);\n    });\n  }\n\n  makePushCollisionTest1P('up');\n  makePushCollisionTest1P('right');\n  makePushCollisionTest1P('left');\n  makePushCollisionTest1P('down');\n\n  function makePushCollisionTest2P(vector) {\n    let game = {\n      players: [],\n      fieldW: 870,\n      fieldH: 640,\n      sendCoords: function () {}\n    };\n\n    let player0 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game);\n    let player1 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game);\n    let player2 = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game);\n\n    player1.x = player0.x;\n    player1.y = player0.y;\n\n    player2.x = player0.x;\n    player2.y = player0.y;\n\n    player0.vector = vector;\n\n    let expected;\n    let moveWidth = 10;\n\n    switch (vector) {\n      case 'up':\n        player0.y = 500;\n        player1.y = player0.y - 80;\n        player2.y = player1.y - 80;\n        expected = player2.y - moveWidth;\n        break;\n      case 'right':\n        player1.x = player0.x + 80;\n        player2.x = player1.x + 80;\n        expected = player2.x + moveWidth;\n        break;\n      case 'down':\n        player1.y = player0.y + 80;\n        player2.y = player1.y + 80;\n        expected = player2.y + moveWidth;\n        break;\n      case 'left':\n        player0.x = 700;\n        player1.x = player0.x - 80;\n        player2.x = player1.x - 80;\n        expected = player2.x - moveWidth;\n        break;\n    }\n\n    it(`should change coord of third player on ${vector} collision`, function () {\n\n      player0.push(moveWidth);\n\n      assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(vector == 'down' || vector == 'up' ? player2.y : player2.x, expected);\n    });\n  }\n\n  makePushCollisionTest2P('up');\n  makePushCollisionTest2P('right');\n  makePushCollisionTest2P('down');\n  makePushCollisionTest2P('left');\n\n  it('should stop move on stopMove', function () {\n    let game = {\n      players: [],\n      fieldW: 870,\n      fieldH: 640,\n      sendCoords: function () {}\n    };\n\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n\n    player.startMove('left');\n    player.stopMove();\n\n    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(player.x, 30);\n  });\n\n  it('should set death on start move for 10px', function () {\n    let game = {\n      players: [],\n      fieldW: 870,\n      fieldH: 640,\n      sendCoords: function () {}\n    };\n\n    let player = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../src/js/player/playerObj.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(game, 0);\n    player.x = -71;\n\n    player.startMove('left');\n    player.stopMove('left');\n    assert__WEBPACK_IMPORTED_MODULE_0___default.a.equal(player.checkDeath(), true);\n  });\n});\n\n//# sourceURL=webpack:///./tests/playerObject.test.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ })

/******/ });
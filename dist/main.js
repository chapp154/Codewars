/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Katas/lostKeys.js":
/*!*******************************!*\
  !*** ./src/Katas/lostKeys.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"whoTookTheCarKey\": () => /* binding */ whoTookTheCarKey\n/* harmony export */ });\nconst whoTookTheCarKey = (message) => {\n\n    let result = [];\n    message.forEach(binaryNo => result.push(String.fromCharCode(parseInt(binaryNo, 2))));\n\n    return result.join(\"\");\n}\n\n//# sourceURL=webpack://codewars/./src/Katas/lostKeys.js?");

/***/ }),

/***/ "./src/Katas/pirateGold.js":
/*!*********************************!*\
  !*** ./src/Katas/pirateGold.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"amaroPlan\": () => /* binding */ amaroPlan\n/* harmony export */ });\nconst amaroPlan = (pirateNum) => {\n    const coins = pirateNum * 20;\n    let shares = [];\n    const rewarded = pirateNum % 2 == 0 ? pirateNum / 2 : pirateNum / 2 + .5;\n    const cptCut = coins - rewarded + 1;\n\n    for (let i = 0; i < pirateNum; i++) {\n        i === 0 ? shares.push(cptCut) : \n        i % 2 == 0 ? shares.push(1) :\n        shares.push(0);\n    }\n\n    return shares;\n}\n\n\n\n\n\n//# sourceURL=webpack://codewars/./src/Katas/pirateGold.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Katas_pirateGold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Katas/pirateGold */ \"./src/Katas/pirateGold.js\");\n/* harmony import */ var _Katas_lostKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Katas/lostKeys */ \"./src/Katas/lostKeys.js\");\n\n\n\n// Pirates coin share https://www.codewars.com/kata/59e77930233243a7b7000026/train/javascript\nconsole.log((0,_Katas_pirateGold__WEBPACK_IMPORTED_MODULE_0__.amaroPlan)(57));\n\n// Lost car keys https://www.codewars.com/kata/57a23c2acf1fa514d0001034/train/javascript\nconsole.log((0,_Katas_lostKeys__WEBPACK_IMPORTED_MODULE_1__.whoTookTheCarKey)(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']));\n\n\n//# sourceURL=webpack://codewars/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Katas/BankersPlan.js":
/*!**********************************!*\
  !*** ./src/Katas/BankersPlan.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fortune\": () => (/* binding */ fortune)\n/* harmony export */ });\nfunction fortune(f0, p, c0, n, i, yearsCounter = 0) {\n\n\tconst budget = Math.floor(parseFloat(f0 + (p / 100) * f0 - c0)) ;\n\tconst toTake = Math.floor(parseFloat(c0 + (i / 100) * c0)) ;\n\tconst balanceCheck = (budget % c0);\n\n\tyearsCounter++;\n\n\tconsole.log(yearsCounter, budget, toTake);\n\n\tif (budget >= toTake && yearsCounter < n) {\n\t\treturn fortune(budget, p, toTake, n, i, yearsCounter);\n\n\t} else {\n\t\treturn yearsCounter === n;\n\t}\n\n\n}\n\n\n\n\n// John has some amount of money of which he wants to deposit a part f0 to the bank at the beginning of year 1. He wants to withdraw each year for his living an amount c0.\n\n// Here is his banker plan:\n\n// deposit f0 at beginning of year 1\n// his bank account has an interest rate of p percent per year, constant over the years\n// John can withdraw each year c0, taking it whenever he wants in the year; he must take account of an inflation of i percent per year in order to keep his quality of living. i is supposed to stay constant over the years.\n// all amounts f0..fn-1, c0..cn-1 are truncated by the bank to their integral part\n// Given f0, p, c0, i the banker guarantees that John will be able to go on that way until the nth year.\n// Example:\n// f0 = 100000, p = 1 percent, c0 = 2000, n = 15, i = 1 percent\n\n// beginning of year 2 -> f1 = 100000 + 0.01*100000 - 2000 = 99000;  c1 = c0 + c0*0.01 = 2020 (with inflation of previous year)\n\n// beginning of year 3 -> f2 =  99000 + 0.01*99000 - 2020  = 97970;  c2 = c1 + c1*0.01 = 2040.20 \n// (with inflation of previous year, truncated to 2040)\n\n// beginning of year 4 -> f3 =  97970 + 0.01*97970 - 2040  = 96909.7 (truncated to 96909); \n// c3 = c2 + c2*0.01 = 2060.4 (with inflation of previous year, truncated to 2060)\n// and so on...\n\n// John wants to know if the banker's plan is right or wrong. Given parameters f0, p, c0, n, i build a function fortune which returns true if John can make a living until the nth year and false if it is not possible.\n\n// Some cases:\n// fortune(100000, 1, 2000, 15, 1) -> True\n// fortune(100000, 1, 10000, 10, 1) -> True\n// fortune(100000, 1, 9185, 12, 1) -> False\n\n// For the last case you can find below the amounts of his account at the beginning of each year:\n// 100000, 91815, 83457, 74923, 66211, 57318, 48241, 38977, 29523, 19877, 10035, -5\n// f11 = -5 so he has no way to withdraw something for his living in year 12.\n// Note:\n// Don't forget to convert the percent parameters as percentages in the body of your function: if a parameter percent is 2 you have to convert it to 0.02.\n\n//# sourceURL=webpack://codewars/./src/Katas/BankersPlan.js?");

/***/ }),

/***/ "./src/Katas/lostKeys.js":
/*!*******************************!*\
  !*** ./src/Katas/lostKeys.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"whoTookTheCarKey\": () => (/* binding */ whoTookTheCarKey)\n/* harmony export */ });\nconst whoTookTheCarKey = (message) => {\n\n    let result = [];\n    message.forEach(binaryNo => result.push(String.fromCharCode(parseInt(binaryNo, 2))));\n\n    return result.join(\"\");\n}\n\n//# sourceURL=webpack://codewars/./src/Katas/lostKeys.js?");

/***/ }),

/***/ "./src/Katas/pirateGold.js":
/*!*********************************!*\
  !*** ./src/Katas/pirateGold.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"amaroPlan\": () => (/* binding */ amaroPlan)\n/* harmony export */ });\nconst amaroPlan = (pirateNum) => {\n    const coins = pirateNum * 20;\n    let shares = [];\n    const rewarded = pirateNum % 2 == 0 ? pirateNum / 2 : pirateNum / 2 + .5;\n    const cptCut = coins - rewarded + 1;\n\n    for (let i = 0; i < pirateNum; i++) {\n        i === 0 ? shares.push(cptCut) : \n        i % 2 == 0 ? shares.push(1) :\n        shares.push(0);\n    }\n\n    return shares;\n}\n\n\n\n\n\n//# sourceURL=webpack://codewars/./src/Katas/pirateGold.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Katas_pirateGold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Katas/pirateGold */ \"./src/Katas/pirateGold.js\");\n/* harmony import */ var _Katas_lostKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Katas/lostKeys */ \"./src/Katas/lostKeys.js\");\n/* harmony import */ var _Katas_BankersPlan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Katas/BankersPlan */ \"./src/Katas/BankersPlan.js\");\n\n\n\n\n// Pirates coin share https://www.codewars.com/kata/59e77930233243a7b7000026/train/javascript\n//console.log(amaroPlan(57), \"kejk\");\n\n// Lost car keys https://www.codewars.com/kata/57a23c2acf1fa514d0001034/train/javascript\n//console.log(whoTookTheCarKey(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']));\n\n// Bankers plan\nconsole.log((0,_Katas_BankersPlan__WEBPACK_IMPORTED_MODULE_2__.fortune)(100000, 1, 2000, 15, 1));\n\n//# sourceURL=webpack://codewars/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
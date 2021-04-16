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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fortune\": () => (/* binding */ fortune)\n/* harmony export */ });\nfunction fortune(f0, p, c0, n, i, yearsCounter = 1) {\r\n\r\n\tconst budget = Math.floor(parseFloat(f0 + (p / 100) * f0 - c0)) ;\r\n\tconst toTake = Math.floor(parseFloat(c0 + (i / 100) * c0)) ;\r\n\r\n\tyearsCounter++;\r\n\r\n\tif (budget >= toTake && yearsCounter < n) {return fortune(budget, p, toTake, n, i, yearsCounter)} \r\n\telse {return yearsCounter === n};\r\n}\r\n\r\n\r\n\r\n\r\n// John has some amount of money of which he wants to deposit a part f0 to the bank at the beginning of year 1. He wants to withdraw each year for his living an amount c0.\r\n\r\n// Here is his banker plan:\r\n\r\n// deposit f0 at beginning of year 1\r\n// his bank account has an interest rate of p percent per year, constant over the years\r\n// John can withdraw each year c0, taking it whenever he wants in the year; he must take account of an inflation of i percent per year in order to keep his quality of living. i is supposed to stay constant over the years.\r\n// all amounts f0..fn-1, c0..cn-1 are truncated by the bank to their integral part\r\n// Given f0, p, c0, i the banker guarantees that John will be able to go on that way until the nth year.\r\n// Example:\r\n// f0 = 100000, p = 1 percent, c0 = 2000, n = 15, i = 1 percent\r\n\r\n// beginning of year 2 -> f1 = 100000 + 0.01*100000 - 2000 = 99000;  c1 = c0 + c0*0.01 = 2020 (with inflation of previous year)\r\n\r\n// beginning of year 3 -> f2 =  99000 + 0.01*99000 - 2020  = 97970;  c2 = c1 + c1*0.01 = 2040.20 \r\n// (with inflation of previous year, truncated to 2040)\r\n\r\n// beginning of year 4 -> f3 =  97970 + 0.01*97970 - 2040  = 96909.7 (truncated to 96909); \r\n// c3 = c2 + c2*0.01 = 2060.4 (with inflation of previous year, truncated to 2060)\r\n// and so on...\r\n\r\n// John wants to know if the banker's plan is right or wrong. Given parameters f0, p, c0, n, i build a function fortune which returns true if John can make a living until the nth year and false if it is not possible.\r\n\r\n// Some cases:\r\n// fortune(100000, 1, 2000, 15, 1) -> True\r\n// fortune(100000, 1, 10000, 10, 1) -> True\r\n// fortune(100000, 1, 9185, 12, 1) -> False\r\n\r\n// For the last case you can find below the amounts of his account at the beginning of each year:\r\n// 100000, 91815, 83457, 74923, 66211, 57318, 48241, 38977, 29523, 19877, 10035, -5\r\n// f11 = -5 so he has no way to withdraw something for his living in year 12.\r\n// Note:\r\n// Don't forget to convert the percent parameters as percentages in the body of your function: if a parameter percent is 2 you have to convert it to 0.02.\n\n//# sourceURL=webpack://codewars/./src/Katas/BankersPlan.js?");

/***/ }),

/***/ "./src/Katas/englishBeggars.js":
/*!*************************************!*\
  !*** ./src/Katas/englishBeggars.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"beggars\": () => (/* binding */ beggars)\n/* harmony export */ });\nfunction beggars(values, n){\r\n\r\n\tif(n === 0) return [];\r\n\t\r\n\tlet turn = 0;\r\n\tlet result = [];\r\n\tresult.length = n;\r\n\tresult.fill(0, 0, n);\r\n\t\r\n\tvalues.forEach(value => {\r\n\r\n\t\tturn < n ? turn++ : turn = 1;\r\n\t\tresult[turn - 1] += value;\r\n\t});\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\n//   beggars([1,2,3,4,5, 4, 6, 8, 1, 6],3);\r\n\r\n\r\n// Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.\r\n\r\n// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].\r\n\r\n// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].\r\n\r\n// Also note that not all beggars have to take the same amount of \"offers\", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).\r\n\r\n// Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)\r\n\r\n// Note 2: do not modify the input array.\n\n//# sourceURL=webpack://codewars/./src/Katas/englishBeggars.js?");

/***/ }),

/***/ "./src/Katas/lostKeys.js":
/*!*******************************!*\
  !*** ./src/Katas/lostKeys.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"whoTookTheCarKey\": () => (/* binding */ whoTookTheCarKey)\n/* harmony export */ });\nconst whoTookTheCarKey = (message) => {\r\n\r\n    let result = [];\r\n    message.forEach(binaryNo => result.push(String.fromCharCode(parseInt(binaryNo, 2))));\r\n\r\n    return result.join(\"\");\r\n}\n\n//# sourceURL=webpack://codewars/./src/Katas/lostKeys.js?");

/***/ }),

/***/ "./src/Katas/pirateGold.js":
/*!*********************************!*\
  !*** ./src/Katas/pirateGold.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"amaroPlan\": () => (/* binding */ amaroPlan)\n/* harmony export */ });\nconst amaroPlan = (pirateNum) => {\r\n    const coins = pirateNum * 20;\r\n    let shares = [];\r\n    const rewarded = pirateNum % 2 == 0 ? pirateNum / 2 : pirateNum / 2 + .5;\r\n    const cptCut = coins - rewarded + 1;\r\n\r\n    for (let i = 0; i < pirateNum; i++) {\r\n        i === 0 ? shares.push(cptCut) : \r\n        i % 2 == 0 ? shares.push(1) :\r\n        shares.push(0);\r\n    }\r\n\r\n    return shares;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://codewars/./src/Katas/pirateGold.js?");

/***/ }),

/***/ "./src/Katas/reverseOrRotate.js":
/*!**************************************!*\
  !*** ./src/Katas/reverseOrRotate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseOrRotate\": () => (/* binding */ reverseOrRotate)\n/* harmony export */ });\nfunction reverseOrRotate(str, sz) {\r\n\r\n\tif (str === \"\" || sz === 0) return \"\";\r\n\r\n\tconst numberOfChunks = str.length / sz;\r\n\tconst splitStr = str.split(\"\");\r\n\tlet chunks = [];\r\n\tlet result = \"\";\r\n\r\n\tfor (let i = 1; i <= numberOfChunks; i++) {\r\n\t\tchunks.push(splitStr.slice(0, sz).map(int => int));\r\n\t\tsplitStr.splice(0, sz);\r\n\t}\r\n\r\n\tchunks.forEach(currArr => {\r\n\t\tconst sum = currArr.reduce((acc, currNo) => acc += parseInt(currNo), 0);\r\n\r\n\t\tif (sum % 2 === 0) {\r\n\t\t\tcurrArr.forEach((curr, index, arr) => result += arr[currArr.length - (index + 1)]);\t\t\t\r\n\t\t} else {\r\n\t\t\tcurrArr.push(currArr[0]);\r\n\t\t\tcurrArr.splice(0, 1);\r\n\t\t\tfor (let currNo of currArr) result += currNo;\r\n\t\t}\r\n\t});\r\n\r\n\treturn result;\r\n}\r\n\r\n\r\n\r\n\r\n//\"66443875\", 4  --> \"44668753\"\n\n//# sourceURL=webpack://codewars/./src/Katas/reverseOrRotate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Katas_pirateGold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Katas/pirateGold */ \"./src/Katas/pirateGold.js\");\n/* harmony import */ var _Katas_lostKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Katas/lostKeys */ \"./src/Katas/lostKeys.js\");\n/* harmony import */ var _Katas_BankersPlan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Katas/BankersPlan */ \"./src/Katas/BankersPlan.js\");\n/* harmony import */ var _Katas_englishBeggars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Katas/englishBeggars */ \"./src/Katas/englishBeggars.js\");\n/* harmony import */ var _Katas_reverseOrRotate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Katas/reverseOrRotate */ \"./src/Katas/reverseOrRotate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Pirates coin share https://www.codewars.com/kata/59e77930233243a7b7000026/train/javascript\r\n//console.log(amaroPlan(57), \"kejk\");\r\n\r\n// Lost car keys https://www.codewars.com/kata/57a23c2acf1fa514d0001034/train/javascript\r\n//console.log(whoTookTheCarKey(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']));\r\n\r\n// Bankers plan\r\n//console.log(fortune(100000, 1, 2000, 15, 1));\r\n\r\n// Beggars\r\n//console.log(beggars([1,2,3,4,5, 4, 6, 8, 1, 6],3)); \r\n\r\n\r\n(0,_Katas_reverseOrRotate__WEBPACK_IMPORTED_MODULE_4__.reverseOrRotate)(\"563000655734469485\", 4);\n\n//# sourceURL=webpack://codewars/./src/index.js?");

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
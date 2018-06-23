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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__(2);
//import './utils'


//{} not an object here, but import syntax!!!


console.log('app.js is running')

console.log(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* square */](5))
console.log(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* add */](10003, 4))
console.log(__WEBPACK_IMPORTED_MODULE_1__person__["b" /* isAdult */](5))
console.log(__WEBPACK_IMPORTED_MODULE_1__person__["a" /* canDrink */](34))

const personAge = 15

console.log(__WEBPACK_IMPORTED_MODULE_1__person__["b" /* isAdult */](personAge));
console.log(__WEBPACK_IMPORTED_MODULE_1__person__["a" /* canDrink */](personAge));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
console.log('utils is running')

//named export directly in variable declaration
const square = (x) => x * x
/* harmony export (immutable) */ __webpack_exports__["b"] = square;


const add = (a, b) => a + b
/* harmony export (immutable) */ __webpack_exports__["a"] = add;


//named exports
//export { square, add }
//{} not an object here!!!

//default
//export default square

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isAdult; });
//shortest way: 
const isAdultShort = (age) => age >= 18 //returns true or false 

const isAdult = (a) => {
    if(a >= 18) {
        return `Person (Age: ${a}) is adult: ${true}`
    } else {
        return `Person  (Age: ${a}) is adult: ${false}`;
    }
}

const canDrink = d => (
    d >= 21 ? `Person (Age: ${d}) can drink: ${true}` : `Person (Age: ${d}) can drink: ${false}`);
/* harmony export (immutable) */ __webpack_exports__["a"] = canDrink;
 




/***/ })
/******/ ]);
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

/***/ "./compareCards.js":
/*!*************************!*\
  !*** ./compareCards.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compareCards: () => (/* binding */ compareCards)\n/* harmony export */ });\nfunction compareCards(cards, cardsSet) {\r\n    let firstCard = \"\"\r\n    let secondCard = \"\"\r\n    let pairs = 0\r\n\r\n    for (let i = 0; i < cards.length; i++) {\r\n        const card = cards[i]\r\n        card.addEventListener(\"click\", (e) => {\r\n            const target = e.target\r\n            target.src = cardsSet[i]\r\n            if (!firstCard) {\r\n                firstCard = cardsSet[i]\r\n            } else {\r\n                secondCard = cardsSet[i]\r\n\r\n                if (firstCard === secondCard) {\r\n                    pairs += 1\r\n\r\n                    if (pairs === cardsSet.length / 2) {\r\n                        alert(\"Вы выиграли!\")\r\n                    }\r\n                } else {\r\n                    alert(\"Вы проиграли!\")\r\n                }\r\n\r\n                firstCard = \"\"\r\n                secondCard = \"\"\r\n            }\r\n        })\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://card-game/./compareCards.js?");

/***/ }),

/***/ "./components/game-page-component.js":
/*!*******************************************!*\
  !*** ./components/game-page-component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderGamePageComponent: () => (/* binding */ renderGamePageComponent)\n/* harmony export */ });\nfunction renderGamePageComponent({ appEl }) {\n    appEl = document.getElementById(\"app\")\n    const appHtml = `\n                    <div class=\"game-page-container\">\n                        <div class=\"header\">\n                        <div class=\"timer\">\n                            <div class=\"time-measure\">\n                                <div class=\"min\">\n                                    <p>min</p>\n                                </div>\n                                <div class=\"sec\">\n                                    <p>sec</p>\n                                </div>\n                            </div>\n                            <div class=\"time\">\n                                <p>00.00</p>\n                            </div>\n                        </div>\n                        <button class=\"start-game-button\">Начать заново</button>\n                        </div>\n                        <div class=\"game-field\">\n                            \n                        </div>\n                    </div>\n                    `\n\n    appEl.innerHTML = appHtml\n}\n                            // <div class=\"ace-spades\"></div>\n                            // <div class=\"king-spades\"></div>\n                            // <div class=\"queen-spades\"></div>\n                            // <div class=\"jack-spades\"></div>\n                            // <div class=\"ten-spades\"></div>\n                            // <div class=\"nine-spades\"></div>\n                            // <div class=\"eight-spades\"></div>\n                            // <div class=\"seven-spades\"></div>\n                            // <div class=\"six-spades\"></div>\n                            // <div class=\"ace-hearts\"></div>\n                            // <div class=\"king-hearts\"></div>\n                            // <div class=\"queen-hearts\"></div>\n                            // <div class=\"jack-hearts\"></div>\n                            // <div class=\"ten-hearts\"></div>\n                            // <div class=\"nine-hearts\"></div>\n                            // <div class=\"eight-hearts\"></div>\n                            // <div class=\"seven-hearts\"></div>\n                            // <div class=\"six-hearts\"></div>\n                            // <div class=\"ace-diamonds\"></div>\n                            // <div class=\"king-diamonds\"></div>\n                            // <div class=\"queen-diamonds\"></div>\n                            // <div class=\"jack-diamonds\"></div>\n                            // <div class=\"ten-diamonds\"></div>\n                            // <div class=\"nine-diamonds\"></div>\n                            // <div class=\"eight-diamonds\"></div>\n                            // <div class=\"seven-diamonds\"></div>\n                            // <div class=\"six-diamonds\"></div>\n                            // <div class=\"ace-clubs\"></div>\n                            // <div class=\"king-clubs\"></div>\n                            // <div class=\"queen-clubs\"></div>\n                            // <div class=\"jack-clubs\"></div>\n                            // <div class=\"ten-clubs\"></div>\n                            // <div class=\"nine-clubs\"></div>\n                            // <div class=\"eight-clubs\"></div>\n                            // <div class=\"seven-clubs\"></div>\n                            // <div class=\"six-clubs\"></div>\n\n//# sourceURL=webpack://card-game/./components/game-page-component.js?");

/***/ }),

/***/ "./components/lvl-page-component.js":
/*!******************************************!*\
  !*** ./components/lvl-page-component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLevelPageComponent: () => (/* binding */ renderLevelPageComponent)\n/* harmony export */ });\nfunction renderLevelPageComponent({ appEl }) {\n    const appHtml = `\n                    <div class=\"page-container\">\n                    <div class=\"lvl-box\"> \n                    <div class=\"lvl-box-title\">Выбери сложность</div> \n                    <div class=\"lvl-box-numbers\">\n                    <input type=\"radio\" id=\"radioButLvL1\" value=\"1\" name=\"radioBtn\">\n                        <label for=\"radioButLvL1\">1</label>\n                    <input type=\"radio\" id=\"radioButLvL2\" value=\"2\" name=\"radioBtn\">\n                        <label for=\"radioButLvL2\">2</label>\n                    <input type=\"radio\" id=\"radioButLvL3\" value=\"3\" name=\"radioBtn\">\n                        <label for=\"radioButLvL3\">3</label>\n                    </div>\n                    <button class=\"start-button\">Старт</button>\n                    </div>\n                    </div>\n                    `;\n\n    appEl.innerHTML = appHtml;\n}\n\n\n//# sourceURL=webpack://card-game/./components/lvl-page-component.js?");

/***/ }),

/***/ "./global.js":
/*!*******************!*\
  !*** ./global.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.js */ \"./pages.js\");\n/* harmony import */ var _components_lvl_page_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lvl-page-component.js */ \"./components/lvl-page-component.js\");\n/* harmony import */ var _components_game_page_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game-page-component.js */ \"./components/game-page-component.js\");\n/* harmony import */ var _compareCards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compareCards.js */ \"./compareCards.js\");\n\n\n\n\n\n\nconst appEl = document.getElementById(\"app\")\nlet page = _pages_js__WEBPACK_IMPORTED_MODULE_0__.LVL_PAGE\nconst renderApp = () => {\n    if (page === _pages_js__WEBPACK_IMPORTED_MODULE_0__.LVL_PAGE) {\n        return (0,_components_lvl_page_component_js__WEBPACK_IMPORTED_MODULE_1__.renderLevelPageComponent)({ appEl })\n    }\n}\n\nrenderApp()\n\nconst suits = [\"clubs\", \"diamonds\", \"hearts\", \"spades\"]\nconst ranks = [\n    \"ace\",\n    \"king\",\n    \"queen\",\n    \"jack\",\n    \"ten\",\n    \"nine\",\n    \"eight\",\n    \"seven\",\n    \"six\",\n]\n\nconst radios = document.querySelectorAll(\"input\")\nconst startButton = document.querySelector(\".start-button\")\nconst pageContainer = document.querySelector(\".page-container\")\nstartButton.addEventListener(\"click\", () => {\n    let lvlSelected = 0\n    for (const radio of radios) {\n        if (radio.checked === true) {\n            lvlSelected = radio.value\n        }\n    }\n    let cardsQuantity = 0\n    if (lvlSelected === \"1\") {\n        cardsQuantity = 3\n    } else if (lvlSelected === \"2\") {\n        cardsQuantity = 6\n    } else if (lvlSelected === \"3\") {\n        cardsQuantity = 9\n    }\n    page = _pages_js__WEBPACK_IMPORTED_MODULE_0__.GAME_PAGE\n    appEl.innerHTML = \"\"\n    console.log(\"нажал\" + \" \" + lvlSelected)\n    renderGamePage(cardsQuantity)\n    let cardsSet = []\n\n    // заполняем массив парами карт\n    for (let i = 0; i < cardsQuantity; i++) {\n        const randomSuit = Math.floor(Math.random() * 4)\n        const randomRank = Math.floor(Math.random() * 9)\n\n        const firstEl =\n            \"../static/img/\" +\n            ranks[randomRank] +\n            \"_\" +\n            suits[randomSuit] +\n            \".jpg\"\n        const secondEl =\n            \"../static/img/\" +\n            ranks[randomRank] +\n            \"_\" +\n            suits[randomSuit] +\n            \".jpg\"\n        cardsSet.push(firstEl, secondEl)\n    }\n\n    shuffle(cardsSet)\n    shuffle(cardsSet)\n    shuffle(cardsSet)\n    shuffle(cardsSet)\n    shuffle(cardsSet)\n\n    // перемешиваем массив\n    function shuffle(arr) {\n        for (let i = arr.length - 1; i > 0; i--) {\n            let j = Math.floor(Math.random() * (i + 1))\n            ;[arr[i], arr[j]] = [arr[j], arr[i]]\n        }\n    }\n    const gameField = document.querySelector(\".game-field\")\n    for (let i = 0; i < cardsSet.length; i++) {\n        const elem = document.createElement(\"img\")\n        elem.src = cardsSet[i]\n        elem.classList.add(\"card\")\n        gameField.appendChild(elem)\n    }\n    const cards = gameField.querySelectorAll(\".card\")\n    // скрываем карты через 5сек\n    function hideCards() {\n        cards.forEach((card) => {\n            card.src = \"../static/img/backCards.jpg\"\n        })\n    }\n\n    setTimeout(hideCards, 5000)\n\n    ;(0,_compareCards_js__WEBPACK_IMPORTED_MODULE_3__.compareCards)(cards, cardsSet)\n})\n\nconst renderGamePage = (Quantity) => {\n    const appDiv = document.createElement(\"div\")\n    appDiv.setAttribute(\"id\", \"app\")\n    pageContainer.appendChild(appDiv)\n    ;(0,_components_game_page_component_js__WEBPACK_IMPORTED_MODULE_2__.renderGamePageComponent)({ appDiv })\n    console.log(Quantity)\n}\n\n\n//# sourceURL=webpack://card-game/./global.js?");

/***/ }),

/***/ "./pages.js":
/*!******************!*\
  !*** ./pages.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_PAGE: () => (/* binding */ GAME_PAGE),\n/* harmony export */   LVL_PAGE: () => (/* binding */ LVL_PAGE)\n/* harmony export */ });\nconst LVL_PAGE = \"lvl\"\nconst GAME_PAGE = \"game\"\n\n\n//# sourceURL=webpack://card-game/./pages.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./global.js");
/******/ 	
/******/ })()
;
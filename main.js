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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAbout)\n/* harmony export */ });\nfunction createAbout(){\n    const container = document.querySelector('#content');\n   \n    const about = document.querySelector('.about');\n    \n    container.classList.add('active-about');\n    about.removeEventListener('click', createAbout);\n    const description = document.createElement('div');\n    description.classList.add('description');\n    const chefimg = document.createElement('img');\n    chefimg.classList.add('chef');\n    chefimg.src = \"imgs/chef.jpg\";\n    const since = document.createElement('p');\n    since.textContent = \"The Indispensable Address Of Meat For 16 Years\"\n    description.append(since, chefimg);\n\n    const pcontainer = document.createElement('div');\n    const div = document.createElement('div');\n    div.classList.add('aboutdiv');\n    const img = document.createElement('img');\n    img.src= \"imgs/grill.jpg\";\n    const para = document.createElement('p');\n    para.textContent = 'One and Only';\n    const para1 = document.createElement('p');\n    para1.textContent = 'You will taste an exquisite menu';\n    \n    const para2 =document.createElement('p');\n    para2.textContent = \"You will be overwhelmed with fantastic smells\";\n    \n    const para3 = document.createElement('p');\n    para3.textContent = \"Everything you touch will be enchanting\";\n    const para4 = document.createElement('p');\n    para4.textContent = \"Everything you hear will be fascinating\";\n    const para5 = document.createElement('p');\n    para5.textContent=\"You will see glorious people, delightful presentations and incredible shows\"\n    const para6 = document.createElement('p');\n    para6.textContent = \"Be entertained, amused, and pampered\"\n    const para7 = document.createElement('p');\n    para7.textContent =\"Experience luxury dining like never before\";\n    const para8 = document.createElement('p');\n    para8.textContent = \"Guaranteed...\";\n    const para9 = document.createElement('p');\n    para9.textContent = \"All your senses will be fully satisfied\"\n    \n    \n    \n\n \npcontainer.append(para, para1, para2, para3, para4, para5, para6, para7, para8, para9, );\n\ndiv.append(pcontainer, img)\ncontainer.append(description, div);\nreturn container;\n\n\n \n\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\n    const container = document.querySelector('#content');\n    const contactdiv = document.createElement('div');\n    contactdiv.classList.add('contactdiv')\n   \n    const telephone = document.createElement('p');\n    telephone.textContent = '📞 123 456 789';\n    const address = document.createElement('p');\n    address.textContent = '🏠 14216 230th PlSpringfield Gardens, New York(NY), 11413';\n    const location= document.createElement('img');\n    location.src='imgs/location.png';\n    const imgdiv = document.createElement('div');\n    imgdiv.classList.add('imgcontact');\n    imgdiv.append(location)\n    contactdiv.append(telephone, address, imgdiv);\n    container.append(contactdiv);\n    return container;\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\nfunction createHeader(){\n \n    const header = document.createElement('header');\n    const nav = document.createElement('nav');\n    const about = document.createElement('p');\n    about.classList.add('about');\n    about.textContent = \"About\";\n    const menu = document.createElement('p');\n    menu.classList.add('menu');\n    menu.textContent = \"Menu\";\n    const contact = document.createElement('p');\n    contact.classList.add('contact');\n    contact.textContent = \"Contact\";\n    nav.append(about, menu, contact);\n    header.append(nav);\n   \n    \n    about.addEventListener('click', ()=> { \n    \n        clearContent();\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();});\n    menu.addEventListener('click', () => {\n        \n        clearContent();\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();});\n    contact.addEventListener('click', () => {\n        clearContent();\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });    \n   \n    \n   return header;\n\n}\nfunction clearContent() {\n  const container = document.querySelector('#content');\n  container.innerHTML = '';\n}\n\ndocument.body.appendChild(createHeader());\ndocument.body.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu(){\n    const container = document.querySelector('#content');\n    const menu = document.querySelector('.menu');\n    container.classList.add('active-menu')\n    \n    menu.removeEventListener('click', createMenu)\n    const menudiv = document.createElement('div');\n    menudiv.classList.toggle('menudiv');\n    const menuItems = [\"imgs/shish-kebab.jpg\", \"imgs/iskender.jpg\", \"imgs/doner-kebab.jpg\", \"imgs/eggplant-kebab.jpg\", \"imgs/meat.jpg\", \n\"imgs/beef.jpg\", \"imgs/salad.jpg\", \"imgs/baklava.jpg\"];\n    const names = [\"Shish Kebab\", \"Iskender Kebab\", \"Doner Kebab\", \"Eggplant Kebab\", \"Tomahawk\", \"New York Steak\", \"Salad\", \"Baklava\"];\n    const item = document.createElement('div'); \n    const food = document.createElement('img'); \n    const caption= document.createElement('p');\n    caption.classList.add('caption');\n    food.src = menuItems[0];\n    caption.textContent= names[0];\n    item.append(food, caption);\n    menudiv.append(item);\n    const item1 = document.createElement('div'); \n    const food1 = document.createElement('img'); \n    const caption1= document.createElement('p');\n    caption1.classList.add('caption');\n    food1.src = menuItems[1];\n    caption1.textContent= names[1];\n    item1.append(food1, caption1);\n    menudiv.append(item1);\n    const item2 = document.createElement('div'); \n    const food2 = document.createElement('img'); \n    const caption2= document.createElement('p');\n    caption2.classList.add('caption');\n    food2.src = menuItems[2];\n    caption2.textContent= names[2];\n    item2.append(food2, caption2);\n    menudiv.append(item2);\n    const item3 = document.createElement('div'); \n    const food3 = document.createElement('img'); \n    const caption3= document.createElement('p');\n    caption3.classList.add('caption');\n    food3.src = menuItems[3];\n    caption3.textContent= names[3];\n    item3.append(food3, caption3);\n    menudiv.append(item3);\n    const item4 = document.createElement('div'); \n    const food4 = document.createElement('img'); \n    const caption4= document.createElement('p');\n    caption4.classList.add('caption');\n    food4.src = menuItems[4];\n    caption4.textContent= names[4];\n    item4.append(food4, caption4);\n    menudiv.append(item4);\n    const item5 = document.createElement('div'); \n    const food5 = document.createElement('img'); \n    const caption5= document.createElement('p');\n    caption5.classList.add('caption');\n    food5.src = menuItems[5];\n    caption5.textContent= names[5];\n    item5.append(food5, caption5);\n    menudiv.append(item5);\n    const item6 = document.createElement('div'); \n    const food6 = document.createElement('img'); \n    const caption6= document.createElement('p');\n    caption6.classList.add('caption');\n    food6.src = menuItems[6];\n    caption6.textContent= names[6];\n    item6.append(food6, caption6);\n    menudiv.append(item6);\n    const item7 = document.createElement('div'); \n    const food7 = document.createElement('img'); \n    const caption7= document.createElement('p');\n    caption7.classList.add('caption');\n    food7.src = menuItems[7];\n    caption7.textContent= names[7];\n    item7.append(food7, caption7);\n    menudiv.append(item7);\n\n\n\ncontainer.appendChild(menudiv);\n\n\nreturn container;\n\n   } \n   \n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
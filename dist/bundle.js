/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (() => {

eval("/* menu */\r\nconst menuBtn = document.querySelector('#menu');\r\nconst navbar = document.querySelector('.navbar');\r\nconst item = document.querySelector('.item');\r\n\r\nmenuBtn.addEventListener('click', function(){\r\n    menuBtn.classList.toggle('fa-times');\r\n    navbar.classList.toggle('nav-toggle');\r\n});\r\n\r\n/* Slides the images */\r\n\r\nconst slides = document.querySelectorAll('.slide');\r\nconst next = document.querySelector('#next');\r\nconst prev = document.querySelector('#prev');\r\nconst auto = false;\r\nconst intervalTime = 5000;\r\nlet slideInterval;\r\n\r\nconst nextSlide = () => {\r\n    //Get current class\r\n    const current = document.querySelector('.current');\r\n    //Remove current class\r\n    current.classList.remove('current');\r\n    //Check for next slide\r\n    if(current.nextElementSibling){\r\n        //Add current to next sibling\r\n        current.nextElementSibling.classList.add('current');\r\n    } else {\r\n        //Add current to start\r\n        slides[0].classList.add('current');\r\n    }\r\n    setTimeout(() => current.classList.remove('current'));\r\n}\r\n\r\nconst prevSlide = () => {\r\n    //Get current class\r\n    const current = document.querySelector('.current');\r\n    //Remove current class\r\n    current.classList.remove('current');\r\n    //Check for next slide\r\n    if(current.previousElementSibling){\r\n        //Add current to prev sibling\r\n        current.previousElementSibling.classList.add('current');\r\n    } else {\r\n        //Add current to last\r\n        slides[slides.length - 1].classList.add('current');\r\n    }\r\n    setTimeout(() => current.classList.remove('current'));\r\n}\r\n\r\n//Button events\r\nnext.addEventListener('click', e => {\r\n    nextSlide();\r\n    if(auto){\r\n        clearInterval(slideInterval);\r\n        slideInterval = setInterval(nextSlide, intervalTime);\r\n    }\r\n});\r\n\r\nprev.addEventListener('click', e => {\r\n    prevSlide();\r\n});\r\n\r\n//Auto slide\r\nif(auto){\r\n    //Run next slide at interval time\r\n    slideInterval = setInterval(nextSlide, intervalTime);\r\n}\n\n//# sourceURL=webpack://Clone_fitCenter/./js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/app.js"]();
/******/ 	
/******/ })()
;
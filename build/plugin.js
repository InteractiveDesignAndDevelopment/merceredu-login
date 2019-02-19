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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/document-promises/document-promises.js":
/*!*************************************************************!*\
  !*** ./node_modules/document-promises/document-promises.js ***!
  \*************************************************************/
/*! exports provided: parsed, contentLoaded, loaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsed\", function() { return parsed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contentLoaded\", function() { return contentLoaded; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaded\", function() { return loaded; });\n// thenfied document ready states\nconst thenify = (type, readyState) => new Promise(resolve => {\n\tconst listener = () => {\n\t\tif (readyState.test(document.readyState)) {\n\t\t\tdocument.removeEventListener(type, listener);\n\n\t\t\tresolve();\n\t\t}\n\t};\n\n\tdocument.addEventListener(type, listener);\n\n\tlistener();\n});\n\n// export thenfied parsed, contentLoaded, and loaded\nconst parsed        = thenify('readystatechange', /^(?:interactive|complete)$/);\nconst contentLoaded = thenify('DOMContentLoaded', /^(?:interactive|complete)$/);\nconst loaded        = thenify('readystatechange', /^complete$/);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQtcHJvbWlzZXMvZG9jdW1lbnQtcHJvbWlzZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQtcHJvbWlzZXMvZG9jdW1lbnQtcHJvbWlzZXMuanM/NzU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGVuZmllZCBkb2N1bWVudCByZWFkeSBzdGF0ZXNcbmNvbnN0IHRoZW5pZnkgPSAodHlwZSwgcmVhZHlTdGF0ZSkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xuXHRcdGlmIChyZWFkeVN0YXRlLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpIHtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuXG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuXG5cdGxpc3RlbmVyKCk7XG59KTtcblxuLy8gZXhwb3J0IHRoZW5maWVkIHBhcnNlZCwgY29udGVudExvYWRlZCwgYW5kIGxvYWRlZFxuZXhwb3J0IGNvbnN0IHBhcnNlZCAgICAgICAgPSB0aGVuaWZ5KCdyZWFkeXN0YXRlY2hhbmdlJywgL14oPzppbnRlcmFjdGl2ZXxjb21wbGV0ZSkkLyk7XG5leHBvcnQgY29uc3QgY29udGVudExvYWRlZCA9IHRoZW5pZnkoJ0RPTUNvbnRlbnRMb2FkZWQnLCAvXig/OmludGVyYWN0aXZlfGNvbXBsZXRlKSQvKTtcbmV4cG9ydCBjb25zdCBsb2FkZWQgICAgICAgID0gdGhlbmlmeSgncmVhZHlzdGF0ZWNoYW5nZScsIC9eY29tcGxldGUkLyk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/document-promises/document-promises.js\n");

/***/ }),

/***/ "./node_modules/prepend-child/index.js":
/*!*********************************************!*\
  !*** ./node_modules/prepend-child/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * Module exports.\n */\n\nmodule.exports = prependChild;\n\n/**\n * The inverse of `Element#appendChild`.\n *\n * @public\n */\n\nfunction prependChild (element, child) {\n  var first = element.firstChild;\n  if (first) {\n    return element.insertBefore(child, first);\n  } else {\n    return element.appendChild(child);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcHJlcGVuZC1jaGlsZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmVwZW5kLWNoaWxkL2luZGV4LmpzPzM2ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcHJlcGVuZENoaWxkO1xuXG4vKipcbiAqIFRoZSBpbnZlcnNlIG9mIGBFbGVtZW50I2FwcGVuZENoaWxkYC5cbiAqXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcHJlcGVuZENoaWxkIChlbGVtZW50LCBjaGlsZCkge1xuICB2YXIgZmlyc3QgPSBlbGVtZW50LmZpcnN0Q2hpbGQ7XG4gIGlmIChmaXJzdCkge1xuICAgIHJldHVybiBlbGVtZW50Lmluc2VydEJlZm9yZShjaGlsZCwgZmlyc3QpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/prepend-child/index.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var document_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! document-promises */ \"./node_modules/document-promises/document-promises.js\");\n/* harmony import */ var prepend_child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prepend-child */ \"./node_modules/prepend-child/index.js\");\n/* harmony import */ var prepend_child__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prepend_child__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar isAadSsoWordPressPresent = function isAadSsoWordPressPresent() {\n  return null !== document.querySelector('.aadsso-login-form-text');\n};\n\nvar prependSsoToBody = function prependSsoToBody() {\n  return prepend_child__WEBPACK_IMPORTED_MODULE_1___default()(document.body, document.querySelector('.c-sso'));\n};\n\nvar removeSso = function removeSso() {\n  return document.querySelector('.c-sso').remove();\n};\n\nvar removeAadSsoLoginFormText = function removeAadSsoLoginFormText() {\n  return document.querySelector('.aadsso-login-form-text').remove();\n};\n\nvar copyAadSsoLinks = function copyAadSsoLinks() {\n  var aadSsoLoginFormTextLogin = document.querySelector('.aadsso-login-form-text a[href*=\"authorize\"]');\n  var aadSsoLoginFormTextLogout = document.querySelector('.aadsso-login-form-text a[href*=\"logout\"]');\n  var urlLogin = aadSsoLoginFormTextLogin.getAttribute('href');\n  var urlLogout = aadSsoLoginFormTextLogout.getAttribute('href');\n  var ctaLogin = document.querySelector('.c-sso__button--yes'); // const ctaLogout = document.querySelector('cta--logout');\n\n  if (null !== ctaLogin) {\n    ctaLogin.setAttribute('href', urlLogin);\n  } // if (null !== ctaLogout) {\n  //   ctaLogout.setAttribute('href', urlLogout);\n  // }\n\n};\n\ndocument_promises__WEBPACK_IMPORTED_MODULE_0__[\"contentLoaded\"].then(function () {\n  if (!isAadSsoWordPressPresent()) {\n    console.error('Abandoning');\n    removeSso();\n    return;\n  }\n\n  console.info('Proceeding');\n  prependSsoToBody();\n  copyAadSsoLinks();\n  removeAadSsoLoginFormText();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250ZW50TG9hZGVkIH0gZnJvbSAnZG9jdW1lbnQtcHJvbWlzZXMnO1xuaW1wb3J0IHByZXBlbmRDaGlsZCBmcm9tICdwcmVwZW5kLWNoaWxkJztcblxuaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5cbmNvbnN0IGlzQWFkU3NvV29yZFByZXNzUHJlc2VudCA9ICgpID0+IG51bGwgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYWRzc28tbG9naW4tZm9ybS10ZXh0Jyk7XG5cbmNvbnN0IHByZXBlbmRTc29Ub0JvZHkgPSAoKSA9PiBwcmVwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMtc3NvJykpO1xuXG5jb25zdCByZW1vdmVTc28gPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1zc28nKS5yZW1vdmUoKTtcblxuY29uc3QgcmVtb3ZlQWFkU3NvTG9naW5Gb3JtVGV4dCA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYWRzc28tbG9naW4tZm9ybS10ZXh0JykucmVtb3ZlKCk7XG5cbmNvbnN0IGNvcHlBYWRTc29MaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgYWFkU3NvTG9naW5Gb3JtVGV4dExvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmFhZHNzby1sb2dpbi1mb3JtLXRleHQgYVtocmVmKj1cImF1dGhvcml6ZVwiXSdcbiAgKTtcbiAgY29uc3QgYWFkU3NvTG9naW5Gb3JtVGV4dExvZ291dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5hYWRzc28tbG9naW4tZm9ybS10ZXh0IGFbaHJlZio9XCJsb2dvdXRcIl0nXG4gICk7XG4gIGNvbnN0IHVybExvZ2luID0gYWFkU3NvTG9naW5Gb3JtVGV4dExvZ2luLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBjb25zdCB1cmxMb2dvdXQgPSBhYWRTc29Mb2dpbkZvcm1UZXh0TG9nb3V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBjb25zdCBjdGFMb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jLXNzb19fYnV0dG9uLS15ZXMnKTtcbiAgLy8gY29uc3QgY3RhTG9nb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY3RhLS1sb2dvdXQnKTtcbiAgaWYgKG51bGwgIT09IGN0YUxvZ2luKSB7XG4gICAgY3RhTG9naW4uc2V0QXR0cmlidXRlKCdocmVmJywgdXJsTG9naW4pO1xuICB9XG4gIC8vIGlmIChudWxsICE9PSBjdGFMb2dvdXQpIHtcbiAgLy8gICBjdGFMb2dvdXQuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsTG9nb3V0KTtcbiAgLy8gfVxufTtcblxuY29udGVudExvYWRlZC50aGVuKCgpID0+IHtcbiAgaWYgKCFpc0FhZFNzb1dvcmRQcmVzc1ByZXNlbnQoKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FiYW5kb25pbmcnKTtcbiAgICByZW1vdmVTc28oKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc29sZS5pbmZvKCdQcm9jZWVkaW5nJyk7XG4gIHByZXBlbmRTc29Ub0JvZHkoKTtcbiAgY29weUFhZFNzb0xpbmtzKCk7XG4gIHJlbW92ZUFhZFNzb0xvZ2luRm9ybVRleHQoKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/NDE1NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ });
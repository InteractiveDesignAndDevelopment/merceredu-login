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

/***/ "./src/js/aad-sso-wordpress-mercer.js":
/*!********************************************!*\
  !*** ./src/js/aad-sso-wordpress-mercer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AadSsoWordPressMercer; });\n/* harmony import */ var prepend_child__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prepend-child */ \"./node_modules/prepend-child/index.js\");\n/* harmony import */ var prepend_child__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prepend_child__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @author Todd Sayre\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AadSsoWordPressMercer =\n/*#__PURE__*/\nfunction () {\n  /**\n   * construct it after DOMContentLoaded because this rearranges the markup\n   */\n  function AadSsoWordPressMercer() {\n    _classCallCheck(this, AadSsoWordPressMercer);\n\n    if (!AadSsoWordPressMercer.isAadSsoWordPressPresent()) {\n      console.error('Abandoning'); // AadSsoWordPressMercer.removeSso();\n\n      return;\n    }\n\n    console.info('Proceeding');\n    AadSsoWordPressMercer.prependSsoToBody(); // AadSsoWordPressMercer.copyAadSsoLinks();\n    // AadSsoWordPressMercer.removeAadSsoLoginFormText();\n  }\n  /**\n   * Add AADSSO-plugin-generated URLs to this-plugin-generated links\n   */\n  // static copyAadSsoLinks() {\n  //   const aadSsoLoginFormTextLogin = document.querySelector(\n  //     '.aadsso-login-form-text a[href*=\"authorize\"]'\n  //   );\n  //   const aadSsoLoginFormTextLogout = document.querySelector(\n  //     '.aadsso-login-form-text a[href*=\"logout\"]'\n  //   );\n  //   const urlLogin = aadSsoLoginFormTextLogin.getAttribute('href');\n  //   const urlLogout = aadSsoLoginFormTextLogout.getAttribute('href');\n  //   const ctaLogin = document.querySelector('.cta--login');\n  //   const ctaLogout = document.querySelector('cta--logout');\n  //   if (null !== ctaLogin) {\n  //     ctaLogin.setAttribute('href', urlLogin);\n  //   }\n  //   if (null !== ctaLogout) {\n  //     ctaLogout.setAttribute('href', urlLogout);\n  //   }\n  // }\n\n  /**\n   *\n   */\n\n\n  _createClass(AadSsoWordPressMercer, null, [{\n    key: \"isAadSsoWordPressPresent\",\n    value: function isAadSsoWordPressPresent() {\n      var aadssoLoginFormText = document.querySelector('.aadsso-login-form-text');\n      return null !== aadssoLoginFormText;\n    }\n    /**\n     * Move the `.aad` block out from the `#loginform` form to be the first child of the `body`\n     */\n\n  }, {\n    key: \"prependSsoToBody\",\n    value: function prependSsoToBody() {\n      var sso = document.querySelector('.c-sso');\n      prepend_child__WEBPACK_IMPORTED_MODULE_0___default()(document.body, sso);\n    }\n    /**\n     * Remove the AAD block\n     */\n    // static removeSso() {\n    //   const sso = document.querySelector('.c-sso');\n    //   sso.remove();\n    // }\n\n    /**\n     * Remove the AADSSO-plugin-added content\n     */\n    // static removeAadSsoLoginFormText() {\n    //   const aadssoLoginFormText = document.querySelector('.aadsso-login-form-text');\n    //   aadssoLoginFormText.remove();\n    // }\n\n  }]);\n\n  return AadSsoWordPressMercer;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYWFkLXNzby13b3JkcHJlc3MtbWVyY2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FhZC1zc28td29yZHByZXNzLW1lcmNlci5qcz84NTFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBUb2RkIFNheXJlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgcHJlcGVuZENoaWxkIGZyb20gJ3ByZXBlbmQtY2hpbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYWRTc29Xb3JkUHJlc3NNZXJjZXIge1xuICAvKipcbiAgICogY29uc3RydWN0IGl0IGFmdGVyIERPTUNvbnRlbnRMb2FkZWQgYmVjYXVzZSB0aGlzIHJlYXJyYW5nZXMgdGhlIG1hcmt1cFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFBYWRTc29Xb3JkUHJlc3NNZXJjZXIuaXNBYWRTc29Xb3JkUHJlc3NQcmVzZW50KCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FiYW5kb25pbmcnKTtcbiAgICAgIC8vIEFhZFNzb1dvcmRQcmVzc01lcmNlci5yZW1vdmVTc28oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmluZm8oJ1Byb2NlZWRpbmcnKTtcbiAgICBBYWRTc29Xb3JkUHJlc3NNZXJjZXIucHJlcGVuZFNzb1RvQm9keSgpO1xuICAgIC8vIEFhZFNzb1dvcmRQcmVzc01lcmNlci5jb3B5QWFkU3NvTGlua3MoKTtcbiAgICAvLyBBYWRTc29Xb3JkUHJlc3NNZXJjZXIucmVtb3ZlQWFkU3NvTG9naW5Gb3JtVGV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBBQURTU08tcGx1Z2luLWdlbmVyYXRlZCBVUkxzIHRvIHRoaXMtcGx1Z2luLWdlbmVyYXRlZCBsaW5rc1xuICAgKi9cbiAgLy8gc3RhdGljIGNvcHlBYWRTc29MaW5rcygpIHtcbiAgLy8gICBjb25zdCBhYWRTc29Mb2dpbkZvcm1UZXh0TG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAvLyAgICAgJy5hYWRzc28tbG9naW4tZm9ybS10ZXh0IGFbaHJlZio9XCJhdXRob3JpemVcIl0nXG4gIC8vICAgKTtcbiAgLy8gICBjb25zdCBhYWRTc29Mb2dpbkZvcm1UZXh0TG9nb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgLy8gICAgICcuYWFkc3NvLWxvZ2luLWZvcm0tdGV4dCBhW2hyZWYqPVwibG9nb3V0XCJdJ1xuICAvLyAgICk7XG4gIC8vICAgY29uc3QgdXJsTG9naW4gPSBhYWRTc29Mb2dpbkZvcm1UZXh0TG9naW4uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIC8vICAgY29uc3QgdXJsTG9nb3V0ID0gYWFkU3NvTG9naW5Gb3JtVGV4dExvZ291dC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgLy8gICBjb25zdCBjdGFMb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdGEtLWxvZ2luJyk7XG4gIC8vICAgY29uc3QgY3RhTG9nb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY3RhLS1sb2dvdXQnKTtcbiAgLy8gICBpZiAobnVsbCAhPT0gY3RhTG9naW4pIHtcbiAgLy8gICAgIGN0YUxvZ2luLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybExvZ2luKTtcbiAgLy8gICB9XG4gIC8vICAgaWYgKG51bGwgIT09IGN0YUxvZ291dCkge1xuICAvLyAgICAgY3RhTG9nb3V0LnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybExvZ291dCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBzdGF0aWMgaXNBYWRTc29Xb3JkUHJlc3NQcmVzZW50KCkge1xuICAgIGNvbnN0IGFhZHNzb0xvZ2luRm9ybVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWFkc3NvLWxvZ2luLWZvcm0tdGV4dCcpO1xuICAgIHJldHVybiBudWxsICE9PSBhYWRzc29Mb2dpbkZvcm1UZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhlIGAuYWFkYCBibG9jayBvdXQgZnJvbSB0aGUgYCNsb2dpbmZvcm1gIGZvcm0gdG8gYmUgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBgYm9keWBcbiAgICovXG4gIHN0YXRpYyBwcmVwZW5kU3NvVG9Cb2R5KCkge1xuICAgIGNvbnN0IHNzbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jLXNzbycpO1xuICAgIHByZXBlbmRDaGlsZChkb2N1bWVudC5ib2R5LCBzc28pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgQUFEIGJsb2NrXG4gICAqL1xuICAvLyBzdGF0aWMgcmVtb3ZlU3NvKCkge1xuICAvLyAgIGNvbnN0IHNzbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jLXNzbycpO1xuICAvLyAgIHNzby5yZW1vdmUoKTtcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIEFBRFNTTy1wbHVnaW4tYWRkZWQgY29udGVudFxuICAgKi9cbiAgLy8gc3RhdGljIHJlbW92ZUFhZFNzb0xvZ2luRm9ybVRleHQoKSB7XG4gIC8vICAgY29uc3QgYWFkc3NvTG9naW5Gb3JtVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYWRzc28tbG9naW4tZm9ybS10ZXh0Jyk7XG4gIC8vICAgYWFkc3NvTG9naW5Gb3JtVGV4dC5yZW1vdmUoKTtcbiAgLy8gfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFJQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/aad-sso-wordpress-mercer.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var document_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! document-promises */ \"./node_modules/document-promises/document-promises.js\");\n/* harmony import */ var _aad_sso_wordpress_mercer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aad-sso-wordpress-mercer */ \"./src/js/aad-sso-wordpress-mercer.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * @author Todd Sayre\n */\n\n\n\n\n\ndocument_promises__WEBPACK_IMPORTED_MODULE_0__[\"contentLoaded\"].then(function () {\n  new _aad_sso_wordpress_mercer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgVG9kZCBTYXlyZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgY29udGVudExvYWRlZCB9IGZyb20gJ2RvY3VtZW50LXByb21pc2VzJztcbmltcG9ydCBBYWRTc29Xb3JkUHJlc3NNZXJjZXIgZnJvbSAnLi9hYWQtc3NvLXdvcmRwcmVzcy1tZXJjZXInO1xuXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuY29udGVudExvYWRlZC50aGVuKCgpID0+IHtcbiAgbmV3IEFhZFNzb1dvcmRQcmVzc01lcmNlcigpO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

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
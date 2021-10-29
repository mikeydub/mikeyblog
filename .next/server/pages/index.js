module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/mike/dev/mikeyblog/pages/index.js\";\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex h-screen\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"my-auto ml-80\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"font-serif italic text-6xl\",\n        children: \"Mike Wen\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"mt-2 text-sm\",\n        children: [\"Making a dent. Pursuing the greater good. Trying my best. Founder of \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"hover:text-gray-400 hover:underline\",\n          href: \"https://gallery.so/mikey\",\n          children: \"Gallery.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 6,\n          columnNumber: 106\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"mt-2 text-sm\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"hover:text-gray-400 hover:underline\",\n          href: \"https://twitter.com/mikeybitcoin\",\n          children: \"Twitter.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 7,\n          columnNumber: 37\n        }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"hover:text-gray-400 hover:underline\",\n          href: \"https://instagram.com/mikeybitcoin\",\n          children: \"Insta.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 7,\n          columnNumber: 141\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUEseUdBQWlHO0FBQUcsbUJBQVMsRUFBQyxxQ0FBYjtBQUFtRCxjQUFJLEVBQUMsMEJBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUEsZ0NBQTRCO0FBQUcsbUJBQVMsRUFBQyxxQ0FBYjtBQUFtRCxjQUFJLEVBQUMsa0NBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUE1QixvQkFBb0k7QUFBRyxtQkFBUyxFQUFDLHFDQUFiO0FBQW1ELGNBQUksRUFBQyxvQ0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXBJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1hdXRvIG1sLTgwXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlcmlmIGl0YWxpYyB0ZXh0LTZ4bFwiPk1pa2UgV2VuPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtXCI+TWFraW5nIGEgZGVudC4gUHVyc3VpbmcgdGhlIGdyZWF0ZXIgZ29vZC4gVHJ5aW5nIG15IGJlc3QuIEZvdW5kZXIgb2YgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTQwMCBob3Zlcjp1bmRlcmxpbmVcIiBocmVmPVwiaHR0cHM6Ly9nYWxsZXJ5LnNvL21pa2V5XCI+R2FsbGVyeS48L2E+PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc21cIj48YSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktNDAwIGhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL21pa2V5Yml0Y29pblwiPlR3aXR0ZXIuPC9hPiA8YSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktNDAwIGhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vbWlrZXliaXRjb2luXCI+SW5zdGEuPC9hPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
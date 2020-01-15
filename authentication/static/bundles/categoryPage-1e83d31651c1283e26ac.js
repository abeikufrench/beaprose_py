/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"categoryPage": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./authentication/static/js/categories.js","vendors~categoryPage~emailVerified~expertRegister~interestedExpert~landingPage~login~phoneVerified~r~a438e67f","vendors~categoryPage~expertRegister~register","categoryPage~emailVerified~expertRegister~interestedExpert~landingPage~login~phoneVerified~register~~fef386ff","categoryPage~expertRegister~register"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./authentication/static/images/business.svg":
/*!***************************************************!*\
  !*** ./authentication/static/images/business.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/business.svg\";\n\n//# sourceURL=webpack:///./authentication/static/images/business.svg?");

/***/ }),

/***/ "./authentication/static/images/car-insurance.svg":
/*!********************************************************!*\
  !*** ./authentication/static/images/car-insurance.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/car-insurance.svg\";\n\n//# sourceURL=webpack:///./authentication/static/images/car-insurance.svg?");

/***/ }),

/***/ "./authentication/static/images/city-view.png":
/*!****************************************************!*\
  !*** ./authentication/static/images/city-view.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/city-view.png\";\n\n//# sourceURL=webpack:///./authentication/static/images/city-view.png?");

/***/ }),

/***/ "./authentication/static/images/financial-planning.svg":
/*!*************************************************************!*\
  !*** ./authentication/static/images/financial-planning.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/financial-planning.svg\";\n\n//# sourceURL=webpack:///./authentication/static/images/financial-planning.svg?");

/***/ }),

/***/ "./authentication/static/images/health-wellness.svg":
/*!**********************************************************!*\
  !*** ./authentication/static/images/health-wellness.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/health-wellness.svg\";\n\n//# sourceURL=webpack:///./authentication/static/images/health-wellness.svg?");

/***/ }),

/***/ "./authentication/static/images/home-appliance.svg":
/*!*********************************************************!*\
  !*** ./authentication/static/images/home-appliance.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/home-appliance.svg\";\n\n//# sourceURL=webpack:///./authentication/static/images/home-appliance.svg?");

/***/ }),

/***/ "./authentication/static/images/mobile.svg":
/*!*************************************************!*\
  !*** ./authentication/static/images/mobile.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/mobile.svg\";\n\n//# sourceURL=webpack:///./authentication/static/images/mobile.svg?");

/***/ }),

/***/ "./authentication/static/images/plumbing.svg":
/*!***************************************************!*\
  !*** ./authentication/static/images/plumbing.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/plumbing.svg\";\n\n//# sourceURL=webpack:///./authentication/static/images/plumbing.svg?");

/***/ }),

/***/ "./authentication/static/images/tv.svg":
/*!*********************************************!*\
  !*** ./authentication/static/images/tv.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/tv.svg\";\n\n//# sourceURL=webpack:///./authentication/static/images/tv.svg?");

/***/ }),

/***/ "./authentication/static/js/categories.js":
/*!************************************************!*\
  !*** ./authentication/static/js/categories.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Register_Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Register/Register */ \"./authentication/static/js/components/Register/Register.js\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.scss */ \"./authentication/static/js/App.scss\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UnregisteredNavbar_UnregisteredNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UnregisteredNavbar/UnregisteredNavbar */ \"./authentication/static/js/components/UnregisteredNavbar/UnregisteredNavbar.js\");\n/* harmony import */ var _components_Categories_Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Categories/Categories */ \"./authentication/static/js/components/Categories/Categories.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UnregisteredNavbar_UnregisteredNavbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Categories_Categories__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\"app\"));\n\n//# sourceURL=webpack:///./authentication/static/js/categories.js?");

/***/ }),

/***/ "./authentication/static/js/components/Categories/Categories.js":
/*!**********************************************************************!*\
  !*** ./authentication/static/js/components/Categories/Categories.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Categories_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.scss */ \"./authentication/static/js/components/Categories/Categories.scss\");\n/* harmony import */ var _Categories_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Categories_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CategoryImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryImage */ \"./authentication/static/js/components/Categories/CategoryImage.js\");\n/* harmony import */ var _images_business_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/business.svg */ \"./authentication/static/images/business.svg\");\n/* harmony import */ var _images_business_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_business_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_financial_planning_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/financial-planning.svg */ \"./authentication/static/images/financial-planning.svg\");\n/* harmony import */ var _images_financial_planning_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_financial_planning_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_car_insurance_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/car-insurance.svg */ \"./authentication/static/images/car-insurance.svg\");\n/* harmony import */ var _images_car_insurance_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_car_insurance_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_health_wellness_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/health-wellness.svg */ \"./authentication/static/images/health-wellness.svg\");\n/* harmony import */ var _images_health_wellness_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_health_wellness_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_mobile_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/mobile.svg */ \"./authentication/static/images/mobile.svg\");\n/* harmony import */ var _images_mobile_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_mobile_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_tv_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../images/tv.svg */ \"./authentication/static/images/tv.svg\");\n/* harmony import */ var _images_tv_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_tv_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _images_home_appliance_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../images/home-appliance.svg */ \"./authentication/static/images/home-appliance.svg\");\n/* harmony import */ var _images_home_appliance_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_home_appliance_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_plumbing_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../images/plumbing.svg */ \"./authentication/static/images/plumbing.svg\");\n/* harmony import */ var _images_plumbing_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_plumbing_svg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _CategorySection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CategorySection */ \"./authentication/static/js/components/Categories/CategorySection.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Categories =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Categories, _React$Component);\n\n  function Categories(props) {\n    var _this;\n\n    _classCallCheck(this, Categories);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Categories).call(this, props));\n    _this.state = {\n      section1: [{\n        image: _images_car_insurance_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n        title: \"Cars & Trucks\",\n        categories: [\"Acura\", \"Audi\", \"BMW\", \"Buick\", \"Chevrolet\", \"FIAT\"]\n      }],\n      section2: [{\n        image: _images_business_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n        title: \"Business\",\n        categories: [\"Business Plans\", \"Career\", \"Presentations\"]\n      }, {\n        image: _images_financial_planning_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n        title: \"Financial Planning\",\n        categories: [\"Mortgages\", \"Retirement\"]\n      }, {\n        image: _images_health_wellness_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n        title: \"Health & Wellness\",\n        categories: [\"Diabetes\", \"Diet & Nutrition\"]\n      }],\n      section3: [{\n        image: _images_home_appliance_svg__WEBPACK_IMPORTED_MODULE_9___default.a,\n        title: \"Home Appliances\",\n        categories: [\"Coffee Maker\", \"Dishwashers\", \"Microwaves\", \"Vaccuum\"]\n      }, {\n        image: _images_plumbing_svg__WEBPACK_IMPORTED_MODULE_10___default.a,\n        title: \"Plumbing\",\n        categories: [\"Plumbing\"]\n      }],\n      section4: [{\n        image: _images_mobile_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n        title: \"SmartPhones\",\n        categories: [\"Apple\", \"ASUS\", \"Blackberry\", \"Samsung\", \"Windows\"]\n      }, {\n        image: _images_tv_svg__WEBPACK_IMPORTED_MODULE_8___default.a,\n        title: \"TV & Video\",\n        categories: [\"TV & Video\"]\n      }]\n    };\n    return _this;\n  }\n\n  _createClass(Categories, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"Categories\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"categories\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col m3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategorySection__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        categorySection: this.state.section1\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col m3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategorySection__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        categorySection: this.state.section2\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col m3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategorySection__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        categorySection: this.state.section3\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col m3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategorySection__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        categorySection: this.state.section4\n      }))))));\n    }\n  }]);\n\n  return Categories;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/Categories.js?");

/***/ }),

/***/ "./authentication/static/js/components/Categories/Categories.scss":
/*!************************************************************************!*\
  !*** ./authentication/static/js/components/Categories/Categories.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./Categories.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./authentication/static/js/components/Categories/Categories.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/Categories.scss?");

/***/ }),

/***/ "./authentication/static/js/components/Categories/CategoryHeader.js":
/*!**************************************************************************!*\
  !*** ./authentication/static/js/components/Categories/CategoryHeader.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar CategoryHeader =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(CategoryHeader, _React$Component);\n\n  function CategoryHeader() {\n    _classCallCheck(this, CategoryHeader);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CategoryHeader).apply(this, arguments));\n  }\n\n  _createClass(CategoryHeader, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        style: {\n          marginTop: \"1.5rem\"\n        },\n        src: \"/static/bundles/\".concat(this.props.image),\n        alt: this.props.alt\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n        style: {\n          marginTop: \"1rem\",\n          marginBottom: \"1rem\",\n          padding: 0\n        }\n      }, this.props.title));\n    }\n  }]);\n\n  return CategoryHeader;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryHeader);\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/CategoryHeader.js?");

/***/ }),

/***/ "./authentication/static/js/components/Categories/CategoryImage.js":
/*!*************************************************************************!*\
  !*** ./authentication/static/js/components/Categories/CategoryImage.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CategoryImage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryImage.scss */ \"./authentication/static/js/components/Categories/CategoryImage.scss\");\n/* harmony import */ var _CategoryImage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CategoryImage_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_city_view_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/city-view.png */ \"./authentication/static/images/city-view.png\");\n/* harmony import */ var _images_city_view_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_city_view_png__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar CategoryImage =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(CategoryImage, _React$Component);\n\n  function CategoryImage() {\n    _classCallCheck(this, CategoryImage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CategoryImage).apply(this, arguments));\n  }\n\n  _createClass(CategoryImage, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"CategoryImage\",\n        style: {\n          background: \"url(/static/bundles/\".concat(_images_city_view_png__WEBPACK_IMPORTED_MODULE_2___default.a, \")\")\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        style: {\n          margin: 0,\n          padding: 0\n        }\n      }, \"Categories\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        \"class\": \"text-muted\"\n      }, \"Expert advice over the phone on everything you own, \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Anytime you need it\"));\n    }\n  }]);\n\n  return CategoryImage;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryImage);\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/CategoryImage.js?");

/***/ }),

/***/ "./authentication/static/js/components/Categories/CategoryImage.scss":
/*!***************************************************************************!*\
  !*** ./authentication/static/js/components/Categories/CategoryImage.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./CategoryImage.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./authentication/static/js/components/Categories/CategoryImage.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/CategoryImage.scss?");

/***/ }),

/***/ "./authentication/static/js/components/Categories/CategorySection.js":
/*!***************************************************************************!*\
  !*** ./authentication/static/js/components/Categories/CategorySection.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CategoryHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryHeader */ \"./authentication/static/js/components/Categories/CategoryHeader.js\");\n/* harmony import */ var _CategoryText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryText */ \"./authentication/static/js/components/Categories/CategoryText.js\");\n\n\n\n\nfunction CategorySection(props) {\n  return props.categorySection.map(function (category) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      image: category.image,\n      title: category.title,\n      alt: category.alt\n    }), category.categories.map(function (title) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoryText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        text: title\n      });\n    }));\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategorySection);\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/CategorySection.js?");

/***/ }),

/***/ "./authentication/static/js/components/Categories/CategoryText.js":
/*!************************************************************************!*\
  !*** ./authentication/static/js/components/Categories/CategoryText.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CategoryText_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryText.scss */ \"./authentication/static/js/components/Categories/CategoryText.scss\");\n/* harmony import */ var _CategoryText_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CategoryText_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction CategoryText(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"text-muted CategoryText\"\n  }, props.text);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryText);\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/CategoryText.js?");

/***/ }),

/***/ "./authentication/static/js/components/Categories/CategoryText.scss":
/*!**************************************************************************!*\
  !*** ./authentication/static/js/components/Categories/CategoryText.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./CategoryText.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./authentication/static/js/components/Categories/CategoryText.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/CategoryText.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./authentication/static/js/components/Categories/Categories.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./authentication/static/js/components/Categories/Categories.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Categories section {\\n  position: relative;\\n  height: 85rem;\\n  background: #F9F9F9; }\\n  @media screen and (max-width: 700px) {\\n    .Categories section {\\n      position: static; } }\\n\\n.Categories .categories {\\n  position: absolute;\\n  top: -4rem;\\n  border-radius: 20px;\\n  width: 80%;\\n  background-color: #ffffff;\\n  left: 10rem;\\n  height: auto;\\n  padding: 1.5rem; }\\n  @media screen and (max-width: 700px) {\\n    .Categories .categories {\\n      position: static;\\n      width: 100%; } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/Categories.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./authentication/static/js/components/Categories/CategoryImage.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./authentication/static/js/components/Categories/CategoryImage.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".CategoryImage {\\n  background-size: cover;\\n  height: 30rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100% !important; }\\n  .CategoryImage h3 {\\n    font-family: Roboto !important;\\n    font-weight: bold !important;\\n    font-size: 70px !important;\\n    line-height: 82px !important; }\\n  .CategoryImage .text-muted {\\n    text-align: center;\\n    font-size: 22px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/CategoryImage.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./authentication/static/js/components/Categories/CategoryText.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./authentication/static/js/components/Categories/CategoryText.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".CategoryText {\\n  font-family: Roboto;\\n  font-size: 18px !important;\\n  line-height: 21px !important;\\n  font-weight: normal;\\n  padding-top: 3px !important;\\n  padding-bottom: 3px !important;\\n  color: rgba(0, 0, 0, 0.5); }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./authentication/static/js/components/Categories/CategoryText.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ })

/******/ });
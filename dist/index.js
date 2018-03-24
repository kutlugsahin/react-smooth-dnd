(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("smooth-dnd"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "smooth-dnd"], factory);
	else if(typeof exports === 'object')
		exports["ReactSmoothDND"] = factory(require("prop-types"), require("react"), require("smooth-dnd"));
	else
		root["ReactSmoothDND"] = factory(root["PropTypes"], root["React"], root["SmoothDND"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_smooth_dnd__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Container, Draggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Container */ "./src/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _src_Container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_Draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Draggable */ "./src/Draggable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return _src_Draggable__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./src/Container.js":
/*!**************************!*\
  !*** ./src/Container.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smooth_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-dnd */ "smooth-dnd");
/* harmony import */ var smooth_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smooth_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Draggable */ "./src/Draggable.js");






class Container extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
	constructor(props) {
		super(props);
		this.getContainerOptions = this.getContainerOptions.bind(this);
		this.dropHandler = smooth_dnd__WEBPACK_IMPORTED_MODULE_2__["dropHandlers"].reactDropHandler();
		this.prevContainer = null;
	}

	componentDidMount() {
		this.prevContainer = this.containerDiv;
		this.container = smooth_dnd__WEBPACK_IMPORTED_MODULE_2___default()(this.containerDiv, this.getContainerOptions(this.props));
	}

	componentWillUnmount() {
		this.container.dispose();
		this.container = null;
	}

	componentDidUpdate() {
		if (this.containerDiv) {
			if (this.prevContainer && this.prevContainer !== this.containerDiv) {
				this.container.dispose();
				this.container = smooth_dnd__WEBPACK_IMPORTED_MODULE_2___default()(this.containerDiv, this.getContainerOptions(this.props));
				this.prevContainer = this.containerDiv;
			}
		}
	}

	getChildContext() {
		return {
			orientation: this.props.orientation
		};
	}

	render() {
		return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ style: this.props.style, ref: element => {
					this.containerDiv = element;
				} },
			this.props.children
		);
	}

	getContainerOptions(props) {
		return Object.assign({}, props, {
			dropHandler: this.dropHandler.handler
		});
	}
}

Container.propTypes = {
	behaviour: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['move', 'copy']),
	groupName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
	orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['horizontal', 'vertical']),
	//children: PropTypes.arrayOf(PropTypes.oneOfType([Draggable, Container])),
	style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
	dragHandleSelector: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
	dragBeginDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
	animationDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
	getChildPayload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
	dragClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

Container.defaultProps = {
	behaviour: 'move',
	orientation: 'vertical'
};

Container.childContextTypes = {
	orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/Draggable.js":
/*!**************************!*\
  !*** ./src/Draggable.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smooth_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-dnd */ "smooth-dnd");
/* harmony import */ var smooth_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smooth_dnd__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




const {
	wrapperClass,
	animationClass
} = smooth_dnd__WEBPACK_IMPORTED_MODULE_2__["constants"];

class Draggable extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
	render() {
		return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			_extends({}, this.props, { className: `${wrapperClass} ${this.context.orientation} ${animationClass}` }),
			this.props.children
		);
	}
}

Draggable.propTypes = {
	payload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

Draggable.contextTypes = {
	orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (Draggable);

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types","root":"PropTypes"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "smooth-dnd":
/*!*********************************************************************************************************!*\
  !*** external {"commonjs":"smooth-dnd","commonjs2":"smooth-dnd","amd":"smooth-dnd","root":"SmoothDND"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_smooth_dnd__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
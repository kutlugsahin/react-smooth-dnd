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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWFjdFNtb290aERORC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUmVhY3RTbW9vdGhETkQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVhY3RTbW9vdGhETkQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9SZWFjdFNtb290aERORC8uL3NyYy9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vUmVhY3RTbW9vdGhETkQvLi9zcmMvRHJhZ2dhYmxlLmpzIiwid2VicGFjazovL1JlYWN0U21vb3RoRE5EL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wiLFwicm9vdFwiOlwiUHJvcFR5cGVzXCJ9Iiwid2VicGFjazovL1JlYWN0U21vb3RoRE5EL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn0iLCJ3ZWJwYWNrOi8vUmVhY3RTbW9vdGhETkQvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInNtb290aC1kbmRcIixcImNvbW1vbmpzMlwiOlwic21vb3RoLWRuZFwiLFwiYW1kXCI6XCJzbW9vdGgtZG5kXCIsXCJyb290XCI6XCJTbW9vdGhETkRcIn0iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImdldENvbnRhaW5lck9wdGlvbnMiLCJiaW5kIiwiZHJvcEhhbmRsZXIiLCJkcm9wSGFuZGxlcnMiLCJyZWFjdERyb3BIYW5kbGVyIiwicHJldkNvbnRhaW5lciIsImNvbXBvbmVudERpZE1vdW50IiwiY29udGFpbmVyRGl2IiwiY29udGFpbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkaXNwb3NlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiZ2V0Q2hpbGRDb250ZXh0Iiwib3JpZW50YXRpb24iLCJyZW5kZXIiLCJzdHlsZSIsImVsZW1lbnQiLCJjaGlsZHJlbiIsIk9iamVjdCIsImFzc2lnbiIsImhhbmRsZXIiLCJwcm9wVHlwZXMiLCJiZWhhdmlvdXIiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImdyb3VwTmFtZSIsInN0cmluZyIsIm9iamVjdCIsImRyYWdIYW5kbGVTZWxlY3RvciIsImRyYWdCZWdpbkRlbGF5IiwibnVtYmVyIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJnZXRDaGlsZFBheWxvYWQiLCJmdW5jIiwiZHJhZ0NsYXNzIiwiZGVmYXVsdFByb3BzIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJ3cmFwcGVyQ2xhc3MiLCJhbmltYXRpb25DbGFzcyIsIkRyYWdnYWJsZSIsImNvbnRleHQiLCJwYXlsb2FkIiwiY29udGV4dFR5cGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1B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QVksR0FBRXNDLFlBQWEsSUFBRyxLQUFLRyxPQUFMLENBQWEzQixXQUFZLElBQUd5QixjQUFlLEVBQTlGO0FBQ0UsUUFBS3ZDLEtBQUwsQ0FBV2tCO0FBRGIsR0FERDtBQUtBO0FBUGdDOztBQVVsQ3NCLFVBQVVsQixTQUFWLEdBQXNCO0FBQ3JCb0IsVUFBUyxpREFBQWxCLENBQVVJO0FBREUsQ0FBdEI7O0FBSUFZLFVBQVVHLFlBQVYsR0FBeUI7QUFDeEI3QixjQUFhLGlEQUFBVSxDQUFVRztBQURDLENBQXpCOztBQUlBLCtEQUFlYSxTQUFmLEU7Ozs7Ozs7Ozs7O0FDMUJBLHdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwic21vb3RoLWRuZFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJwcm9wLXR5cGVzXCIsIFwicmVhY3RcIiwgXCJzbW9vdGgtZG5kXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0U21vb3RoRE5EXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwic21vb3RoLWRuZFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RTbW9vdGhETkRcIl0gPSBmYWN0b3J5KHJvb3RbXCJQcm9wVHlwZXNcIl0sIHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlNtb290aERORFwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcHJvcF90eXBlc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc21vb3RoX2RuZF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vc3JjL0NvbnRhaW5lcic7XHJcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9zcmMvRHJhZ2dhYmxlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIERyYWdnYWJsZVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNvbnRhaW5lciBmcm9tICdzbW9vdGgtZG5kJztcclxuaW1wb3J0IHsgZHJvcEhhbmRsZXJzIH0gZnJvbSAnc21vb3RoLWRuZCc7XHJcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9EcmFnZ2FibGUnO1xyXG5cclxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5nZXRDb250YWluZXJPcHRpb25zID0gdGhpcy5nZXRDb250YWluZXJPcHRpb25zLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmRyb3BIYW5kbGVyID0gZHJvcEhhbmRsZXJzLnJlYWN0RHJvcEhhbmRsZXIoKTtcclxuXHRcdHRoaXMucHJldkNvbnRhaW5lciA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMucHJldkNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRGl2O1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXIodGhpcy5jb250YWluZXJEaXYsIHRoaXMuZ2V0Q29udGFpbmVyT3B0aW9ucyh0aGlzLnByb3BzKSk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyLmRpc3Bvc2UoKTtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5lckRpdikge1xyXG5cdFx0XHRpZiAodGhpcy5wcmV2Q29udGFpbmVyICYmIHRoaXMucHJldkNvbnRhaW5lciAhPT0gdGhpcy5jb250YWluZXJEaXYpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcblx0XHRcdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXIodGhpcy5jb250YWluZXJEaXYsIHRoaXMuZ2V0Q29udGFpbmVyT3B0aW9ucyh0aGlzLnByb3BzKSk7XHJcblx0XHRcdFx0dGhpcy5wcmV2Q29udGFpbmVyID0gdGhpcy5jb250YWluZXJEaXY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldENoaWxkQ29udGV4dCgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG9yaWVudGF0aW9uOiB0aGlzLnByb3BzLm9yaWVudGF0aW9uXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gcmVmPXtlbGVtZW50ID0+IHsgdGhpcy5jb250YWluZXJEaXYgPSBlbGVtZW50OyB9fT5cclxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29udGFpbmVyT3B0aW9ucyhwcm9wcykge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XHJcblx0XHRcdGRyb3BIYW5kbGVyOiB0aGlzLmRyb3BIYW5kbGVyLmhhbmRsZXJcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuXHRiZWhhdmlvdXI6IFByb3BUeXBlcy5vbmVPZihbJ21vdmUnLCAnY29weSddKSxcclxuXHRncm91cE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0b3JpZW50YXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSksXHJcblx0Ly9jaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbRHJhZ2dhYmxlLCBDb250YWluZXJdKSksXHJcblx0c3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblx0ZHJhZ0hhbmRsZVNlbGVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdGRyYWdCZWdpbkRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdGFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdGdldENoaWxkUGF5bG9hZDogUHJvcFR5cGVzLmZ1bmMsXHJcblx0ZHJhZ0NsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xyXG5cdGJlaGF2aW91cjogJ21vdmUnLFxyXG5cdG9yaWVudGF0aW9uOiAndmVydGljYWwnXHJcbn07XHJcblxyXG5Db250YWluZXIuY2hpbGRDb250ZXh0VHlwZXMgPSB7XHJcblx0b3JpZW50YXRpb246IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICdzbW9vdGgtZG5kJztcclxuY29uc3Qge1xyXG5cdHdyYXBwZXJDbGFzcyxcclxuXHRhbmltYXRpb25DbGFzc1xyXG59ID0gY29uc3RhbnRzO1xyXG5cclxuY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHsgIFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17YCR7d3JhcHBlckNsYXNzfSAke3RoaXMuY29udGV4dC5vcmllbnRhdGlvbn0gJHthbmltYXRpb25DbGFzc31gfSA+XHJcblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbkRyYWdnYWJsZS5wcm9wVHlwZXMgPSB7XHJcblx0cGF5bG9hZDogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbkRyYWdnYWJsZS5jb250ZXh0VHlwZXMgPSB7XHJcblx0b3JpZW50YXRpb246IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcHJvcF90eXBlc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zbW9vdGhfZG5kX187Il0sInNvdXJjZVJvb3QiOiIifQ==
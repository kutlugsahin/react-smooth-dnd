(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('smooth-dnd')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'smooth-dnd'], factory) :
  (global = global || self, factory(global.ReactSmoothDnD = {}, global.React, global.PropTypes, global.SmoothDnD));
}(this, function (exports, React, PropTypes, smoothDnd) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  smoothDnd.smoothDnD.dropHandler = smoothDnd.dropHandlers.reactDropHandler().handler;
  smoothDnd.smoothDnD.wrapChild = false;

  var Container =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Container, _Component);

    function Container(props) {
      var _this;

      _classCallCheck(this, Container);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Container).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "prevContainer", void 0);

      _defineProperty(_assertThisInitialized(_this), "container", null);

      _defineProperty(_assertThisInitialized(_this), "containerRef", React__default.createRef());

      _this.getContainerOptions = _this.getContainerOptions.bind(_assertThisInitialized(_this));
      _this.getContainer = _this.getContainer.bind(_assertThisInitialized(_this));
      _this.prevContainer = null;
      return _this;
    }

    _createClass(Container, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.prevContainer = this.getContainer();
        this.container = smoothDnd.smoothDnD(this.getContainer(), this.getContainerOptions());
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.container.dispose();
        this.container = null;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.getContainer()) {
          if (this.prevContainer && this.prevContainer !== this.getContainer()) {
            this.container.dispose();
            this.container = smoothDnd.smoothDnD(this.getContainer(), this.getContainerOptions());
            this.prevContainer = this.getContainer();
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.render) {
          return this.props.render(this.containerRef);
        } else {
          return React__default.createElement("div", {
            style: this.props.style,
            ref: this.containerRef
          }, this.props.children);
        }
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        return this.containerRef.current;
      }
    }, {
      key: "getContainerOptions",
      value: function getContainerOptions() {
        var functionProps = {};

        if (this.props.onDragStart) {
          functionProps.onDragStart = this.props.onDragStart.bind(null);
        }

        if (this.props.onDragEnd) {
          functionProps.onDragEnd = this.props.onDragEnd.bind(null);
        }

        if (this.props.onDrop) {
          functionProps.onDrop = this.props.onDrop.bind(null);
        }

        if (this.props.getChildPayload) {
          functionProps.getChildPayload = this.props.getChildPayload.bind(null);
        }

        if (this.props.shouldAnimateDrop) {
          functionProps.shouldAnimateDrop = this.props.shouldAnimateDrop.bind(null);
        }

        if (this.props.shouldAcceptDrop) {
          functionProps.shouldAcceptDrop = this.props.shouldAcceptDrop.bind(null);
        }

        if (this.props.onDragEnter) {
          functionProps.onDragEnter = this.props.onDragEnter.bind(null);
        }

        if (this.props.onDragLeave) {
          functionProps.onDragLeave = this.props.onDragLeave.bind(null);
        }

        if (this.props.render) {
          functionProps.render = this.props.render.bind(null);
        }

        if (this.props.onDropReady) {
          functionProps.onDropReady = this.props.onDropReady.bind(null);
        }

        if (this.props.getGhostParent) {
          functionProps.getGhostParent = this.props.getGhostParent.bind(null);
        }

        return Object.assign({}, this.props, functionProps);
      }
    }]);

    return Container;
  }(React.Component);

  _defineProperty(Container, "propTypes", {
    behaviour: PropTypes.oneOf(['move', 'copy', 'drag-zone']),
    groupName: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    style: PropTypes.object,
    dragHandleSelector: PropTypes.string,
    nonDragAreaSelector: PropTypes.string,
    dragBeginDelay: PropTypes.number,
    animationDuration: PropTypes.number,
    autoScrollEnabled: PropTypes.string,
    lockAxis: PropTypes.string,
    dragClass: PropTypes.string,
    dropClass: PropTypes.string,
    onDragStart: PropTypes.func,
    onDragEnd: PropTypes.func,
    onDrop: PropTypes.func,
    getChildPayload: PropTypes.func,
    shouldAnimateDrop: PropTypes.func,
    shouldAcceptDrop: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragLeave: PropTypes.func,
    render: PropTypes.func,
    getGhostParent: PropTypes.func,
    removeOnDropOut: PropTypes.bool
  });

  _defineProperty(Container, "defaultProps", {
    behaviour: 'move',
    orientation: 'vertical'
  });

  var wrapperClass = smoothDnd.constants.wrapperClass;

  var Draggable =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Draggable, _Component);

    function Draggable() {
      _classCallCheck(this, Draggable);

      return _possibleConstructorReturn(this, _getPrototypeOf(Draggable).apply(this, arguments));
    }

    _createClass(Draggable, [{
      key: "render",
      value: function render() {
        if (this.props.render) {
          return React__default.cloneElement(this.props.render(), {
            className: wrapperClass
          });
        }

        var clsName = "".concat(this.props.className ? this.props.className + ' ' : '');
        return React__default.createElement("div", _extends({}, this.props, {
          className: "".concat(clsName).concat(wrapperClass)
        }), this.props.children);
      }
    }]);

    return Draggable;
  }(React.Component);

  _defineProperty(Draggable, "propsTypes", {
    render: PropTypes.func,
    className: PropTypes.string
  });

  exports.Container = Container;
  exports.Draggable = Draggable;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

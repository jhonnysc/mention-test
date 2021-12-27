"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _points = _interopRequireDefault(require("../points"));

var _lowestScore = _interopRequireDefault(require("../css/lowest-score.css"));

var _discardedScoreTooltip = _interopRequireDefault(require("./discarded-score-tooltip"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Plot point indicating a lower, discarded score
 */
var LowScore =
/*#__PURE__*/
function (_Component) {
  _inherits(LowScore, _Component);

  function LowScore() {
    var _this;

    _classCallCheck(this, LowScore);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LowScore).call(this));
    _this.state = {
      hover: false
    };
    _this.onHover = _this.onHover.bind(_assertThisInitialized(_this));
    _this.offHover = _this.offHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LowScore, [{
    key: "onHover",
    value: function onHover() {
      this.setState({
        hover: true
      });
    }
  }, {
    key: "offHover",
    value: function offHover() {
      this.setState({
        hover: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var score = this.props.lowScore; // If the low and high scores are within 10 points of each other, we want
      // To visually offset them so they're not squished too close together

      var diff = score > this.props.highScore - 9 ? this.props.highScore - 10 : score;
      var plot = {
        x: _points.default.percentile[diff] * 530 + 26,
        y: Math.abs(diff / 300 * 190)
      };
      var lowestPlot = {
        height: plot.y + 6,
        width: plot.x
      };
      return _react.default.createElement("div", {
        className: _lowestScore.default.lowestScore,
        style: lowestPlot,
        onMouseOver: this.onHover,
        onFocus: this.onHover,
        onMouseOut: this.offHover,
        onBlur: this.offHover
      }, _react.default.createElement(_reactAddonsCssTransitionGroup.default, {
        transitionName: "hover",
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500
      }, this.state.hover ? _react.default.createElement(_discardedScoreTooltip.default, {
        location: plot,
        lowScore: this.props.lowScore
      }) : null), _react.default.createElement("svg", {
        width: "530",
        height: "20",
        "aria-hidden": true
      }, _react.default.createElement("circle", {
        cx: plot.x,
        cy: "8",
        r: "6",
        stroke: "#787",
        strokeWidth: "2.5",
        fill: "#FFF",
        opacity: "0.75"
      })));
    }
  }]);

  return LowScore;
}(_react.Component);

exports.default = LowScore;
LowScore.propTypes = {
  /** The discarded lower score */
  lowScore: _propTypes.default.number.isRequired,

  /** The higher score */
  highScore: _propTypes.default.number.isRequired
};
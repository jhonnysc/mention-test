"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _points = require("../points");

var scoreColors = _interopRequireWildcard(require("../score-colors"));

var _curve = _interopRequireDefault(require("../css/curve.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Score curve portion of the skill graph
 */
var Curve = function Curve(_ref) {
  var height = _ref.height,
      width = _ref.width;
  return _react.default.createElement("svg", {
    className: _curve.default.base,
    "aria-hidden": true
  }, _react.default.createElement("path", {
    className: _curve.default.line,
    stroke: scoreColors.NOVICE_COLOR,
    strokeWidth: 2,
    d: (0, _points.createCurve)(0, 100, height, width)
  }), _react.default.createElement("path", {
    className: _curve.default.line,
    stroke: scoreColors.PROFICIENT_COLOR,
    strokeWidth: 2,
    d: (0, _points.createCurve)(100, 200, height, width)
  }), _react.default.createElement("path", {
    className: _curve.default.line,
    stroke: scoreColors.EXPERT_COLOR,
    strokeWidth: 2,
    d: (0, _points.createCurve)(200, 300, height, width)
  }));
};

Curve.propTypes = {
  /** The height of the score graph */
  height: _propTypes.default.number.isRequired,

  /** The width of the score graph */
  width: _propTypes.default.number.isRequired
};
var _default = Curve;
exports.default = _default;
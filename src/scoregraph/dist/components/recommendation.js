"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _recommendation = _interopRequireDefault(require("../css/recommendation.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The path level recommendation for a given score
 */
var Recommendation = function Recommendation(props) {
  return _react.default.createElement("div", {
    className: _recommendation.default.base
  }, _react.default.createElement("p", {
    className: _recommendation.default.description
  }, "We recommend starting at:", _react.default.createElement("span", {
    className: _recommendation.default.level
  }, props.recommendation, ' level')));
};

Recommendation.propTypes = {
  /** The name of the path level recommended; one of "Beginner", "Intermediate", "Advanced" */
  recommendation: _propTypes.default.string.isRequired
};
var _default = Recommendation;
exports.default = _default;
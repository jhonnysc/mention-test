"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _scoreAxis = _interopRequireDefault(require("../css/score-axis.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScoreAxis = function ScoreAxis() {
  return _react.default.createElement("div", {
    className: _scoreAxis.default.base,
    "aria-hidden": true
  }, _react.default.createElement("div", {
    className: _scoreAxis.default.levels
  }, _react.default.createElement("dl", {
    className: "".concat(_scoreAxis.default.expert)
  }, _react.default.createElement("dt", null, "Expert"), _react.default.createElement("dd", {
    className: _scoreAxis.default.range
  }, "201-300")), _react.default.createElement("dl", {
    className: "".concat(_scoreAxis.default.proficient)
  }, _react.default.createElement("dt", null, "Proficient"), _react.default.createElement("dd", {
    className: _scoreAxis.default.range
  }, "101-200")), _react.default.createElement("dl", {
    className: "".concat(_scoreAxis.default.novice)
  }, _react.default.createElement("dt", null, "Novice"), _react.default.createElement("dd", {
    className: _scoreAxis.default.range
  }, "0-100"))));
};

var _default = ScoreAxis;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _discardedScoreTooltip = _interopRequireDefault(require("../css/discarded-score-tooltip.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tooltip to show for a discarded lower score
 */
var DiscardedScoreTooltip = function DiscardedScoreTooltip(props) {
  var xOffset = 57;
  var yOffset = 50;
  return _react.default.createElement("div", {
    key: "hoverBubble"
  }, _react.default.createElement("div", {
    className: _discardedScoreTooltip.default.tooltip,
    style: {
      left: props.location.x - xOffset,
      top: -yOffset
    }
  }, _react.default.createElement("div", {
    className: _discardedScoreTooltip.default.tooltipContainer
  }, _react.default.createElement("div", {
    className: _discardedScoreTooltip.default.tooltipText
  }, "Discarded rating"), _react.default.createElement("div", {
    className: _discardedScoreTooltip.default.tooltipScore
  }, props.lowScore))));
};

DiscardedScoreTooltip.propTypes = {
  /** The location to draw  */
  location: _propTypes.default.shape({
    x: _propTypes.default.number.isRequired,
    y: _propTypes.default.number.isRequired
  }).isRequired,

  /** The discarded score */
  lowScore: _propTypes.default.number.isRequired
};
var _default = DiscardedScoreTooltip;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var scoreColors = _interopRequireWildcard(require("../score-colors"));

var _points = _interopRequireWildcard(require("../points"));

var _score = _interopRequireDefault(require("../css/score.css"));

var _getPercentileSuffix = _interopRequireDefault(require("../utils/get-percentile-suffix"));

var _levelOptions2 = _interopRequireDefault(require("../utils/level-options"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The actual score plot point containing the user's score and gravatar
 */
var Score = function Score(_ref) {
  var background = _ref.background,
      height = _ref.height,
      score = _ref.score,
      gravatarUrl = _ref.gravatarUrl,
      validationMode = _ref.validationMode,
      width = _ref.width;
  // These are the values that define both where the actual score icon
  // goes and where the dotted line from the left side is rendered
  var plotPointStyles = {
    height: Math.abs(score / 300 * height),
    // The 6 pixels are here currently to account for the full-sized icon-free render
    width: _points.default.percentile[score] * (validationMode ? width + 6 : width)
  };

  var _levelOptions = (0, _levelOptions2.default)(score),
      color = _levelOptions.color,
      level = _levelOptions.level;

  var percentile = Math.round(_points.default.percentile[score] * 100) || 1;
  var percentileSuffix = (0, _getPercentileSuffix.default)(percentile);
  var dynamicBase = validationMode ? _score.default.scoreBaseNoBorder : _score.default.scoreBase;
  return _react.default.createElement("div", {
    className: dynamicBase,
    style: plotPointStyles,
    "aria-label": "Your assessment score is ".concat(score, " out of 300. You rank in the\n        ").concat(percentile + percentileSuffix, " percentile and are ").concat(level, ".")
  }, validationMode ? null : _react.default.createElement("div", null, _react.default.createElement("p", {
    className: _score.default.score,
    style: {
      background: background
    },
    "aria-hidden": true
  }, _react.default.createElement("span", {
    className: _score.default.scoreHeader
  }, "Skill IQ"), _react.default.createElement("br", null), _react.default.createElement("span", {
    className: _score.default.IQ
  }, score)), _react.default.createElement("img", {
    className: _score.default.gravatarUrl,
    style: {
      borderColor: color
    },
    width: "24",
    height: "24",
    src: gravatarUrl,
    alt: "",
    "aria-hidden": true
  }), _react.default.createElement("p", {
    className: _score.default.percentile,
    "aria-hidden": true
  }, percentile + percentileSuffix, _react.default.createElement("br", null), _react.default.createElement("span", {
    className: _score.default.percentileText
  }, "percentile"))), _react.default.createElement("div", {
    className: _score.default.shape
  }, _react.default.createElement("svg", {
    className: _score.default.shapePath,
    "aria-hidden": true
  }, _react.default.createElement("path", {
    fill: scoreColors.NOVICE_COLOR,
    d: (0, _points.createShape)(0, 99, height, width)
  }), _react.default.createElement("path", {
    fill: scoreColors.PROFICIENT_COLOR,
    d: (0, _points.createShape)(99, 199, height, width)
  }), _react.default.createElement("path", {
    fill: scoreColors.EXPERT_COLOR,
    d: (0, _points.createShape)(199, 300, height, width)
  }))));
};

Score.propTypes = {
  /** The background color; must be a valid css color value */
  background: _propTypes.default.string,

  /** The integer score, 0-300 */
  score: _propTypes.default.number.isRequired,

  /** The height of the score graph */
  height: _propTypes.default.number.isRequired,

  /** The url to the user's avatar */
  gravatarUrl: _propTypes.default.string.isRequired,

  /** Whether or not this score graph
   * is being displayed for a validation mode assessment */
  validationMode: _propTypes.default.bool.isRequired,

  /** The width of the score graph */
  width: _propTypes.default.number.isRequired
};
Score.defaultProps = {
  background: undefined
};
var _default = Score;
exports.default = _default;
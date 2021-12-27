"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _recommendation = _interopRequireDefault(require("./recommendation"));

var _score = _interopRequireDefault(require("./score"));

var _lowestScore = _interopRequireDefault(require("./lowest-score"));

var _curve = _interopRequireDefault(require("./curve"));

var _graph = _interopRequireDefault(require("../css/graph.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The actual graph portion of the Score Graph
 */
var Graph = function Graph(props) {
  return _react.default.createElement("div", {
    className: _graph.default.base
  }, props.recommendation ? _react.default.createElement(_recommendation.default, {
    recommendation: props.recommendation
  }) : null, props.lowScore != null ? _react.default.createElement(_lowestScore.default, {
    lowScore: props.lowScore,
    highScore: props.score
  }) : null, _react.default.createElement(_score.default, {
    background: props.background,
    score: props.animationScore,
    gravatarUrl: props.gravatarUrl,
    validationMode: props.validationMode,
    height: props.height,
    width: props.width
  }), _react.default.createElement(_curve.default, {
    height: props.height,
    width: props.width
  }));
};

Graph.propTypes = {
  /** Interpolated score to use for animating the score & graph */
  animationScore: _propTypes.default.number.isRequired,

  /** The background color; must be a valid css color value */
  background: _propTypes.default.string,

  /** Optional lower discarded score */
  lowScore: _propTypes.default.number,

  /** Recommended user level */
  recommendation: _propTypes.default.string,

  /** The user's actual score */
  score: _propTypes.default.number.isRequired,

  /** User avatar image URL */
  gravatarUrl: _propTypes.default.string,

  /** Whether the graph is in validation mode */
  validationMode: _propTypes.default.bool.isRequired,

  /** The height and width based on viewport size */
  height: _propTypes.default.number.isRequired,
  width: _propTypes.default.number.isRequired
};
Graph.defaultProps = {
  background: '',
  lowScore: null,
  recommendation: '',
  gravatarUrl: null
};
var _default = Graph;
exports.default = _default;
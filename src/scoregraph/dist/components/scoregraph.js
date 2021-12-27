"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactMotion = require("react-motion");

var _scoreAxis = _interopRequireDefault(require("./score-axis"));

var _graph = _interopRequireDefault(require("./graph"));

var _scoreGraph = _interopRequireDefault(require("../css/score-graph.css"));

var _constants = require("../utils/constants");

var _learnerIcon = _interopRequireDefault(require("../img/learner-icon.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Score Graph
 *
 * The public component for displaying a user's score graph.
 */
var ScoreGraph = function ScoreGraph(_ref) {
  var background = _ref.background,
      lowScore = _ref.lowScore,
      gravatarUrl = _ref.gravatarUrl,
      recommendation = _ref.recommendation,
      score = _ref.score,
      size = _ref.size;
  var validationMode = score === null;
  var plotScore = score;

  if (validationMode) {
    plotScore = 300;
  }

  var height;
  var width;

  switch (size) {
    case _constants.LARGE_GRAPH:
      height = _constants.GRAPH_HEIGHT_LARGE;
      width = _constants.GRAPH_WIDTH_LARGE;
      break;

    case _constants.MED_GRAPH:
      height = _constants.GRAPH_HEIGHT_MED;
      width = _constants.GRAPH_WIDTH_MED;
      break;

    case _constants.SMALL_GRAPH:
      height = _constants.GRAPH_HEIGHT_SMALL;
      width = _constants.GRAPH_WIDTH_SMALL;
      break;

    default:
      height = _constants.GRAPH_HEIGHT_LARGE;
      width = _constants.GRAPH_WIDTH_LARGE;
      break;
  }

  return _react.default.createElement(_reactMotion.Motion, {
    defaultStyle: {
      score: 0
    },
    style: {
      score: (0, _reactMotion.spring)(plotScore, {
        stiffness: 60,
        dampening: 40
      })
    }
  }, function (interpolatedStyles) {
    return _react.default.createElement("div", {
      className: _scoreGraph.default.base,
      style: {
        background: background
      }
    }, _react.default.createElement("div", {
      className: _scoreGraph.default.main
    }, _react.default.createElement(_scoreAxis.default, {
      background: background
    }), _react.default.createElement(_graph.default, {
      animationScore: Math.round(interpolatedStyles.score),
      background: background,
      lowScore: lowScore,
      recommendation: recommendation,
      score: plotScore,
      validationMode: validationMode,
      gravatarUrl: gravatarUrl,
      height: height,
      width: width
    })));
  });
};

ScoreGraph.propTypes = {
  /** The background color; must be a valid css color value */
  background: _propTypes.default.string,

  /** Optional lower score to display */
  lowScore: _propTypes.default.number,

  /** User avatar image URL */
  gravatarUrl: _propTypes.default.string,

  /** Recommended level */
  recommendation: _propTypes.default.string,

  /** The user's score */
  score: _propTypes.default.number,

  /** The size of the graph */
  size: _propTypes.default.oneOf([_constants.LARGE_GRAPH, _constants.MED_GRAPH, _constants.SMALL_GRAPH])
};
ScoreGraph.defaultProps = {
  background: '#000',
  lowScore: null,
  gravatarUrl: _learnerIcon.default,
  recommendation: '',
  score: null,
  size: _constants.LARGE_GRAPH
};
var _default = ScoreGraph;
exports.default = _default;
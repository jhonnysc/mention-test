"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = levelOptions;

var scoreColors = _interopRequireWildcard(require("../score-colors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function levelOptions(score) {
  if (score >= 0 && score <= 100) {
    return {
      color: scoreColors.NOVICE_COLOR,
      level: 'Beginner'
    };
  }

  if (score >= 101 && score <= 200) {
    return {
      color: scoreColors.PROFICIENT_COLOR,
      level: 'Proficient'
    };
  }

  return {
    color: scoreColors.EXPERT_COLOR,
    level: 'Expert'
  };
}
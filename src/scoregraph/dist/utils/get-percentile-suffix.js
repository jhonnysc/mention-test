"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPercentileSuffix;

function getPercentileSuffix(percentile) {
  var modTen = percentile % 10;
  if (modTen === 1 && percentile !== 11) return 'st';
  if (modTen === 2 && percentile !== 12) return 'nd';
  if (modTen === 3 && percentile !== 13) return 'rd';
  return 'th';
}
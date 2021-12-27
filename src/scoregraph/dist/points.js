"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCurve = createCurve;
exports.createShape = createShape;
exports.default = void 0;

var _d3Shape = require("d3-shape");

var points = {
  percentile: [0, 0.00030205, 0.00061686, 0.00094488, 0.0012866, 0.0016424, 0.0020129, 0.0023984, 0.0027996, 0.003217, 0.003651, 0.0041022, 0.0045712, 0.0050585, 0.0055647, 0.0060904, 0.0066362, 0.0072027, 0.0077905, 0.0084003, 0.0090327, 0.0096883, 0.010368, 0.011072, 0.011801, 0.012557, 0.013339, 0.014148, 0.014986, 0.015852, 0.016748, 0.017675, 0.018633, 0.019622, 0.020644, 0.0217, 0.02279, 0.023915, 0.025076, 0.026273, 0.027508, 0.028782, 0.030094, 0.031447, 0.03284, 0.034275, 0.035753, 0.037273, 0.038838, 0.040448, 0.042104, 0.043806, 0.045556, 0.047354, 0.049201, 0.051098, 0.053045, 0.055045, 0.057096, 0.059201, 0.06136, 0.063573, 0.065841, 0.068166, 0.070548, 0.072987, 0.075484, 0.078041, 0.080657, 0.083333, 0.08607, 0.088869, 0.09173, 0.094654, 0.09764, 0.10069, 0.10381, 0.10698, 0.11023, 0.11354, 0.11691, 0.12036, 0.12387, 0.12744, 0.13108, 0.13479, 0.13857, 0.14242, 0.14633, 0.15031, 0.15436, 0.15848, 0.16267, 0.16692, 0.17124, 0.17563, 0.18009, 0.18461, 0.1892, 0.19386, 0.19859, 0.20338, 0.20823, 0.21315, 0.21814, 0.22319, 0.2283, 0.23348, 0.23872, 0.24402, 0.24938, 0.2548, 0.26028, 0.26582, 0.27141, 0.27707, 0.28277, 0.28853, 0.29435, 0.30021, 0.30613, 0.3121, 0.31811, 0.32417, 0.33028, 0.33643, 0.34262, 0.34886, 0.35513, 0.36145, 0.3678, 0.37419, 0.38061, 0.38706, 0.39354, 0.40005, 0.40659, 0.41316, 0.41974, 0.42635, 0.43298, 0.43963, 0.4463, 0.45298, 0.45967, 0.46638, 0.47309, 0.47981, 0.48654, 0.49327, 0.5, 0.50673, 0.51346, 0.52019, 0.52691, 0.53362, 0.54033, 0.54702, 0.5537, 0.56037, 0.56702, 0.57365, 0.58026, 0.58684, 0.59341, 0.59995, 0.60646, 0.61294, 0.61939, 0.62581, 0.6322, 0.63855, 0.64487, 0.65114, 0.65738, 0.66357, 0.66972, 0.67583, 0.68189, 0.6879, 0.69387, 0.69979, 0.70565, 0.71147, 0.71723, 0.72293, 0.72859, 0.73418, 0.73972, 0.7452, 0.75062, 0.75598, 0.76128, 0.76652, 0.7717, 0.77681, 0.78186, 0.78685, 0.79177, 0.79662, 0.80141, 0.80614, 0.8108, 0.81539, 0.81991, 0.82437, 0.82876, 0.83308, 0.83733, 0.84152, 0.84564, 0.84969, 0.85367, 0.85758, 0.86143, 0.86521, 0.86892, 0.87256, 0.87613, 0.87964, 0.88309, 0.88646, 0.88977, 0.89302, 0.89619, 0.89931, 0.90236, 0.90535, 0.90827, 0.91113, 0.91393, 0.91667, 0.91934, 0.92196, 0.92452, 0.92701, 0.92945, 0.93183, 0.93416, 0.93643, 0.93864, 0.9408, 0.9429, 0.94496, 0.94695, 0.9489, 0.9508, 0.95265, 0.95444, 0.95619, 0.9579, 0.95955, 0.96116, 0.96273, 0.96425, 0.96572, 0.96716, 0.96855, 0.96991, 0.97122, 0.97249, 0.97373, 0.97492, 0.97609, 0.97721, 0.9783, 0.97936, 0.98038, 0.98137, 0.98233, 0.98325, 0.98415, 0.98501, 0.98585, 0.98666, 0.98744, 0.9882, 0.98893, 0.98963, 0.99031, 0.99097, 0.9916, 0.99221, 0.9928, 0.99336, 0.99391, 0.99444, 0.99494, 0.99543, 0.9959, 0.99635, 0.99678, 0.9972, 0.9976, 0.99799, 0.99836, 0.99871, 0.99906, 0.99938, 0.9997, 1]
};

function createCurve(start, end, height, width) {
  var data = points.percentile.slice(start, end);
  var totalPoints = 300;
  var lineFunction = (0, _d3Shape.line)().y(function (d, i) {
    return Math.abs((i + start) / totalPoints * height - height);
  }).x(function (d) {
    return d * width;
  });
  return lineFunction(data);
}

function createShape(start, end, height, width) {
  var curve = createCurve(start, end, height, width);
  return "".concat(curve, "l0,").concat(height, "L").concat(points.percentile[start] * width, ",").concat(height);
}

var _default = points;
exports.default = _default;
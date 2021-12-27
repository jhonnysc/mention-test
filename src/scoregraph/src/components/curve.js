import React from 'react'
import PropTypes from 'prop-types'
import { createCurve } from '../points'
import * as scoreColors from '../score-colors'
import '../css/curve.css'

/**
 * Score curve portion of the skill graph
 */
const Curve = ({ height, width }) => (
  <svg className="base" aria-hidden>
    <path
      className="line"
      stroke={scoreColors.NOVICE_COLOR}
      strokeWidth={2}
      d={createCurve(0, 100, height, width)}
    />
    <path
      className="line"
      stroke={scoreColors.PROFICIENT_COLOR}
      strokeWidth={2}
      d={createCurve(100, 200, height, width)}
    />
    <path
      className="line"
      stroke={scoreColors.EXPERT_COLOR}
      strokeWidth={2}
      d={createCurve(200, 300, height, width)}
    />
  </svg>
)

Curve.propTypes = {
  /** The height of the score graph */
  height: PropTypes.number.isRequired,
  /** The width of the score graph */
  width: PropTypes.number.isRequired,
}

export default Curve

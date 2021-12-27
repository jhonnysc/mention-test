import PropTypes from 'prop-types'
import React from 'react'
import * as scoreColors from '../score-colors'
import points, { createShape } from '../points'
import '../css/score.css'
import suffix from '../utils/get-percentile-suffix'
import levelOptions from '../utils/level-options'

/**
 * The actual score plot point containing the user's score and gravatar
 */
const Score = ({
  background, height, score, gravatarUrl, validationMode, width,
}) => {
  // These are the values that define both where the actual score icon
  // goes and where the dotted line from the left side is rendered
  const plotPointStyles = {
    height: Math.abs((score / 300) * height),
    // The 6 pixels are here currently to account for the full-sized icon-free render
    width: points.percentile[score] * (validationMode ? width + 6 : width),
  }

  const { color, level } = levelOptions(score)
  const percentile = Math.round(points.percentile[score] * 100) || 1
  const percentileSuffix = suffix(percentile)
  const dynamicBase = validationMode ? "scoreBaseNoBorder" : "scoreBase"

  return (
    <div
      className={dynamicBase}
      style={plotPointStyles}
      aria-label={`Your assessment score is ${score} out of 300. You rank in the
        ${percentile + percentileSuffix} percentile and are ${level}.`}
    >
      {validationMode ? null : (
        <div>
          <p className={"score"} style={{ background }} aria-hidden>
            <span className={"scoreHeader"}>Skill IQ</span>
            <br />
            <span className={"IQ"}>{score}</span>
          </p>
          <img
            className={"gravatarUrl"}
            style={{ borderColor: color }}
            width="24"
            height="24"
            src={gravatarUrl}
            alt=""
            aria-hidden
          />
          <p className={"percentile"} aria-hidden>
            {percentile + percentileSuffix}
            <br />
            <span className={"percentileText"}>percentile</span>
          </p>
        </div>
      )}
      <div className={"shape"}>
        <svg className={"shapePath"} aria-hidden>
          <path fill={scoreColors.NOVICE_COLOR} d={createShape(0, 99, height, width)} />
          <path fill={scoreColors.PROFICIENT_COLOR} d={createShape(99, 199, height, width)} />
          <path fill={scoreColors.EXPERT_COLOR} d={createShape(199, 300, height, width)} />
        </svg>
      </div>
    </div>
  )
}

Score.propTypes = {
  /** The background color; must be a valid css color value */
  background: PropTypes.string,
  /** The integer score, 0-300 */
  score: PropTypes.number.isRequired,
  /** The height of the score graph */
  height: PropTypes.number.isRequired,
  /** The url to the user's avatar */
  gravatarUrl: PropTypes.string.isRequired,
  /** Whether or not this score graph
   * is being displayed for a validation mode assessment */
  validationMode: PropTypes.bool.isRequired,
  /** The width of the score graph */
  width: PropTypes.number.isRequired,
}

Score.defaultProps = {
  background: undefined,
}

export default Score

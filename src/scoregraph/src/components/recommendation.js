import PropTypes from 'prop-types'
import React from 'react'
import '../css/recommendation.css'

/**
 * The path level recommendation for a given score
 */
const Recommendation = props => (
  <div className={"base"}>
    <p className={"description"}>
      We recommend starting at:
      <span className={"level"}>
        {props.recommendation}
        {' level'}
      </span>
    </p>
  </div>
)

Recommendation.propTypes = {
  /** The name of the path level recommended; one of "Beginner", "Intermediate", "Advanced" */
  recommendation: PropTypes.string.isRequired,
}

export default Recommendation

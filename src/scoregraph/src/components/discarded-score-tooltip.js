import PropTypes from 'prop-types'
import React from 'react'
import '../css/discarded-score-tooltip.css'

/**
 * Tooltip to show for a discarded lower score
 */
const DiscardedScoreTooltip = props => {
  const xOffset = 57
  const yOffset = 50
  return (
    <div key="hoverBubble">
      <div className={"tooltip"} style={{ left: props.location.x - xOffset, top: -yOffset }}>
        <div className={"tooltipContainer"}>
          <div className={"tooltipText"}>Discarded rating</div>
          <div className={"tooltipScore"}>{props.lowScore}</div>
        </div>
      </div>
    </div>
  )
}

DiscardedScoreTooltip.propTypes = {
  /** The location to draw  */
  location: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  /** The discarded score */
  lowScore: PropTypes.number.isRequired,
}

export default DiscardedScoreTooltip

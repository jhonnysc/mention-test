import PropTypes from 'prop-types'
import React from 'react'
import Recommendation from './recommendation'
import Score from './score'
import LowScore from './lowest-score'
import Curve from './curve'
import '../css/graph.css'
/**
 * The actual graph portion of the Score Graph
 */
const Graph = props => (
  <div className="base">
    {props.recommendation ? <Recommendation recommendation={props.recommendation} /> : null}
    {props.lowScore != null ? <LowScore lowScore={props.lowScore} highScore={props.score} /> : null}
    <Score
      background={props.background}
      score={props.animationScore}
      gravatarUrl={props.gravatarUrl}
      validationMode={props.validationMode}
      height={props.height}
      width={props.width}
    />
    <Curve height={props.height} width={props.width} />
  </div>
)

Graph.propTypes = {
  /** Interpolated score to use for animating the score & graph */
  animationScore: PropTypes.number.isRequired,
  /** The background color; must be a valid css color value */
  background: PropTypes.string,
  /** Optional lower discarded score */
  lowScore: PropTypes.number,
  /** Recommended user level */
  recommendation: PropTypes.string,
  /** The user's actual score */
  score: PropTypes.number.isRequired,
  /** User avatar image URL */
  gravatarUrl: PropTypes.string,
  /** Whether the graph is in validation mode */
  validationMode: PropTypes.bool.isRequired,
  /** The height and width based on viewport size */
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

Graph.defaultProps = {
  background: '',
  lowScore: null,
  recommendation: '',
  gravatarUrl: null,
}

export default Graph

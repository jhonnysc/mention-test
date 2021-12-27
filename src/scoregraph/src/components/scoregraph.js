import PropTypes from 'prop-types'
import React from 'react'
import { Motion, spring } from 'react-motion'
import ScoreAxis from './score-axis'
import Graph from './graph'
import styles from '../css/score-graph.css'
import {
  GRAPH_HEIGHT_SMALL,
  GRAPH_WIDTH_SMALL,
  GRAPH_HEIGHT_MED,
  GRAPH_WIDTH_MED,
  GRAPH_HEIGHT_LARGE,
  GRAPH_WIDTH_LARGE,
  LARGE_GRAPH,
  MED_GRAPH,
  SMALL_GRAPH,
} from '../utils/constants'
import defaultGravatarUrl from '../img/learner-icon.png'

/**
 * Score Graph
 *
 * The public component for displaying a user's score graph.
 */
const ScoreGraph = ({
  background, lowScore, gravatarUrl, recommendation, score, size,
}) => {
  const validationMode = score === null
  let plotScore = score
  if (validationMode) {
    plotScore = 300
  }
  let height
  let width
  switch (size) {
    case LARGE_GRAPH:
      height = GRAPH_HEIGHT_LARGE
      width = GRAPH_WIDTH_LARGE
      break
    case MED_GRAPH:
      height = GRAPH_HEIGHT_MED
      width = GRAPH_WIDTH_MED
      break
    case SMALL_GRAPH:
      height = GRAPH_HEIGHT_SMALL
      width = GRAPH_WIDTH_SMALL
      break
    default:
      height = GRAPH_HEIGHT_LARGE
      width = GRAPH_WIDTH_LARGE
      break
  }


  return (
    <Motion
      defaultStyle={{ score: 0 }}
      style={{ score: spring(plotScore, { stiffness: 60, dampening: 40 }) }}
    >
      {interpolatedStyles => (
        <div className={styles.base} style={{ background }}>
          <div className={styles.main}>
            <ScoreAxis background={background} />
            <Graph
              animationScore={Math.round(interpolatedStyles.score)}
              background={background}
              lowScore={lowScore}
              recommendation={recommendation}
              score={plotScore}
              validationMode={validationMode}
              gravatarUrl={gravatarUrl}
              height={height}
              width={width}
            />
          </div>
        </div>
      )}
    </Motion>
  )
}

ScoreGraph.propTypes = {
  /** The background color; must be a valid css color value */
  background: PropTypes.string,
  /** Optional lower score to display */
  lowScore: PropTypes.number,
  /** User avatar image URL */
  gravatarUrl: PropTypes.string,
  /** Recommended level */
  recommendation: PropTypes.string,
  /** The user's score */
  score: PropTypes.number,
  /** The size of the graph */
  size: PropTypes.oneOf([LARGE_GRAPH, MED_GRAPH, SMALL_GRAPH]),
}

ScoreGraph.defaultProps = {
  background: '#000',
  lowScore: null,
  gravatarUrl: defaultGravatarUrl,
  recommendation: '',
  score: null,
  size: LARGE_GRAPH,
}

export default ScoreGraph

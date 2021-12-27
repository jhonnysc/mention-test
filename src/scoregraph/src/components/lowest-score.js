import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import points from '../points'
import '../css/lowest-score.css'
import DiscardedScoreTooltip from './discarded-score-tooltip'

/**
 * Plot point indicating a lower, discarded score
 */
export default class LowScore extends Component {
  constructor() {
    super()
    this.state = {
      hover: false,
    }
    this.onHover = this.onHover.bind(this)
    this.offHover = this.offHover.bind(this)
  }

  onHover() {
    this.setState({ hover: true })
  }

  offHover() {
    this.setState({ hover: false })
  }

  render() {
    const score = this.props.lowScore
    // If the low and high scores are within 10 points of each other, we want
    // To visually offset them so they're not squished too close together
    const diff = score > this.props.highScore - 9 ? this.props.highScore - 10 : score
    const plot = {
      x: points.percentile[diff] * 530 + 26,
      y: Math.abs((diff / 300) * 190),
    }
    const lowestPlot = {
      height: plot.y + 6,
      width: plot.x,
    }
    return (
      <div
        className={"lowestScore"}
        style={lowestPlot}
        onMouseOver={this.onHover}
        onFocus={this.onHover}
        onMouseOut={this.offHover}
        onBlur={this.offHover}
      >
        <ReactCSSTransitionGroup
          transitionName="hover"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.hover ? (
            <DiscardedScoreTooltip location={plot} lowScore={this.props.lowScore} />
          ) : null}
        </ReactCSSTransitionGroup>
        <svg width="530" height="20" aria-hidden>
          <circle
            cx={plot.x}
            cy="8"
            r="6"
            stroke="#787"
            strokeWidth="2.5"
            fill="#FFF"
            opacity="0.75"
          />
        </svg>
      </div>
    )
  }
}

LowScore.propTypes = {
  /** The discarded lower score */
  lowScore: PropTypes.number.isRequired,
  /** The higher score */
  highScore: PropTypes.number.isRequired,
}

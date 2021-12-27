import React from 'react'
import '../css/score-axis.css'

const ScoreAxis = () => (
  <div className={"base"} aria-hidden>
    <div className={"levels"}>
      <dl className={`${"expert"}`}>
        <dt>Expert</dt>
        <dd className={"range"}>201-300</dd>
      </dl>

      <dl className={`${"proficient"}`}>
        <dt>Proficient</dt>
        <dd className={"range"}>101-200</dd>
      </dl>

      <dl className={`${"novice"}`}>
        <dt>Novice</dt>
        <dd className={"range"}>0-100</dd>
      </dl>
    </div>
  </div>
)

export default ScoreAxis

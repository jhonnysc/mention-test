import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryWrapperDark from 'story-wrapper-dark'

import ScoreGraph from '@pluralsight/react-scoregraph'

const BACKGROUND_COLOR = '#181818'

// This set of styles is used to simulate ambient CSS; this should not affect the graph
const css = `
  p {
    margin-top: 30px;
    margin-bottom: 27px;
  }
`

storiesOf('ScoreGraph', module)
  .addDecorator(story => (
    <div>
      <style>{css}</style>
      <StoryWrapperDark>{story()}</StoryWrapperDark>
    </div>
  ))

  .add('55 and 105', () => (
    <ScoreGraph
      lowScore={55}
      score={105}
      gravatarUrl="http://fanaru.com/doge/image/thumb/11951-doge-doge-eyes.jpg"
      background={BACKGROUND_COLOR}
    />
  ))
  .add('105 and 150', () => (
    <ScoreGraph
      lowScore={105}
      score={150}
      gravatarUrl="https://pbs.twimg.com/profile_images/691394350006177793/dV2zgoWt.jpg"
      background={BACKGROUND_COLOR}
    />
  ))
  .add('205 and 210', () => (
    <ScoreGraph
      lowScore={205}
      score={210}
      gravatarUrl="https://pbs.twimg.com/media/BLw0bLHCcAAuks-.png"
      background={BACKGROUND_COLOR}
    />
  ))
  .add('overlap (55 and 85)', () => (
    <ScoreGraph lowScore={55} score={85} background={BACKGROUND_COLOR} />
  ))
  .add('One Score (205)', () => (
    <ScoreGraph
      score={205}
      gravatarUrl="http://www.nyan.cat/cats/original.gif"
      background={BACKGROUND_COLOR}
    />
  ))
  .add('Right on the edge (0)', () => (
    <ScoreGraph
      score={0}
      gravatarUrl="http://fanaru.com/doge/image/thumb/11951-doge-doge-eyes.jpg"
      background={BACKGROUND_COLOR}
    />
  ))
  .add('Right on the edge (100)', () => (
    <ScoreGraph
      score={100}
      gravatarUrl="http://fanaru.com/doge/image/thumb/11951-doge-doge-eyes.jpg"
      background={BACKGROUND_COLOR}
    />
  ))
  .add('Right on the edge (200)', () => (
    <ScoreGraph
      score={200}
      gravatarUrl="http://fanaru.com/doge/image/thumb/11951-doge-doge-eyes.jpg"
      background={BACKGROUND_COLOR}
    />
  ))
  .add('Right on the edge (300)', () => (
    <ScoreGraph
      score={300}
      gravatarUrl="http://fanaru.com/doge/image/thumb/11951-doge-doge-eyes.jpg"
      background={BACKGROUND_COLOR}
    />
  ))
  .add('Very low score (5)', () => (
    <ScoreGraph
      score={5}
      gravatarUrl="http://fanaru.com/doge/image/thumb/11951-doge-doge-eyes.jpg"
      background={BACKGROUND_COLOR}
    />
  ))
  .add('No Score', () => <ScoreGraph background={BACKGROUND_COLOR} />)
  .add('Recommendations', () => (
    <ScoreGraph background={BACKGROUND_COLOR} recommendation="Be happy - always" />
  ))

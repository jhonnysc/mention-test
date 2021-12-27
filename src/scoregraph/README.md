# ScoreGraph

Graph component for skill tests scores.

## Install

```
npm install @pluralsight/scoregraph
```

## Usage
Mount to a DOM element or within your React component like any other React component.

```
React.render(<ScoreGraph score={150} picture="http://example.com/user_avatar.png"/>, document.body)
```

## Props

**score**. Required. Integer. The score to display on the graph.

**picture**. Required. String. URL of the user's profile picture.

**background**. Optional. String. Color for the graph background.

**lowest**. Optional. Turns on retake mode. Should always be the lesser of the two scores.

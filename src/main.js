/* @flow */
"use strict";
require("babelify/polyfill");
var React = require("react");
var classNames = require("classnames");

// Coordinates (0,0) and (100,100) are the top-left and bottom-right corners of
// the largest square which fits into the viewport, centered in both directions.
var Rectangle = React.createClass({
  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    style: React.PropTypes.object
  },
  render: function() {
    var { x, y, width, height, color, style, ...other } = this.props;
    style = style || {};
    style.position = 'absolute';
    style.left = `calc(${x}vmin + 50vw - 50vmin)`;
    style.top = `calc(${y}vmin + 50vh - 50vmin)`;
    style.width = `${width}vmin`;
    style.height = `${height}vmin`;
    style.backgroundColor = color;
    
    return <div style={style} {...other} />;
  }
});

var Paddle = React.createClass({
  width: 2,
  height: 10,
  propTypes: {
    x: React.PropTypes.number.isRequired
  },
  getInitialState: function() {
    return {atBottom: false};
  },
  handleClick: function(event) {
    this.setState({atBottom: !this.state.atBottom});
  },
  render: function() {
    var y = this.state.atBottom ? 98 - this.height : 2;
    return <Rectangle
      x={this.props.x - this.width/2} y={y}
      width={this.width} height={this.height}
      color="black"
      style={{'transition': 'top 1s'}}
      onClick={this.handleClick}
    />;
  }
});

React.render(
  <div>
    <Rectangle x={0} y={0} width={100} height={100} color="lightgrey" />
    <Paddle x={3} />
    <Paddle x={97} />
  </div>,
  document.getElementById('root')
);

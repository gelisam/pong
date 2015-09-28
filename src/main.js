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
    color: React.PropTypes.string,
    style: React.PropTypes.object,
  },
  getDefaultProps: function() {
    return {
      color: 'black',
      style: {},
    };
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
  },
});

var Circle = React.createClass({
  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    radius: React.PropTypes.number.isRequired,
    color: React.PropTypes.string,
    style: React.PropTypes.object,
  },
  getDefaultProps: function() {
    return {
      color: 'black',
      style: {},
    };
  },
  render: function() {
    var { x, y, radius, color, style, ...other } = this.props;
    style = style || {};
    style.position = 'absolute';
    style.left = `calc(${x}vmin + 50vw - 50vmin)`;
    style.top = `calc(${y}vmin + 50vh - 50vmin)`;
    style.width = `${2*radius}vmin`;
    style.height = `${2*radius}vmin`;
    style.borderRadius = '50%';
    style.backgroundColor = color;
    
    return <div style={style} {...other} />;
  },
});

var Paddle = React.createClass({
  width: 2,
  height: 10,
  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
  },
  render: function() {
    return <Rectangle
      x={this.props.x - this.width/2} y={this.props.y - this.height/2}
      width={this.width} height={this.height}
      style={{'transition': 'top 1s'}}
    />;
  },
});

var Game = React.createClass({
  getInitialState: function() {
    window.onkeydown = this.handleKey;
    return {
      paddleAtBottom: false
    };
  },
  handleKey: function(event) {
    //console.log("key: " + event.char + " " + event.keyCode);
    if (event.keyCode == 87/*W*/ || event.keyCode == 38/*UP*/) {
      this.setState({atBottom: false});
    } else if (event.keyCode == 83/*S*/ || event.keyCode == 40/*DOWN*/) {
      this.setState({atBottom: true});
    } else {
      this.setState({atBottom: !this.state.atBottom});
    }
  },
  render: function() {
    var y = this.state.atBottom ? 93 : 7;
    return <div>
      <Rectangle x={0} y={0} width={100} height={100} color="lightgrey" />
      <Paddle x={3} y={y} />
      <Paddle x={97} y={7} />
      <Circle x={50} y={50} radius={2} />
    </div>;
  },
});

React.render(
  <Game />,
  document.getElementById('root')
);

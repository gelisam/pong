/* @flow */
"use strict";
require("babelify/polyfill");
var React = require("react");
var classNames = require("classnames");

var Paddle = React.createClass({
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
    var posClass = this.state.atBottom ? 'bottom' : 'top';
    return (
      <div
        className={classNames('paddle', posClass)}
        style={{'left': this.props.x}}
        onClick={this.handleClick}
      />
    );
  }
});

React.render(
  <div>
    <Paddle x={10} />
    <Paddle x={400} />
  </div>,
  document.getElementById('root')
);

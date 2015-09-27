/* @flow */
"use strict";
require("babelify/polyfill");
var React = require("react");
var classNames = require("classnames");

var Paddle = React.createClass({
  getInitialState: function() {
    return {atBottom: false};
  },
  handleClick: function(event) {
    this.setState({atBottom: !this.state.atBottom});
  },
  render: function() {
    var posClass = this.state.atBottom ? 'bottom' : 'top';
    return (
      <div className={classNames('paddle', posClass)} onClick={this.handleClick} />
    );
  }
});

React.render(
  <Paddle />,
  document.getElementById('root')
);

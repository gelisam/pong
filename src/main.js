/* @flow */
"use strict";
require("babelify/polyfill");
var React = require("react");


console.log(1);

var x: number = 2;
console.log(x);

let y: number = 3;
console.log(y);

console.log(4);

React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);

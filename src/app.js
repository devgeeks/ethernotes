/**
 * @jsx React.DOM
 */

var App = require('./components/App');
var React = require('react/addons');
var attachFastClick = require('fastclick');
attachFastClick(document.body);

// This will change to react-router in the future
React.render(
  <App />,
  document.getElementById('ethernotes')
);


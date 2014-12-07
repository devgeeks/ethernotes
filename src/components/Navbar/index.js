/**
 * @jsx React.DOM
 */

/* jshint node: true */
"use strict";

var React = require('react');

var Navbar = React.createClass({

  render: function() {
    return (
      <div className='navbar'>
        <div className='button left menu'>
          <a href='#'><i className='mdi mdi-menu'></i></a>
        </div>
        <h1><a href='#' className='type-dropdown'>Notes
          <i className='mdi mdi-menu-down'></i>
          </a> <small>{this.props.title}</small>
        </h1>
      </div>
    );
  }

});

module.exports = Navbar;

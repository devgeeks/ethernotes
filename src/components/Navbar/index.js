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
          <a href='#'><i className='icon ion-android-menu'></i></a>
        </div>
        <h1><a href='#' className='type-dropdown'>Notes <i 
          className='icon ion-arrow-down-b'></i>
        </a> <small>Ethernotes</small></h1>
      </div>
    );
  }

});

module.exports = Navbar;
